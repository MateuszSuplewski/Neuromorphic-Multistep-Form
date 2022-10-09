import React from 'react'
import FieldWrapper from '../components/FieldWrapper'
import { pageTwoData } from '../pagesData'
import FormPage from '../components/FormPage/FormPage'
import RadiosWrapper from '../components/RadiosWrapper'

export const PageTwo = (props) => {
  return (
    <FormPage>
      {pageTwoData.fields.map(
        ({ fieldFor, question, radiosFields, name }, index) =>
          fieldFor === 'radio' && (
            <FieldWrapper
              style={{ flexWrap: 'wrap' }}
              question={question}
              key={index}
            >
              <RadiosWrapper
                radioFields={radiosFields}
                name={name}
              />
            </FieldWrapper>
          )
      )}
    </FormPage>
  )
}

export default PageTwo
