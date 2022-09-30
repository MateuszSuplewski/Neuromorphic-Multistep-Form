import React from 'react'
import PropTypes from 'prop-types'
import { StyledToggler, Checkbox, Switch } from './Toggler.styled'

const Toggler = (props) => {
  return (
    <StyledToggler style={props.style}>
      <Checkbox
        type={'checkbox'}
        id={'checkbox'}
      />
      <Switch htmlFor={'checkbox'}/>
    </StyledToggler>
  )
}

Toggler.propTypes = {
  style: PropTypes.object
}

export default Toggler
