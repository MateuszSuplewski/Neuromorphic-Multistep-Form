import React from 'react'
import PropTypes from 'prop-types'
import StyledTextField from './TextField.styled'

const TextField = (props) => {
  return (
    <StyledTextField
      style={props.style}
      placeholder={props.placeholder || 'Type anything'}
    />
  )
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object
}

export default TextField
