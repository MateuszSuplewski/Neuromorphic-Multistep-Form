import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './Button.styled'

const Button = (props) => {
  return (
    <StyledButton style={props.style}>
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default Button
