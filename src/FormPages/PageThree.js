import React, { useContext } from 'react'
import formContext from '../context'
import FieldWrapper from '../components/FieldWrapper'
import { pageThreeData } from '../pagesData'
import Select from '../components/Select'
import Toggler from '../components/Toggler'
import FormPage from '../components/FormPage/FormPage'
import RadiosWrapper from '../components/RadiosWrapper'

export const PageThree = (props) => {
  const { formState, changeOption, toggleInput } = useContext(formContext)
  return (
    <FormPage>
      {pageThreeData.fields.map(
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
                name={name}
                value={formState[name]}
              />
            </FieldWrapper>
          )
      )}
      {pageThreeData.fields.map(
        ({ fieldFor, question, radiosFields, name }, index1) =>
          fieldFor === 'radio' && (
            <FieldWrapper
              question={question}
              key={index1}
              style={{ flexWrap: 'wrap' }}
            >
              <RadiosWrapper
                radioFields={radiosFields}
                name={name}
              />
            </FieldWrapper>
          )
      )}
      {pageThreeData.fields.map(
        ({ fieldFor, label, name }, index) =>
          fieldFor === 'toggler' && (
            <Toggler
              key={index}
              label={label}
              value={formState[name]}
              name={name}
              onChange={toggleInput}
            />
          )
      )}
    </FormPage>
  )
}

export default PageThree
