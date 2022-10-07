import React, { useContext } from 'react'
import formContext from '../context'
import RadioButton from '../components/RadioButton'
import FieldWrapper from '../components/FieldWrapper'
import { pageTwoData } from '../pagesData'

export const PageTwo = (props) => {
  const { formState, changeField } = useContext(formContext)
  return (
    <div style={{ width: '80%', maxWidth: '800px' }}>
      {pageTwoData.fields.map(
        (field, index1) =>
          field.fieldFor === 'radio' && (
            <FieldWrapper
              style={{ flexWrap: 'wrap' }}
              question={field.question}
              key={index1}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  width: '100%',
                  flexWrap: 'wrap'
                }}
              >
                {field.radiosFields.map((radio, index2) => (
                  <RadioButton
                    key={`${[field.name]} ${index2}`}
                    value={radio}
                    name={field.name}
                    checked={radio === formState[field.name]}
                    onChange={(e) => changeField(e)}
                    id={`${[field.name]} ${index2}`}
                  >
                    {radio}
                  </RadioButton>
                ))}
              </div>
            </FieldWrapper>
          )
      )}
    </div>
  )
}

export default PageTwo
