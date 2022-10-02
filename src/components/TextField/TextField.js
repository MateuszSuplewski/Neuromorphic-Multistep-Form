import React from 'react'
import PropTypes from 'prop-types'
import { StyledTextField, Label } from './TextField.styled'

const TextField = (props) => {
  return (
    <>
      <Label>{props.label}</Label>
      <StyledTextField
        style={props.style}
        placeholder={props.placeholder || 'Type anything'}
      />
    </>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object
}

export default TextField
