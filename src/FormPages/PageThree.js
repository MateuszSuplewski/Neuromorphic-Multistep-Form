import React, { useContext } from 'react'
import formContext from '../context'
import RadioButton from '../components/RadioButton'
import FieldWrapper from '../components/FieldWrapper'
import { pageThreeData } from '../pagesData'
import Select from '../components/Select'
import Toggler from '../components/Toggler'

export const PageThree = (props) => {
  const { formState, changeOption, changeField, toggleInput } =
    useContext(formContext)
  return (
    <div style={{ width: '80%', maxWidth: '800px' }}>
      {pageThreeData.fields.map(
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
                name={field.name}
                value={formState[field.name]}
              />
            </FieldWrapper>
          )
      )}
      {pageThreeData.fields.map(
        (field, index1) =>
          field.fieldFor === 'radio' && (
            <FieldWrapper
              question={field.question}
              key={index1}
              style={{ flexWrap: 'wrap' }}
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
      {pageThreeData.fields.map(
        (field, index) =>
          field.fieldFor === 'toggler' && (
            <Toggler
              key={index}
              label={field.label}
              value={formState[field.name]}
              name={field.name}
              onChange={(e) => toggleInput(e)}
            />
          )
      )}
    </div>
  )
}

export default PageThree
