import {
  space,
  layout,
  flexbox,
  SpaceProps,
  LayoutProps,
  FlexProps,
  textAlign,
  TextAlignProps,
  BorderProps,
  border,
} from 'styled-system'
import styled from 'styled-components'

export type CardProps = SpaceProps & LayoutProps & FlexProps & TextAlignProps & BorderProps

export const Card = styled.div<CardProps>(
  props => ({
    display: 'flex',
    flexDirection: 'column',
    padding: props.theme.space[0],
    backgroundColor: 'white',
  }),
  space,
  layout,
  flexbox,
  textAlign,
  border
)
