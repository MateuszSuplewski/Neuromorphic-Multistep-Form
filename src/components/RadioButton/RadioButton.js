import React from 'react'
import PropTypes from 'prop-types'
import { StyledRadioButton, DefaultRadio, CustomRadio } from './RadioButton.styled'

const RadioButton = ({ style, value, id, children, name, checked, onChange }) => {
  return (
    <StyledRadioButton style={style}>
      <DefaultRadio
        id={id}
        value = {value}
        name = {name}
        checked={checked}
        onChange={onChange}
      />
      <CustomRadio htmlFor={id}>
        {children}
      </CustomRadio>
    </StyledRadioButton>
  )
}

RadioButton.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RadioButton
