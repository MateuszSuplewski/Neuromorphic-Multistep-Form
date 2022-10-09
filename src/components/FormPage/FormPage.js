import React from 'react'
import PropTypes from 'prop-types'
import StyledFormPage from './FormPage.styled'

const FormPage = (props) => {
  return (
    <StyledFormPage
      style={props.style}
    >
      {props.children}
    </StyledFormPage>
  )
}

FormPage.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default FormPage
