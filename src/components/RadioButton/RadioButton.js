import React from 'react'
import PropTypes from 'prop-types'
import { StyledRadioButton, DefaultRadio, CustomRadio } from './RadioButton.styled'

const RadioButton = (props) => {
  return (
    <StyledRadioButton style={props.style}>
      <DefaultRadio
        type={'radio'}
        id={'radio'}
      />
      <CustomRadio htmlFor={'radio'}/>
    </StyledRadioButton>
  )
}

RadioButton.propTypes = {
  style: PropTypes.object
}

export default RadioButton
