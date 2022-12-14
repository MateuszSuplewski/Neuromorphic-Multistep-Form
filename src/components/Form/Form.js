/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState } from 'react'
import StyledForm from './Form.styled'
import ProgressBar from '../ProgressBar'
import { ThemeProvider } from 'styled-components'
import formContext from '../../context'
import PageOne from '../../FormPages/PageOne'
import PageTwo from '../../FormPages/PageTwo'
import PageThree from '../../FormPages/PageThree'
import PageLast from '../../FormPages/PageLast'
import themeSettings from '../../theme'
import FormNavigation from '../FormNavigation.js'
import NavigateButton from '../NavigateButton'
import Button from '../Button'
import Errors from '../Errors'
import { defaultInitialData, formData } from '../../pagesData'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { getNumberOfRequiredFormFields, getNumberOfCompletedFormFields, Validate } from '../../helper'

const reducer = (state, { type, skipValue, key, value, completedRequiredFields }) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case 'changePage':
      return { ...state, pageNumber: state.pageNumber + skipValue }
    case 'changeField':
      return { ...state, [key]: value }
    case 'toggleInput':
      return { ...state, [key]: value }
    case 'completeField':
      return { ...state, completedRequiredFields: completedRequiredFields }
  }
}

const Form = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultInitialData)

  const [errors, setErrors] = useState([])

  const changeOption = (option, name) => dispatch({ type: 'changeField', key: name, value: option })

  const changePage = (skipValue) => dispatch({ type: 'changePage', skipValue: skipValue })

  const changeField = (e) => dispatch({ type: 'changeField', key: e.target.name, value: e.target.value })

  const completeField = (completedRequiredFields) => dispatch({ type: 'completeField', completedRequiredFields: completedRequiredFields })

  const HandleChangePageToNext = () => {
    const pageErrors = Validate(formData, state, true)
    setErrors(pageErrors)

    const numberOfCompletedFields = getNumberOfCompletedFormFields(formData, state)
    completeField(numberOfCompletedFields)

    if (pageErrors.length === 0) changePage(1)
  }

  const HandleChangePageToPrev = () => changePage(-1)

  const toggleInput = (e, value) => {
    let finalValue = ''
    if (value === 'true') {
      finalValue = 'false'
    } else {
      finalValue = 'true'
    }
    dispatch({ type: 'toggleInput', key: e.target.name, value: finalValue })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    HandleChangePageToNext()
  }

  useEffect(() => {
    const pageErrors = Validate(formData, state)
    setErrors(pageErrors)
    const numberOfCompletedFields = getNumberOfCompletedFormFields(formData, state)
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

  const pages = [PageOne, PageTwo, PageThree, PageLast]
  const CurrentPage = pages[state.pageNumber - 1]

  return (
    <ThemeProvider theme={themeSettings}>
      <StyledForm
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <formContext.Provider
          value={{
            formState: state,
            changeOption,
            changePage,
            changeField,
            toggleInput
          }}
        >
          {
            state.pageNumber !== pages.length && (
              <ProgressBar
                completedRequiredFields={state.completedRequiredFields}
                requiredFields={getNumberOfRequiredFormFields(formData)}
              />
            )
          }
          <CurrentPage/>
          <FormNavigation>
            {
              (state.pageNumber !== 1 && state.pageNumber !== pages.length) ?
                <NavigateButton
                  icon={faAngleLeft}
                  size={'lg'}
                  onClick={() => HandleChangePageToPrev()}
                />
                : null
              }
            {state.pageNumber === (pages.length - 1) && (
            <Button
              type={'submit'}
            >
              Wy??lij
            </Button>
            )}
            {
            (state.pageNumber !== pages.length && state.pageNumber !== (pages.length - 1)) ?
              <NavigateButton
                icon={faAngleRight}
                size={'lg'}
                onClick={() => HandleChangePageToNext()}
              />
              : null
            }
          </FormNavigation>
          {
            errors.length > 0 ? <Errors errors={errors}></Errors> : null
          }
        </formContext.Provider>
      </StyledForm>
    </ThemeProvider>
  )
}

export default Form
