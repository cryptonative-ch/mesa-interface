// Externals
import { BigNumber } from '@ethersproject/bignumber'
import { useEffect, useState } from 'react'

// Hooks
import { useTokenContract } from 'src/hooks/useTokenContract'
import { useBlockNumber } from 'src/hooks/useBlockNumber'

export function useTokenAllowance(tokenAddress: string, owner: string, spender: string): BigNumber | undefined {
  const [allowance, setAllownace] = useState<BigNumber>(BigNumber.from(0))
  const tokenContract = useTokenContract(tokenAddress)
  const block = useBlockNumber()

  useEffect(() => {
    // Not contract
    if (!tokenContract) return

    tokenContract
      .allowance(owner, spender)
      .then(setAllownace)
      .catch(() => {
        return allowance

        console.error(`Could not get the allowance for ${owner}`)
      })
  }, [tokenContract, tokenAddress, owner, spender, block])

  return allowance
}
