import React, { useContext } from 'react'
import formContext from '../context'
import InputField from '../components/InputField'
import FieldWrapper from '../components/FieldWrapper'
import Select from '../components/Select'
import { pageOneData } from '../pagesData'

export const PageOne = (props) => {
  const { formState, changeOption, changeField } = useContext(formContext)
  return (
    <div style={{ width: '80%', maxWidth: '800px' }}>
      {pageOneData.fields.map(
        (field, index) =>
          field.fieldFor === 'input' && (
            <InputField
              key={index}
              placeholder={field.placeholder}
              label={field.label}
              value={formState[field.name]}
              name={field.name}
              onChange={(e) => changeField(e)}
              type={field.type}
            />
          )
      )}
      {pageOneData.fields.map(
        (field, index) =>
          field.fieldFor === 'select' && (
            <FieldWrapper
              question={field.question}
              key={index}
            >
              <Select
                startValue={field.startValue}
                optionsList={field.optionsList}
                selectIcon={field.selectIcon}
                changeOption={changeOption}
                value={formState[field.name]}
                name={field.name}
              />
            </FieldWrapper>
          )
      )}
    </div>
  )
}

export default PageOne
