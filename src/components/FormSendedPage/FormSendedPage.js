import React from 'react'
import PropTypes from 'prop-types'
import { StyledFormSendedPage, Header, Paragraph } from './FormSendedPagestyled'

const FormSendedPage = ({ style, headerContent, paragraphs }) => {
  return (
    <StyledFormSendedPage style={style}>
      <Header>{headerContent}</Header>
      {
        paragraphs.map((paragraphContent, index) => (
          <Paragraph key={index}>{paragraphContent}</Paragraph>
        ))
      }
    </StyledFormSendedPage>
  )
}

FormSendedPage.propTypes = {
  style: PropTypes.object,
  headerContent: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string)
}

export default FormSendedPage
