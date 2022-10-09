import React from 'react'
import PropTypes from 'prop-types'
import { StyledErrors, ErrorList, ErrorItem } from './Errors.styled'

const Errors = ({ style, errors }) => {
  return (
    <StyledErrors
      style={style}
    >
      <ErrorList>
        {
        errors.map((error, index) => (<ErrorItem key={index}>{error}</ErrorItem>))
        }

      </ErrorList>
    </StyledErrors>
  )
}

Errors.propTypes = {
  style: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.string)
}

export default Errors
