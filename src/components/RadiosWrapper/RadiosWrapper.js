import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import StyledRadiosWrapper from './RadiosWrapper.styled'
import RadioButton from '../RadioButton'
import formContext from '../../context'

const RadiosWrapper = (props) => {
  const { formState, changeField } = useContext(formContext)
  const { radioFields, name } = props
  return (
    <StyledRadiosWrapper
      style={props.style}
    >
      {radioFields.map((radioValue, index) => (
        <RadioButton
          key={`${[name]} ${index}`}
          value={radioValue}
          name={name}
          checked={radioValue === formState[name]}
          onChange={(e) => changeField(e)}
          id={`${[name]} ${index}`}
        >
          {radioValue}
        </RadioButton>
      ))}
    </StyledRadiosWrapper>
  )
}

RadiosWrapper.propTypes = {
  style: PropTypes.object,
  radioFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired

}

export default RadiosWrapper
