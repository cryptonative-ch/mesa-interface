/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface FixedPriceSaleInterface extends ethers.utils.Interface {
  functions: {
    'ERC20Withdraw(address,uint256)': FunctionFragment
    'ETHWithdraw(uint256)': FunctionFragment
    'allocationMax()': FunctionFragment
    'allocationMin()': FunctionFragment
    'buyTokens(uint256)': FunctionFragment
    'claimTokens()': FunctionFragment
    'closeSale()': FunctionFragment
    'distributeAllTokens()': FunctionFragment
    'endDate()': FunctionFragment
    'init(bytes)': FunctionFragment
    'isClosed()': FunctionFragment
    'minimumRaise()': FunctionFragment
    'orderOwners(uint256)': FunctionFragment
    'ordersCount()': FunctionFragment
    'owner()': FunctionFragment
    'releaseTokens()': FunctionFragment
    'secondsRemainingInSale()': FunctionFragment
    'startDate()': FunctionFragment
    'templateName()': FunctionFragment
    'tokenIn()': FunctionFragment
    'tokenOut()': FunctionFragment
    'tokenPrice()': FunctionFragment
    'tokensForSale()': FunctionFragment
    'tokensPurchased(address)': FunctionFragment
    'tokensRemaining()': FunctionFragment
    'soldAmount()': FunctionFragment
    'withdrawFunds()': FunctionFragment
    'withdrawFundsWithParams(bytes)': FunctionFragment
    'withdrawUnsoldFunds()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'ERC20Withdraw', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'ETHWithdraw', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'allocationMax', values?: undefined): string
  encodeFunctionData(functionFragment: 'allocationMin', values?: undefined): string
  encodeFunctionData(functionFragment: 'buyTokens', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'claimTokens', values?: undefined): string
  encodeFunctionData(functionFragment: 'closeSale', values?: undefined): string
  encodeFunctionData(functionFragment: 'distributeAllTokens', values?: undefined): string
  encodeFunctionData(functionFragment: 'endDate', values?: undefined): string
  encodeFunctionData(functionFragment: 'init', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'isClosed', values?: undefined): string
  encodeFunctionData(functionFragment: 'minimumRaise', values?: undefined): string
  encodeFunctionData(functionFragment: 'orderOwners', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'ordersCount', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'releaseTokens', values?: undefined): string
  encodeFunctionData(functionFragment: 'secondsRemainingInSale', values?: undefined): string
  encodeFunctionData(functionFragment: 'startDate', values?: undefined): string
  encodeFunctionData(functionFragment: 'templateName', values?: undefined): string
  encodeFunctionData(functionFragment: 'tokenIn', values?: undefined): string
  encodeFunctionData(functionFragment: 'tokenOut', values?: undefined): string
  encodeFunctionData(functionFragment: 'tokenPrice', values?: undefined): string
  encodeFunctionData(functionFragment: 'tokensForSale', values?: undefined): string
  encodeFunctionData(functionFragment: 'tokensPurchased', values: [string]): string
  encodeFunctionData(functionFragment: 'tokensRemaining', values?: undefined): string
  encodeFunctionData(functionFragment: 'soldAmount', values?: undefined): string
  encodeFunctionData(functionFragment: 'withdrawFunds', values?: undefined): string
  encodeFunctionData(functionFragment: 'withdrawFundsWithParams', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'withdrawUnsoldFunds', values?: undefined): string

  decodeFunctionResult(functionFragment: 'ERC20Withdraw', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'ETHWithdraw', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allocationMax', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allocationMin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'buyTokens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'claimTokens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'closeSale', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'distributeAllTokens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'endDate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isClosed', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'minimumRaise', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'orderOwners', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'ordersCount', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'releaseTokens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'secondsRemainingInSale', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'startDate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'templateName', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenIn', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenOut', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokensForSale', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokensPurchased', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokensRemaining', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'soldAmount', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdrawFunds', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdrawFundsWithParams', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdrawUnsoldFunds', data: BytesLike): Result

  events: {
    'NewPurchase(address,uint256)': EventFragment
    'NewTokenClaim(address,uint256)': EventFragment
    'NewTokenRelease(address,uint256)': EventFragment
    'SaleClosed()': EventFragment
    'SaleInitalized(address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256)': EventFragment
    'distributeAllTokensLeft(uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'NewPurchase'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewTokenClaim'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewTokenRelease'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'SaleClosed'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'SaleInitalized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'distributeAllTokensLeft'): EventFragment
}

export class FixedPriceSale extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: FixedPriceSaleInterface

  functions: {
    ERC20Withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'ERC20Withdraw(address,uint256)'(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    ETHWithdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'ETHWithdraw(uint256)'(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    allocationMax(overrides?: CallOverrides): Promise<[BigNumber]>

    'allocationMax()'(overrides?: CallOverrides): Promise<[BigNumber]>

    allocationMin(overrides?: CallOverrides): Promise<[BigNumber]>

    'allocationMin()'(overrides?: CallOverrides): Promise<[BigNumber]>

    buyTokens(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'buyTokens(uint256)'(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    claimTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    'claimTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    closeSale(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    'closeSale()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    distributeAllTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    'distributeAllTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    endDate(overrides?: CallOverrides): Promise<[BigNumber]>

    'endDate()'(overrides?: CallOverrides): Promise<[BigNumber]>

    init(_data: BytesLike, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    'init(bytes)'(
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    isClosed(overrides?: CallOverrides): Promise<[boolean]>

    'isClosed()'(overrides?: CallOverrides): Promise<[boolean]>

    minimumRaise(overrides?: CallOverrides): Promise<[BigNumber]>

    'minimumRaise()'(overrides?: CallOverrides): Promise<[BigNumber]>

    orderOwners(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    'orderOwners(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    ordersCount(overrides?: CallOverrides): Promise<[BigNumber]>

    'ordersCount()'(overrides?: CallOverrides): Promise<[BigNumber]>

    owner(overrides?: CallOverrides): Promise<[string]>

    'owner()'(overrides?: CallOverrides): Promise<[string]>

    releaseTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    'releaseTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    secondsRemainingInSale(overrides?: CallOverrides): Promise<[BigNumber]>

    'secondsRemainingInSale()'(overrides?: CallOverrides): Promise<[BigNumber]>

    startDate(overrides?: CallOverrides): Promise<[BigNumber]>

    'startDate()'(overrides?: CallOverrides): Promise<[BigNumber]>

    templateName(overrides?: CallOverrides): Promise<[string]>

    'templateName()'(overrides?: CallOverrides): Promise<[string]>

    tokenIn(overrides?: CallOverrides): Promise<[string]>

    'tokenIn()'(overrides?: CallOverrides): Promise<[string]>

    tokenOut(overrides?: CallOverrides): Promise<[string]>

    'tokenOut()'(overrides?: CallOverrides): Promise<[string]>

    tokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>

    'tokenPrice()'(overrides?: CallOverrides): Promise<[BigNumber]>

    tokensForSale(overrides?: CallOverrides): Promise<[BigNumber]>

    'tokensForSale()'(overrides?: CallOverrides): Promise<[BigNumber]>

    tokensPurchased(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>

    'tokensPurchased(address)'(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>

    tokensRemaining(overrides?: CallOverrides): Promise<[BigNumber]>

    'tokensRemaining()'(overrides?: CallOverrides): Promise<[BigNumber]>

    soldAmount(overrides?: CallOverrides): Promise<[BigNumber]>

    'soldAmount()'(overrides?: CallOverrides): Promise<[BigNumber]>

    withdrawFunds(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    'withdrawFunds()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    withdrawFundsWithParams(
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'withdrawFundsWithParams(bytes)'(
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    withdrawUnsoldFunds(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    'withdrawUnsoldFunds()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>
  }

  ERC20Withdraw(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'ERC20Withdraw(address,uint256)'(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  ETHWithdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'ETHWithdraw(uint256)'(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  allocationMax(overrides?: CallOverrides): Promise<BigNumber>

  'allocationMax()'(overrides?: CallOverrides): Promise<BigNumber>

  allocationMin(overrides?: CallOverrides): Promise<BigNumber>

  'allocationMin()'(overrides?: CallOverrides): Promise<BigNumber>

  buyTokens(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'buyTokens(uint256)'(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  claimTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  'claimTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  closeSale(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  'closeSale()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  distributeAllTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  'distributeAllTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  endDate(overrides?: CallOverrides): Promise<BigNumber>

  'endDate()'(overrides?: CallOverrides): Promise<BigNumber>

  init(_data: BytesLike, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  'init(bytes)'(
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  isClosed(overrides?: CallOverrides): Promise<boolean>

  'isClosed()'(overrides?: CallOverrides): Promise<boolean>

  minimumRaise(overrides?: CallOverrides): Promise<BigNumber>

  'minimumRaise()'(overrides?: CallOverrides): Promise<BigNumber>

  orderOwners(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  'orderOwners(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  ordersCount(overrides?: CallOverrides): Promise<BigNumber>

  'ordersCount()'(overrides?: CallOverrides): Promise<BigNumber>

  owner(overrides?: CallOverrides): Promise<string>

  'owner()'(overrides?: CallOverrides): Promise<string>

  releaseTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  'releaseTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  secondsRemainingInSale(overrides?: CallOverrides): Promise<BigNumber>

  'secondsRemainingInSale()'(overrides?: CallOverrides): Promise<BigNumber>

  startDate(overrides?: CallOverrides): Promise<BigNumber>

  'startDate()'(overrides?: CallOverrides): Promise<BigNumber>

  templateName(overrides?: CallOverrides): Promise<string>

  'templateName()'(overrides?: CallOverrides): Promise<string>

  tokenIn(overrides?: CallOverrides): Promise<string>

  'tokenIn()'(overrides?: CallOverrides): Promise<string>

  tokenOut(overrides?: CallOverrides): Promise<string>

  'tokenOut()'(overrides?: CallOverrides): Promise<string>

  tokenPrice(overrides?: CallOverrides): Promise<BigNumber>

  'tokenPrice()'(overrides?: CallOverrides): Promise<BigNumber>

  tokensForSale(overrides?: CallOverrides): Promise<BigNumber>

  'tokensForSale()'(overrides?: CallOverrides): Promise<BigNumber>

  tokensPurchased(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

  'tokensPurchased(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

  tokensRemaining(overrides?: CallOverrides): Promise<BigNumber>

  'tokensRemaining()'(overrides?: CallOverrides): Promise<BigNumber>

  soldAmount(overrides?: CallOverrides): Promise<BigNumber>

  'soldAmount()'(overrides?: CallOverrides): Promise<BigNumber>

  withdrawFunds(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  'withdrawFunds()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  withdrawFundsWithParams(
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'withdrawFundsWithParams(bytes)'(
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  withdrawUnsoldFunds(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  'withdrawUnsoldFunds()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  callStatic: {
    ERC20Withdraw(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    'ERC20Withdraw(address,uint256)'(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    ETHWithdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    'ETHWithdraw(uint256)'(amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    allocationMax(overrides?: CallOverrides): Promise<BigNumber>

    'allocationMax()'(overrides?: CallOverrides): Promise<BigNumber>

    allocationMin(overrides?: CallOverrides): Promise<BigNumber>

    'allocationMin()'(overrides?: CallOverrides): Promise<BigNumber>

    buyTokens(amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    'buyTokens(uint256)'(amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    claimTokens(overrides?: CallOverrides): Promise<void>

    'claimTokens()'(overrides?: CallOverrides): Promise<void>

    closeSale(overrides?: CallOverrides): Promise<void>

    'closeSale()'(overrides?: CallOverrides): Promise<void>

    distributeAllTokens(overrides?: CallOverrides): Promise<void>

    'distributeAllTokens()'(overrides?: CallOverrides): Promise<void>

    endDate(overrides?: CallOverrides): Promise<BigNumber>

    'endDate()'(overrides?: CallOverrides): Promise<BigNumber>

    init(_data: BytesLike, overrides?: CallOverrides): Promise<void>

    'init(bytes)'(_data: BytesLike, overrides?: CallOverrides): Promise<void>

    isClosed(overrides?: CallOverrides): Promise<boolean>

    'isClosed()'(overrides?: CallOverrides): Promise<boolean>

    minimumRaise(overrides?: CallOverrides): Promise<BigNumber>

    'minimumRaise()'(overrides?: CallOverrides): Promise<BigNumber>

    orderOwners(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    'orderOwners(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    ordersCount(overrides?: CallOverrides): Promise<BigNumber>

    'ordersCount()'(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<string>

    'owner()'(overrides?: CallOverrides): Promise<string>

    releaseTokens(overrides?: CallOverrides): Promise<void>

    'releaseTokens()'(overrides?: CallOverrides): Promise<void>

    secondsRemainingInSale(overrides?: CallOverrides): Promise<BigNumber>

    'secondsRemainingInSale()'(overrides?: CallOverrides): Promise<BigNumber>

    startDate(overrides?: CallOverrides): Promise<BigNumber>

    'startDate()'(overrides?: CallOverrides): Promise<BigNumber>

    templateName(overrides?: CallOverrides): Promise<string>

    'templateName()'(overrides?: CallOverrides): Promise<string>

    tokenIn(overrides?: CallOverrides): Promise<string>

    'tokenIn()'(overrides?: CallOverrides): Promise<string>

    tokenOut(overrides?: CallOverrides): Promise<string>

    'tokenOut()'(overrides?: CallOverrides): Promise<string>

    tokenPrice(overrides?: CallOverrides): Promise<BigNumber>

    'tokenPrice()'(overrides?: CallOverrides): Promise<BigNumber>

    tokensForSale(overrides?: CallOverrides): Promise<BigNumber>

    'tokensForSale()'(overrides?: CallOverrides): Promise<BigNumber>

    tokensPurchased(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    'tokensPurchased(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    tokensRemaining(overrides?: CallOverrides): Promise<BigNumber>

    'tokensRemaining()'(overrides?: CallOverrides): Promise<BigNumber>

    soldAmount(overrides?: CallOverrides): Promise<BigNumber>

    'soldAmount()'(overrides?: CallOverrides): Promise<BigNumber>

    withdrawFunds(overrides?: CallOverrides): Promise<void>

    'withdrawFunds()'(overrides?: CallOverrides): Promise<void>

    withdrawFundsWithParams(_data: BytesLike, overrides?: CallOverrides): Promise<void>

    'withdrawFundsWithParams(bytes)'(_data: BytesLike, overrides?: CallOverrides): Promise<void>

    withdrawUnsoldFunds(overrides?: CallOverrides): Promise<void>

    'withdrawUnsoldFunds()'(overrides?: CallOverrides): Promise<void>
  }

  filters: {
    NewPurchase(
      buyer: string | null,
      amount: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { buyer: string; amount: BigNumber }>

    NewTokenClaim(
      buyer: string | null,
      amount: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { buyer: string; amount: BigNumber }>

    NewTokenRelease(
      buyer: string | null,
      amount: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { buyer: string; amount: BigNumber }>

    SaleClosed(): TypedEventFilter<[], {}>

    SaleInitalized(
      tokenIn: null,
      tokenOut: null,
      tokenPrice: null,
      tokensForSale: null,
      startDate: null,
      endDate: null,
      allocationMin: null,
      allocationMax: null,
      minimumRaise: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        tokenIn: string
        tokenOut: string
        tokenPrice: BigNumber
        tokensForSale: BigNumber
        startDate: BigNumber
        endDate: BigNumber
        allocationMin: BigNumber
        allocationMax: BigNumber
        minimumRaise: BigNumber
      }
    >

    distributeAllTokensLeft(amount: BigNumberish | null): TypedEventFilter<[BigNumber], { amount: BigNumber }>
  }

  estimateGas: {
    ERC20Withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'ERC20Withdraw(address,uint256)'(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    ETHWithdraw(amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    'ETHWithdraw(uint256)'(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    allocationMax(overrides?: CallOverrides): Promise<BigNumber>

    'allocationMax()'(overrides?: CallOverrides): Promise<BigNumber>

    allocationMin(overrides?: CallOverrides): Promise<BigNumber>

    'allocationMin()'(overrides?: CallOverrides): Promise<BigNumber>

    buyTokens(amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    'buyTokens(uint256)'(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    claimTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    'claimTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    closeSale(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    'closeSale()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    distributeAllTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    'distributeAllTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    endDate(overrides?: CallOverrides): Promise<BigNumber>

    'endDate()'(overrides?: CallOverrides): Promise<BigNumber>

    init(_data: BytesLike, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    'init(bytes)'(_data: BytesLike, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    isClosed(overrides?: CallOverrides): Promise<BigNumber>

    'isClosed()'(overrides?: CallOverrides): Promise<BigNumber>

    minimumRaise(overrides?: CallOverrides): Promise<BigNumber>

    'minimumRaise()'(overrides?: CallOverrides): Promise<BigNumber>

    orderOwners(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'orderOwners(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    ordersCount(overrides?: CallOverrides): Promise<BigNumber>

    'ordersCount()'(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>

    releaseTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    'releaseTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    secondsRemainingInSale(overrides?: CallOverrides): Promise<BigNumber>

    'secondsRemainingInSale()'(overrides?: CallOverrides): Promise<BigNumber>

    startDate(overrides?: CallOverrides): Promise<BigNumber>

    'startDate()'(overrides?: CallOverrides): Promise<BigNumber>

    templateName(overrides?: CallOverrides): Promise<BigNumber>

    'templateName()'(overrides?: CallOverrides): Promise<BigNumber>

    tokenIn(overrides?: CallOverrides): Promise<BigNumber>

    'tokenIn()'(overrides?: CallOverrides): Promise<BigNumber>

    tokenOut(overrides?: CallOverrides): Promise<BigNumber>

    'tokenOut()'(overrides?: CallOverrides): Promise<BigNumber>

    tokenPrice(overrides?: CallOverrides): Promise<BigNumber>

    'tokenPrice()'(overrides?: CallOverrides): Promise<BigNumber>

    tokensForSale(overrides?: CallOverrides): Promise<BigNumber>

    'tokensForSale()'(overrides?: CallOverrides): Promise<BigNumber>

    tokensPurchased(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    'tokensPurchased(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    tokensRemaining(overrides?: CallOverrides): Promise<BigNumber>

    'tokensRemaining()'(overrides?: CallOverrides): Promise<BigNumber>

    soldAmount(overrides?: CallOverrides): Promise<BigNumber>

    'soldAmount()'(overrides?: CallOverrides): Promise<BigNumber>

    withdrawFunds(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    'withdrawFunds()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    withdrawFundsWithParams(
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'withdrawFundsWithParams(bytes)'(
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    withdrawUnsoldFunds(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    'withdrawUnsoldFunds()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>
  }

  populateTransaction: {
    ERC20Withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'ERC20Withdraw(address,uint256)'(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    ETHWithdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'ETHWithdraw(uint256)'(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    allocationMax(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'allocationMax()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    allocationMin(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'allocationMin()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    buyTokens(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'buyTokens(uint256)'(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    claimTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    'claimTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    closeSale(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    'closeSale()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    distributeAllTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    'distributeAllTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    endDate(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'endDate()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    init(_data: BytesLike, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    'init(bytes)'(
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    isClosed(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'isClosed()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    minimumRaise(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'minimumRaise()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    orderOwners(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'orderOwners(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    ordersCount(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'ordersCount()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    releaseTokens(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    'releaseTokens()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    secondsRemainingInSale(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'secondsRemainingInSale()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    startDate(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'startDate()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    templateName(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'templateName()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokenIn(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'tokenIn()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokenOut(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'tokenOut()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'tokenPrice()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokensForSale(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'tokensForSale()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokensPurchased(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'tokensPurchased(address)'(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    tokensRemaining(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'tokensRemaining()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    soldAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'soldAmount()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    withdrawFunds(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    'withdrawFunds()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    withdrawFundsWithParams(
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'withdrawFundsWithParams(bytes)'(
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    withdrawUnsoldFunds(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    'withdrawUnsoldFunds()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>
  }
}
