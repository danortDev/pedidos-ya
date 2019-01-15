import { styled } from 'styletron-react'

// Constants
const ANIMATION_TIME = '0.3s'
const ANIMATION_CURVE = 'cubic-bezier(0.165, 0.84, 0.44, 1)'
const DEFAULT_ANIMATION = `${ANIMATION_TIME} ${ANIMATION_CURVE}`

// Basic input element styles
const BASIC_STYLES = {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  minHeight: '1.1875em',
  lineHeight: '1.1875em',
  appearance: 'none',
  color: 'currentColor',
  border: 0,
  margin: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: '7px',
  paddingBottom: '7px',
  display: 'block',
  minWidth: 0,
  flexGrow: 1,
  boxSizing: 'content-box',
  verticalAlign: 'middle',
  '-webkit-tap-highlight-color': 'transparent',
  backgroundColor: 'transparent',
  ':focus': { outline: 0 },
}

// Creates placeholder styles based on give styles props
export const getPlaceholderStyles = ({
  $focus,
  $nonEmpty,
  $haveLabel,
  $alwaysShowPlaceholder,
  $appearance,
  $palette,
}: Styles) => {
  const active =
    $focus ||
    $nonEmpty ||
    !$haveLabel ||
    $alwaysShowPlaceholder
  return {
    color: active ? '#222' : 'transparent',
    transition: `color ${DEFAULT_ANIMATION}`,
  }
}

// Styled input that fits well with BaseField
export const HTMLInputElement = styled('input', (props) => {
  const phStyles = getPlaceholderStyles(props)
  return {
    ...BASIC_STYLES,
    '::placeholder': phStyles,
    '::-ms-clear': { width: 0, height: 0 }
  }
})
