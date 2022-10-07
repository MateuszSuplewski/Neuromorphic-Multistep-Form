import React from 'react'
import PropTypes from 'prop-types'
import StyledPage from './Page.styled'

const Page = (props) => {
  return (
    <StyledPage
      style={props.style}
    >
      {props.children}
    </StyledPage>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default Page
