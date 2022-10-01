import React from 'react'
import PropTypes from 'prop-types'
import StyledNavigateButton from './NavigateButton.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigateButton = (props) => {
  return (
    <StyledNavigateButton style={props.style}>
      <FontAwesomeIcon
        icon={props.icon}
        size={props.size}
      />
    </StyledNavigateButton>
  )
}

NavigateButton.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  icon: PropTypes.object,
  size: PropTypes.string
}

export default NavigateButton
