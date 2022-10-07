import React from 'react'
import PropTypes from 'prop-types'
import StyledNavigateButton from './NavigateButton.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigateButton = ({ style, icon, size, onClick, type = 'button' }) => {
  return (
    <StyledNavigateButton
      style={style}
      onClick={onClick}
      type={type}
    >
      <FontAwesomeIcon
        icon={icon}
        size={size}
      />
    </StyledNavigateButton>
  )
}

NavigateButton.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.object.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default NavigateButton
