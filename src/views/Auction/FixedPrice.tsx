// External
import React, { useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { ethers } from 'ethers'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import WalletConnector from 'cryptowalletconnector'
import numeral from 'numeral'
import styled from 'styled-components'

// Hooks
import { useWindowSize } from 'src/hooks/useWindowSize'

// Actions
import { setPageTitle } from 'src/redux/page'

// Components
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { BackButton } from 'src/components/BackButton'
import { AuctionHeader } from './components/AuctionHeader'
import { PlaceBidForm } from './components/PlaceBidForm'
import { Container } from 'src/components/Container'
import { CardTitle } from 'src/components/CardTitle'
import { CardBody } from 'src/components/CardBody'
import { MobileFooter } from 'src/components/MobileFooter'
import { Card } from 'src/components/Card'
import { Flex } from 'src/components/Flex'
import { FormButton } from 'src/components/FormButton'
import { HeaderItem } from './components/HeaderItem'
import { HeaderControl } from './components/HeaderControl'
import { SelfBidList } from './components/SelfBidList'
import { TokenFooter } from './components/TokenFooter'
// Svg
import MetamaskImage from 'src/assets/svg/metamask.svg'
import WalletImage from 'src/assets/svg/wallet_connect.svg'

// Mesa Utils
import { isAuctionClosed, isAuctionOpen, isAuctionUpcoming } from 'src/mesa/auction'
import { convertTimestampWithMoment, calculateTimeDifference } from 'src/utils/date'

// Wallet Utils
import { getRandomWallet } from 'src/utils/wallets'

// Views
import { NotFoundView } from 'src/views/NotFound'

// Interfaces
import { Auction, AuctionBid } from 'src/interfaces/Auction'

// Constants
import { FIXED_PRICE_SALE_CONTRACT_ADDRESS } from 'src/constants'
import FixedPriceSaleABI from 'src/constants/FixedPriceSale.json'
import { RootState } from 'src/redux/store'
import { fetchAuctions } from 'src/redux/auctionListings'
import { auctionsRequest } from 'src/subgraph/Auctions'
import { ENDPOINT, subgraphCall } from 'src/subgraph'
import { auctionBidsQuery } from 'src/subgraph/AuctionBids'
import { fetchAuctionBids } from 'src/redux/bidData'
import { Center } from 'src/layouts/Center'

// Mesa Utils
import { formatBigInt } from 'src/utils/Defaults'

const FixedFormMax = styled.div({
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19px',
  color: '#7B7F93',
})

type BidFormProps = {
  tokenAmount: number
  tokenPrice: number
}

interface FixedPriceAuctionViewParams {
  auctionId: string
}

export function FixedPriceAuctionView() {
  const wallet = useWallet()
  const { isMobile } = useWindowSize()
  const walletAddress = wallet.account ? `${wallet.account.substr(0, 6)}...${wallet.account.substr(-4)}` : ''
  const [fixedPriceContract, setFixedPriceContract] = useState<ethers.Contract>()
  const [connectModal, setModalVisible] = useState<boolean>(false)
  const [showGraph, setShowGraph] = useState<boolean>(false)
  const [userAddress, setUserAddress] = useState<string>('')

  const params = useParams<FixedPriceAuctionViewParams>()
  const dispatch = useDispatch()
  const [t] = useTranslation()
  const theme = useTheme()

  const fetchData = () => dispatch(fetchAuctions(auctionsRequest))

  const auction = useSelector<RootState, Auction>(state => {
    const auctions = state.AuctionReducer.auctions.filter(auction => auction.id == params.auctionId)[0]
    return auctions
  })

  const loading = useSelector<RootState, boolean>(state => {
    return state.BidReducer.isLoading
  })

  const bids = useSelector<RootState, AuctionBid[]>(state => {
    return state.BidReducer.bids
  })

  const toggleModal = () => {
    setModalVisible(true)
  }

  const toggleGraph = () => {
    if (showGraph || (auction && bids && bids.length > 0)) {
      setShowGraph(!showGraph)
    }
  }

  const buyToken = async ({ tokenAmount }: BidFormProps) => {
    if (fixedPriceContract) {
      try {
        const closed = await fixedPriceContract.buyTokens(tokenAmount)
        console.log(closed)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (!wallet.chainId || !wallet.ethereum || !wallet.account) {
      return
    }
    // An example Provider
    const provider = new ethers.providers.Web3Provider(wallet.ethereum as ethers.providers.ExternalProvider)
    // An example Signer
    const signer = provider.getSigner(0)
    setFixedPriceContract(new ethers.Contract(FIXED_PRICE_SALE_CONTRACT_ADDRESS, FixedPriceSaleABI, signer))
  }, [wallet])

  useEffect(() => {
    if (!userAddress) {
      setUserAddress(walletAddress || getRandomWallet().address)
    }

    if (auction) {
      const auctionBidsRequest = subgraphCall(ENDPOINT, auctionBidsQuery(params.auctionId, auction.type))
      const fetchBids = () => dispatch(fetchAuctionBids(params.auctionId, auction.type, auctionBidsRequest))
      fetchBids()
    }
    dispatch(setPageTitle(t(auction?.name as string)))
  }, [t])

  if (loading) {
    return <Center minHeight="100%">LOADING</Center>
  }

  if (!auction) {
    fetchData()
    if (!auction) {
      return <NotFoundView />
    }
  }

  return (
    <Container minHeight="100%" inner={false} noPadding={true}>
      <Header connectWallet={toggleModal} isConnecting={connectModal}></Header>
      <Container noPadding>
        {!isMobile && <BackButton />}
        <AuctionHeader auction={auction} />
        <Flex flexDirection="row" justifyContent="space-between">
          <Flex flexDirection="column" flex={1}>
            <Card border="none" marginX={isMobile ? '8px' : '0'}>
              <CardBody
                display="flex"
                borderBottom="1px dashed #DDDDE3"
                padding={isMobile ? '16px 16px 0 16px' : theme.space[4]}
              >
                {isMobile ? (
                  <Flex flexDirection="column" flex={1}>
                    <HeaderItem
                      isMobile
                      title="Price"
                      description={`${formatBigInt(auction.tokenPrice).toFixed(2)} DAI/${auction.tokenOut?.symbol}`}
                    />
                    <HeaderItem
                      isMobile
                      title={isAuctionClosed(auction) ? 'Amount Sold' : 'Min. - Max. Allocation'}
                      description={`${numeral(formatBigInt(auction.allocationMin)).format('0,0')} - ${numeral(
                        formatBigInt(auction.allocationMax)
                      ).format('0,0')} ${auction.tokenOut?.symbol}`}
                    />
                    {isAuctionClosed(auction) && (
                      <HeaderItem
                        isMobile
                        title="Closed On"
                        description={convertTimestampWithMoment(auction.endDate)}
                        textAlign="right"
                      />
                    )}
                    {isAuctionUpcoming(auction) && (
                      <HeaderItem
                        isMobile
                        title="Starts On"
                        description={convertTimestampWithMoment(auction.startDate)}
                        textAlign="right"
                      />
                    )}
                    {isAuctionOpen(auction) && (
                      <HeaderItem
                        isMobile
                        title="Ends In"
                        description={calculateTimeDifference(auction.endDate)}
                        textAlign="right"
                        auctionLive={true}
                        auction={auction}
                      />
                    )}
                  </Flex>
                ) : (
                  <Flex flexDirection="row" alignItems="center" flex={1}>
                    <HeaderItem
                      title="Price"
                      description={`${formatBigInt(auction.tokenPrice).toFixed(2)} DAI/${auction.tokenOut?.symbol}`}
                    />
                    <HeaderItem
                      title={isAuctionClosed(auction) ? 'Amount Sold' : 'Min. - Max. Allocation'}
                      description={`${numeral(formatBigInt(auction.allocationMin)).format('0,0')} - ${numeral(
                        formatBigInt(auction.allocationMax)
                      ).format('0,0')} ${auction.tokenOut?.symbol}`}
                      flexAmount={1.5}
                    />
                    {(isAuctionClosed(auction) || isAuctionUpcoming(auction)) && <Flex flex={0.2} />}
                    {isAuctionClosed(auction) && (
                      <HeaderItem
                        title="Closed On"
                        description={convertTimestampWithMoment(auction.endDate)}
                        textAlign="right"
                      />
                    )}
                    {isAuctionUpcoming(auction) && (
                      <HeaderItem
                        title="Starts On"
                        description={convertTimestampWithMoment(auction.startDate)}
                        textAlign="right"
                      />
                    )}
                    {isAuctionOpen(auction) && (
                      <HeaderItem
                        title="Ends In"
                        description={calculateTimeDifference(auction.endDate)}
                        textAlign="right"
                        auctionLive={true}
                        auction={auction}
                        flexAmount={1.3}
                      />
                    )}
                  </Flex>
                )}
              </CardBody>
              {isAuctionOpen(auction) && bids && bids.length > 0 && (
                <CardBody display="flex" padding={isMobile ? '16px' : theme.space[4]} border="none">
                  <HeaderControl auction={auction} showGraph={showGraph} toggleGraph={toggleGraph} isFixed={true} />
                </CardBody>
              )}
              {isAuctionClosed(auction) && (!bids || bids.length === 0) && (
                <CardBody display="flex" padding={isMobile ? '16px' : theme.space[4]} border="none">
                  <HeaderControl
                    auction={auction}
                    showGraph={showGraph}
                    toggleGraph={toggleGraph}
                    isFixed={true}
                    status={isAuctionClosed(auction) ? 'closed' : 'active'}
                  />
                </CardBody>
              )}
            </Card>
            {bids && bids.length > 0 && (
              <Card mt={theme.space[4]} marginX={isMobile ? '8px' : ''} border="none">
                <CardBody
                  display="flex"
                  padding={isMobile ? '16px' : theme.space[4]}
                  border="none"
                  flexDirection="row"
                  alignItems="center"
                >
                  <CardTitle fontSize="16px" lineHeight="19px" color="#000629" fontWeight="500">
                    {t('texts.yourActivity')}
                  </CardTitle>
                  <Flex flex={1} />
                  {isAuctionClosed(auction) && !isMobile && (
                    <>
                      <FormButton
                        disabled={false}
                        type="button"
                        height="40px"
                        fontWeight="500"
                        padding="0 16px"
                        fontSize="14px"
                        lineHeight="21px"
                        background="#304FFE"
                        color="#fff"
                        mr="16px"
                      >
                        Claim Tokens
                      </FormButton>
                      <FormButton
                        disabled={false}
                        type="button"
                        height="40px"
                        fontWeight="500"
                        padding="0 16px"
                        fontSize="14px"
                        lineHeight="21px"
                        background="#7B7F93"
                        color="#fff"
                      >
                        Withdraw Failed Bids
                      </FormButton>
                    </>
                  )}
                </CardBody>
                <SelfBidList auction={auction} isFixed={true} bids={bids} />
              </Card>
            )}
            <TokenFooter auction={auction} />
          </Flex>
          {isAuctionOpen(auction) && !isMobile && (
            <Flex flexDirection="column" width="377px" marginLeft="24px">
              <Card border="none">
                <CardBody display="flex" borderBottom="1px dashed #DDDDE3" padding={theme.space[4]}>
                  <Flex flexDirection="row" alignItems="center" flex={1} justifyContent="space-between">
                    <HeaderItem title={`Buy ${auction.tokenOut?.symbol}`} description="" color="#000629" />
                    <FixedFormMax>{`Max. 3,500 ${auction.tokenOut?.symbol}`}</FixedFormMax>
                  </Flex>
                </CardBody>
                <CardBody display="flex" padding={theme.space[4]}>
                  <PlaceBidForm
                    onSubmit={(val: BidFormProps) => buyToken(val)}
                    auction={auction}
                    currentSettlementPrice={formatBigInt(auction.tokenPrice)}
                    isFixed
                  />
                </CardBody>
              </Card>
            </Flex>
          )}
        </Flex>
      </Container>
      <WalletConnector
        isOpen={connectModal}
        onClose={() => setModalVisible(false)}
        metamaskImage={MetamaskImage}
        walletImage={WalletImage}
      ></WalletConnector>
      {!isMobile && <Footer />}
      {isMobile && <MobileFooter />}
    </Container>
  )
}
