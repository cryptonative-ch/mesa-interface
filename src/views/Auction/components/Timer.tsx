// External
import React from 'react'
import dayjs from 'dayjs'

// Components
import { CardText } from 'src/components/CardSaleBody'
import { Flex } from "src/components/Flex";

//Interfaces
import { Auction } from 'src/interfaces/Auction'

// Utils
import { convertUtcTimestampToLocal } from 'src/utils/date'
import { isAuctionOpen, isAuctionUpcoming } from 'src/mesa/auction'

interface TimerComponentProps {
  auction: Auction
}



export const secondsTohms = (seconds: number) => {
  const d = Math.floor(seconds / 86400)
  const h = Math.floor((seconds % 86400) / 3600)
  const m = Math.floor(((seconds % 86400) % 3600) / 60)
  const s = Math.floor((seconds % 86400) % 3600) % 60

  const dDisplay = d > 0 ? d + 'd ' : ' '
  const hDisplay = h > 0 ? h + 'h ' : ' '
  const mDisplay = m > 0 ? m + 'm ' : ' '
  const sDisplay = s > 0 ? s + 's ' : ' '
  return dDisplay + hDisplay + mDisplay + sDisplay
}

export const timeFrame = (seconds: number) => {
  const endBlockDateTime = new Date(seconds * 1000).toString()
  const endDate = endBlockDateTime.slice(3, 10)
  const endTime = endBlockDateTime.slice(15, 21)
  const timeZoneStamp = endBlockDateTime.slice(25, 28)
  return endDate + ', ' + endTime + ' ' + timeZoneStamp
}

export const Timer: React.FC<TimerComponentProps> = ({ auction }: TimerComponentProps) => {
  // calculating time difference between local persons time and the start and end block times

  const localTimeStamp = dayjs(Date.now()).unix()

  // const timeDiffStart = Math.abs(localTimeStamp - convertUtcTimestampToLocal(auction.startBlock))
  const timeDiffEnd = Math.abs(localTimeStamp - convertUtcTimestampToLocal(auction.endBlock))


  if (isAuctionUpcoming(auction)) {
    return (
      <Flex>
        <CardText>{timeFrame(convertUtcTimestampToLocal(auction.startBlock))}</CardText>
        <CardText color="grey">&nbsp;to&nbsp;</CardText>
        <CardText>{timeFrame(convertUtcTimestampToLocal(auction.endBlock))}</CardText>
      </Flex>
    )
  } else if (isAuctionOpen(auction)) {
    const format_time = secondsTohms(timeDiffEnd)

    return (
      <Flex>
        <CardText>{format_time}</CardText>
      </Flex>
    )
  } else {
    return (
      <Flex>
        <CardText>{timeFrame(convertUtcTimestampToLocal(auction.endBlock))}</CardText>
      </Flex>
    )
  }
}
