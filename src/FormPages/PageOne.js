import React, { useContext } from 'react'
import formContext from '../context'
import InputField from '../components/InputField'
import FieldWrapper from '../components/FieldWrapper'
import Select from '../components/Select'
import { pageOneData } from '../pagesData'
import FormPage from '../components/FormPage/FormPage'

export const PageOne = (props) => {
  const { formState, changeOption, changeField } = useContext(formContext)
  return (
    <FormPage>
      {pageOneData.fields.map(
        ({ fieldFor, placeholder, label, name, type }, index) =>
          fieldFor === 'input' && (
          <InputField
            key={index}
            placeholder={placeholder}
            label={label}
            value={formState[name]}
            name={name}
            onChange={(e) => changeField(e)}
            type={type}
          />
          )
      )}
      {pageOneData.fields.map(
        ({ fieldFor, question, startValue, optionsList, selectIcon, name }, index) =>
          fieldFor === 'select' && (
            <FieldWrapper
              question={question}
              key={index}
            >
              <Select
                startValue={startValue}
                optionsList={optionsList}
                selectIcon={selectIcon}
                changeOption={changeOption}
                value={formState[name]}
                name={name}
              />
            </FieldWrapper>
          )
      )}
    </FormPage>
  )
}

export default PageOne
