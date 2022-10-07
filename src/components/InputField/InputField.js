import React from 'react'
import PropTypes from 'prop-types'
import { StyledInputField, Label, Input } from './InputField.styled'

const InputField = ({ style, label, name, type = 'text', placeholder = 'Type here...', onChange, value }) => {
  return (
    <StyledInputField style={style}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </StyledInputField>
  )
}

InputField.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default InputField
