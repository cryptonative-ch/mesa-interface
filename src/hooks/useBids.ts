// External
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

// Hooks
import { useMesa } from 'src/hooks/useMesa'

// Redux actions
import { initialBidSuccess, initialBidFailure, initialBidRequest, BidsBySaleId } from 'src/redux/bids'
// Interfaces
import { SaleBid, SaleType } from 'src/interfaces/Sale'

// Blockchain websocket
import { useChain } from 'src/hooks/useChain'

// Query
import { saleBidsQuery } from 'src/subgraph/SaleBids'

interface UseBidsReturn {
  loading: boolean
  error: Error | null
  bids: SaleBid[]
  totalBids: SaleBid[]
}

export function useBids(saleId: string, saleType: SaleType): UseBidsReturn {
  const dispatch = useDispatch()
  const { account, library, chainId } = useWeb3React()
  const mesa = useMesa()
  const {
    isLoading,
    error,
    bidsBySaleId: { [saleId]: { updatedAt } = { updatedAt: 0 } },
  } = useSelector(({ bids }) => bids)

  const { bids: totalBids } = useChain(saleId, saleType)
  const bids = totalBids.filter((bid: any) => bid.buyer.toLowerCase() === account?.toLowerCase())

  useEffect(() => {
    // only request new bids if the delta between Date.now and saleId.updatedAt is more than 30 seconds
    const timeNow = dayjs.utc().unix()
    const delta = Math.abs(updatedAt - timeNow)
    if (delta <= 30 && account) {
      return
    }

    //pull past bids from subgraph
    dispatch(initialBidRequest(true))

    mesa.subgraph
      .query(saleBidsQuery(saleId))
      .then(({ data }) => {
        const { fixedPriceSales, fairSales } = data
        const saleBids = fixedPriceSales ? fixedPriceSales[0].purchases : fairSales[0].bids
        const sales = saleBids.reduce(
          (_: BidsBySaleId, x: any) => ({
            [x.sale.id]: {
              lastUpdated: Date.now(),
              bids: saleBids,
            },
          }),
          {}
        )
        dispatch(initialBidSuccess(sales))
      })
      .catch(bidsError => {
        dispatch(initialBidFailure(bidsError))
      })
  }, [account, dispatch, library, chainId])

  return {
    totalBids,
    bids,
    loading: isLoading,
    error,
  }
}
