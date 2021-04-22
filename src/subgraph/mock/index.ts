// Externals
import { MockList } from 'graphql-tools'
import casual from 'casual-browserify'

// schema

export const schemaString = `  
# EntityMetadata
# Enforces important fields on each entity that implement this interface
interface EntityMetadata {
  # Contract address
  id: ID!
  # The UTC timestamp at which the auction was placed
  createdAt: Int!
  # The UTC timestamp at which the auction was updated
  updatedAt: Int!
  # The UTC timestamp at which the auction was deleted
  deletedAt: Int
}

#################################################

# MesaFactory
# Stores critical information the MesaFactory.
# Allows subgraph function to access the MesaFactory without knowing its address
type MesaFactory  {
  # ID: should be a unique easy-to-reference
  id: ID!
  # Auction
  saleCount: Int!
  # Factory address
  address: String!
  # Fee manager: CFO
  feeManager: String!
  # Fee Collector: Treasury
  feeTo: String!
  # Template manager:
  templateManager: String!
  # Address of TemplateLauncher contract
  templateLauncher: String!
  # Fees
  saleFee: Int!
  feeNumerator: Int!
  templateFee: Int!
}

#################################################

# FairSale entity
type FairSale implements EntityMetadata  {
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  deletedAt: Int
  # Specific to the EasyAuction
  # The auction name
  name: String
  # open/ended/settled/upcoming
  status: String!
  # Date of the sale start
  startDate: Int!
  # Date of the sale end
  endDate: Int!
  # Total amount of tokens available for sale
  tokenAmount: String!
  # Minimum amount per bid
  minimumBidAmount: String!
  # Bidding token (ie: DAI, USDC)
  tokenIn: Token!
  # Auctioning token
  tokenOut: Token!
  # List of bids
  # The minimal funding threshold for executing the settlement. If funding is not reached, everyone will get back their investment
  minFundingThreshold: Int
  bids: [FairSaleBid!]
}

# AuctionBid
type FairSaleBid implements EntityMetadata  {
  id: ID!
  # Address of sale this bid is associated with
  sale: FairSale!
  # submitted/settled/cancelled/claimed
  status: String!
  # The UTC timestamp at which the bid was placed
  createdAt: Int!
  # The UTC timestamp at which the bid was updated
  updatedAt: Int!
  # The UTC timestamp at which the bid was deleted
  deletedAt: Int
  # Int of tokens the investor wants to buy
  tokenInAmount: String!
  # Int of tokens the investor wants to buy
  tokenOutAmount: String!
  # The bidder's Ethereum address
  address: String!
}

#################################################

# FixedPriceSale
type FixedPriceSale implements EntityMetadata  {
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  deletedAt: Int
  # The auction name
  name: String!
  # open/ended/settled/upcoming/cancelled/failed
  status: String!
  # Specific to the FixedPriceAuction
  startDate: Int! # Open timestamp
  endDate: Int! # Close timestamp
  # Amount to sell
  sellAmount: String!
  tokenPrice: String!
  tokensSold: String!
  # Minimum amount per bid
  minimumRaise: String!
  # Minimum and maxmimum token per order
  allocationMin: String!
  allocationMax: String!
  # bidding and sale tokens
  tokenIn: Token!
  tokenOut: Token!
  purchases: [FixedPriceSalePurchase!] 
}

type FixedPriceSalePurchase implements EntityMetadata  {
  # Meta
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  deletedAt: Int
  # Address of sale this bid is associated with
  sale: FixedPriceSale!
  # Address of buyer
  buyer: String!
  # Amount this purchase took
  amount: String!
}

#################################################

# Token
type Token  {
  # Token address
  id: ID!
  # Token name, from the smart contract ERC20.name()
  name: String
  # Symbol, from ERC20.symbol()
  symbol: String
  # Decimal, from ERC.decimals()
  decimals: Int!
  icon: String
}

#################################################

type SaleUser  {
  # User id
  id: ID!
  # The bidder's Ethereum address
  address: String
}

#################################################

# Sale Templates
# Each Sale contract implements a template
type SaleTemplate  {
  # TemplatesId from the event
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  deletedAt: Int
  # Address of the SaleTemplate contract: either EasyAuction or FixedPriceSale
  address: String!
  # Address of the MesaFactory
  factory: String!
  # Template name
  name: SaleTemplateNames!
  verified: Boolean!
}

enum SaleTemplateNames {
  FairSaleTemplate
  FixedPriceSaleTemplate
}

# MesaLog beacuses The Graph internal logging does not work
type MesaLog  {
  id: ID!
  content: String!
}

type Query {
  fairSales (id: ID): [FairSale]
  fixedPriceSales (id: ID): [FixedPriceSale]
  fairSale (id: ID): FairSale
  fixedPriceSale (id: ID): FixedPriceSale
}
`
const address = '0x###D####b########d###aA##e###c##eF##EE#c'

const bigDecimal = '#.#######e+18'

export const preserveResolvers = false

export const mocks = {
  ID: () => casual.numerify(address),
  Int: () => casual.integer(1, 1000),
  String: () => casual.name,
  Boolean: () => casual.boolean,
  FairSale: () => ({
    status: () => casual.random_element(['live', 'upcoming', 'closed']),
    name: () => casual.company_name,
    createdAt: () => casual.unix_time,
    updatedAt: () => casual.unix_time,
    deletedAt: () => casual.unix_time,
    startDate: () => casual.random_element([1586276387, 1583601587]),
    endDate: () => casual.random_element([1646673587, 1644254387]),
    tokenAmount: () => casual.numerify(bigDecimal),
    minimumBidAmount: () => casual.numerify(bigDecimal),
  }),
  FixedPriceSale: () => ({
    status: () => casual.random_element(['live', 'upcoming', 'closed']),
    name: () => casual.company_name,
    createdAt: () => casual.unix_time,
    updatedAt: () => casual.unix_time,
    deletedAt: () => casual.unix_time,
    startDate: () => casual.random_element([1586276387, 1583601587]),
    endDate: () => casual.random_element([1646673587, 1644254387]),
    sellAmount: () => casual.numerify(bigDecimal),
    minimumRaise: () => casual.numerify(bigDecimal),
    allocationMin: () => casual.numerify(bigDecimal),
    allocationMax: () => casual.numerify(bigDecimal),
    tokenPrice: () => casual.numerify(bigDecimal),
    tokensSold: () => casual.numerify(bigDecimal),
  }),
  FairSaleBid: () => ({
    createdAt: () => casual.unix_time,
    updatedAt: () => casual.unix_time,
    deletedAt: () => casual.unix_time,
    address: () => casual.numerify(address),
    tokenInAmount: () => casual.numerify(bigDecimal),
    tokenOutAmount: () => casual.numerify(bigDecimal),
  }),
  FixedPriceSalePurchase: () => ({
    createdAt: () => casual.unix_time,
    updatedAt: () => casual.unix_time,
    deletedAt: () => casual.unix_time,
    buyer: () => casual.numerify(address),
    amount: () => casual.numerify(bigDecimal),
  }),
  Token: () => ({
    address: () => casual.numerify(address),
    name: () => casual.company_name,
    symbol: () => casual.state_abbr,
    decimals: () => casual.integer(1, 18),
  }),
  Query: () => ({
    fairSales: () => new MockList(3),
    fixedPriceSales: () => new MockList(3),
  }),
}

export const queryAuctions = `
{
    fixedPriceSales {
      id
      name
      createdAt
      updatedAt
      deletedAt
      status
      startDate
      endDate
      tokenIn {
        id
        name
        symbol
        decimals
      }
      tokenOut {
        id
        name
        symbol
        decimals
      }
      tokenPrice
      sellAmount
      allocationMin
      allocationMax
    }
    fairSales {
      id
      name
      createdAt
      updatedAt
      deletedAt
      status
      startDate
      endDate
      tokenAmount
      tokenIn {
        id
        name
        symbol
        decimals
      }
      tokenOut {
        id
        name
        symbol
        decimals
      }
    }
  }
`
