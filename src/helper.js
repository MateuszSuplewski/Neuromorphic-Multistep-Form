const getNumberOfRequiredPageFields = ({ fields }) => {
  return fields.reduce((sum, { isRequired }) => (isRequired ? sum + 1 : sum), 0)
}

const getRequiredPageFields = ({ fields }) => {
  return fields.filter(({ isRequired }) => isRequired)
}

const getNumberOfCompletedPageFields = (fields, actualState) => {
  return fields.reduce((sum, { name, pattern }) => (actualState[name] && (actualState[name].match(pattern)) ? sum + 1 : sum), 0)
}

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

const getNumberOfCompletedFormFields = (formData, actualState) => {
  let completedFields = 0
  formData.forEach((pageData) => {
    const requiredFields = getRequiredPageFields(pageData)
    completedFields += getNumberOfCompletedPageFields(requiredFields, actualState)
  })
  return completedFields
}

const Validate = (formData, formState, onClick = false) => {
  let formErrors = []
  const requiredFields = getRequiredPageFields(formData[formState.pageNumber - 1])

  requiredFields.forEach((field) => {
    const { name, pattern, label, error, question, fieldFor } = field
    const fieldStateValue = formState[name]

    if (fieldFor === 'toggler' && onClick) {
      if (fieldStateValue === 'false') {
        formErrors = formErrors.concat(`Zaznaczenie pola ${label} jest wymagane`)
      }
      return
    }

    if (!fieldStateValue.match(pattern) && fieldStateValue && fieldFor !== 'toggler') {
      formErrors = formErrors.concat(error)
      return
    }

    if (fieldStateValue.length === 0 && onClick) {
      formErrors = formErrors.concat(`Dane w polu ${label || question} są wymagane!`)
    }
  })

  return formErrors
}

export { getNumberOfRequiredFormFields, getRequiredFormFields, getNumberOfRequiredPageFields, getRequiredPageFields, getNumberOfCompletedPageFields, getNumberOfCompletedFormFields, Validate }
