import React from 'react'
import PropTypes from 'prop-types'
import { StyledFieldWrapper, Title } from './FieldWrapper.styled'

const FieldWrapper = ({ style, children, question }) => {
  return (
    <StyledFieldWrapper
      style={style}
    >
      <Title>{question}</Title>
      {children}
    </StyledFieldWrapper>
  )
}

FieldWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  question: PropTypes.string.isRequired
}

export default FieldWrapper
