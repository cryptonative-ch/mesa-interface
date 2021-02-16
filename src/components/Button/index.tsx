// External
import styled from 'styled-components'
import {
  fontSize,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  SizeProps,
  space,
  variant,
} from 'styled-system'

export type ButtonProps = SizeProps &
  FontStyleProps &
  FontWeightProps & {
    variant?: string
    rounded?: boolean
    padding?: boolean
    border?: boolean
    margin?: boolean
  }

export const Button = styled.button<ButtonProps>(
  props => ({
    appearance: 'none',
    padding: props.padding ? '0px' : '12px 16px',
    margin: props.margin ? '5px' : '0px',
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign: 'middle',
    userSelect: 'none',
    backgroundColor: 'transparent',
    border: props.border ? 'none' : `1px solid ${props.theme.colors.primary}`,
    // @TODO: Move radis to Theme
    borderRadius: props.rounded ? '32px' : props.theme.radii.base,
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: 'inherit',
    lineHeight: 1.5,
    color: 'black',
    ':disabled': {
      opacity: 0.5,
    },
    ':hover': {
      textDecoration: 'underline',
    },
  }),
  fontSize,
  fontWeight,
  fontStyle,
  space,
  variant({
    variants: {
      primary: {
        bg: 'white',
      },
      link: {
        bg: 'transparent',
      },
    },
  })
)

Button.defaultProps = {
  rounded: false,
  variant: 'primary',
  
}
