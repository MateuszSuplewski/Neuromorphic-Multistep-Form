import React from 'react'
import PropTypes from 'prop-types'
import { StyledToggler, Checkbox, Switch } from './Toggler.styled'

const Toggler = ({ style, name, label, onChange, value }) => {
  return (
    <StyledToggler style={style}>
      <Checkbox
        id={name}
        onChange={onChange}
        name={name}
        checked={value}
      />
      <Switch htmlFor={name}>
        {label}
      </Switch>
    </StyledToggler>
  )
}

Toggler.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool
}

export default Toggler
