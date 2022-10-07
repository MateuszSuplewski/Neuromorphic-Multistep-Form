import React from 'react'
import PropTypes from 'prop-types'
import StyledFormNavigation from './FormNavigation.styled'

const FormNavigation = ({ children, style }) => {
  return (
    <StyledFormNavigation
      style={style}

    >
      {children}
    </StyledFormNavigation>
  )
}

FormNavigation.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default FormNavigation
