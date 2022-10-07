import StyledForm from './Form.styled'
import React, { useEffect, useReducer } from 'react'
import ProgressBar from '../ProgressBar'
import { ThemeProvider } from 'styled-components'
import { defaultInitialData, formData } from '../../pagesData'
import formContext from '../../context'
import PageOne from '../../FormPages/PageOne'
import PageTwo from '../../FormPages/PageTwo'
import PageThree from '../../FormPages/PageThree'
import themeSettings from '../../theme'
import FormNavigation from '../FormNavigation.js'
import NavigateButton from '../NavigateButton'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'

const reducer = (state, { type, pageModifier, key, value, completed }) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case 'changePage':
      return { ...state, page: state.page + pageModifier }
    case 'changeField':
      return { ...state, [key]: value }
    case 'toggle':
      return { ...state, [key]: !state[key] }
    case 'complete':
      return { ...state, completed: completed }
  }
}

const Form = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultInitialData)

  const changeOption = (option, name) => dispatch({ type: 'changeField', key: name, value: option })

  const changePage = (skipValue) => dispatch({ type: 'changePage', pageModifier: skipValue })

  const changeField = (e) => dispatch({ type: 'changeField', key: e.target.name, value: e.target.value })

  const toggleInput = (e) => dispatch({ type: 'toggle', key: e.target.name })

  const completeField = (completed) => dispatch({ type: 'complete', completed: completed })

  const getNumberOfRequiredFormFields = (formData) => {
    const requiredFields = formData.reduce((sum, pageData) => (sum + getNumberOfRequiredPageFields(pageData)), 0)
    return requiredFields
  }

  const getRequiredFormFields = (formData) => {
    let requiredFields = []
    formData.forEach((pageData) => {
      requiredFields = requiredFields.concat(getRequiredPageFields(pageData))
    })
    return requiredFields
  }

  const getNumberOfRequiredPageFields = (pageData) => {
    return pageData.fields.reduce((sum, field) => (field.isRequired ? sum + 1 : sum), 0)
  }

  const getRequiredPageFields = (pageData) => {
    return pageData.fields.filter(field => field.isRequired)
  }

  const getNumberOfCompletedFields = (fields, actualState) => {
    return fields.reduce((sum, field) => (actualState[field.name] ? sum + 1 : sum), 0)
  }

  useEffect(() => {
    const requiredFields = getRequiredFormFields(formData)
    const numberOfCompletedFields = getNumberOfCompletedFields(requiredFields, state)
    completeField(numberOfCompletedFields)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.nameAndSurname,
    state.email,
    state.selectedGender,
    state.selectedLanguage,
    state.selectedWeekHours,
    state.selectedLessonIdea,
    state.acceptRegulations
  ])

  return (
    <ThemeProvider theme={themeSettings}>
      <StyledForm>
        <formContext.Provider
          value={{
            formState: state,
            changeOption,
            changePage,
            changeField,
            toggleInput
          }}
        >
          <ProgressBar
            completed={state.completed}
            maxRequired={getNumberOfRequiredFormFields(formData)}
          >
          </ProgressBar>
          {state.page === 1 && <PageOne />}
          {state.page === 2 && <PageTwo />}
          {state.page === 3 && <PageThree />}
          <FormNavigation style={{ width: '80%', maxWidth: '800px' }}>
            {state.page !== 1 && (
              <NavigateButton
                icon={faAngleLeft}
                size={'lg'}
                onClick={() => changePage(-1)}
              />
            )}
            {state.page === 3 && <Button type={'submit'}>Submit</Button>}
            {state.page !== 3 && (
              <NavigateButton
                icon={faAngleRight}
                size={'lg'}
                onClick={() => changePage(1)}
              />
            )}
          </FormNavigation>
        </formContext.Provider>
      </StyledForm>
    </ThemeProvider>
  )
}

export default Form
