// External
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'

// Components
import { SaleFinalPrice } from '../SaleFinalPrice'
import { CardBody } from 'src/components/Cards/CardSaleBody'
import { CardText } from 'src/components/Cards/CardText'
import { Card } from 'src/components/Cards/CardSale'
import { Flex } from 'src/components/Flex'
import { BadgeCard } from 'src/views/Sale/components/BadgeCard'
import { SaleAmount } from '../SaleAmount'
import { Divider } from 'src/components/Divider'
import { SaleClock } from '../SaleClock'
import { Icon } from 'src/components/Icons/Icon'
import { BadgeFlex } from 'src/layouts/BadgeFlex'
import { BidTokenPriceLabel } from '../SaleActiveBids'
import { TokenClaimButton } from 'src/components/Buttons/TokenClaim'
import { TokenIconFigure } from 'src/components/Icons/TokenIconFigure'

// Interface
import { Sale } from 'src/interfaces/Sale'

// Svg
import noToken from 'src/assets/svg/no-token-image.svg'
interface SaleSummaryProps {
  sale: Sale
}

export function SaleSummaryCard({ sale }: SaleSummaryProps) {
  const [t] = useTranslation()
  // needs input from wallet
  const [tokensClaimed, setTokensClaimed] = useState<boolean>(false)
  return (
    <Card>
      <CardBody>
        <Flex justifyContent="space-between" alignItems="center" margin="0 0 16px 0">
          <Flex width="70%" alignItems="center">
            <TokenIconFigure>
              <Icon src={sale.tokenOut?.icon || noToken} alt={sale.tokenOut?.name} />
            </TokenIconFigure>
            <CardText fontSize="title">{sale.name}</CardText>
          </Flex>
          <BadgeFlex>
            <BadgeCard saleType="private" />
          </BadgeFlex>
        </Flex>
        <Divider />
        <Flex flexDirection="column" justifyContent="space-evenly" height="75%" margin="12px 0 0 0">
          <Flex flexDirection="row" justifyContent="space-between">
            <CardText color="grey">{t('texts.yourBids')}</CardText>
            <BidTokenPriceLabel active={true}></BidTokenPriceLabel>
          </Flex>

          <Flex flexDirection="row" justifyContent="space-between">
            <CardText color="grey">{t('texts.salesType')}</CardText>
            {sale.type == 'fixedPriceSale' ? <CardText>Fixed Price Sale</CardText> : <CardText>Fair Sale</CardText>}
          </Flex>
          <Flex flexDirection="row" justifyContent="space-between">
            <CardText color="grey">{t('texts.currentPrice')}</CardText>
            <SaleFinalPrice sale={sale} />
          </Flex>
          <Flex flexDirection="row" justifyContent="space-between">
            <CardText color="grey">{t('texts.amountForSale')}</CardText>
            <SaleAmount sale={sale} />
          </Flex>
          {tokensClaimed ? <TokenClaimButton /> : undefined}
          <SaleClock sale={sale} />
        </Flex>
      </CardBody>
    </Card>
  )
}
