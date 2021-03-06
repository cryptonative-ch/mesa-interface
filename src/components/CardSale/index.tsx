import { space, layout, flexbox, SpaceProps, LayoutProps, FlexProps, textAlign, TextAlignProps } from 'styled-system'
import styled from 'styled-components'

export type CardProps = SpaceProps & LayoutProps & FlexProps & TextAlignProps

export const Card = styled.div<CardProps>(
  props => ({
    padding: props.theme.space[0],
    backgroundColor: 'white',
    borderRadius: '0',
    width: '100%',
  }),
  space,
  layout,
  flexbox,
  textAlign
)
