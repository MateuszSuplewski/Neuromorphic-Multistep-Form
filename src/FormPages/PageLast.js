import React from 'react'
import FormSendedPage from '../components/FormSendedPage/FormSendedPage'
import { FormSendedPageData } from '../pagesData'

export const PageLast = (props) => {
  const { header, paragraphs } = FormSendedPageData
  return (
    <FormSendedPage
      paragraphs={paragraphs}
      headerContent={header}
    />
  )
}

export default PageLast
