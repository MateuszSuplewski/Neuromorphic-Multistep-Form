import React from 'react'
import Form from './components/Form'
// themeSettings.shadow = `4px 4px 6px ${themeSettings.shadowColorDark}, -4px -4px 6px ${themeSettings.shadowColorLight}`
// themeSettings.innerShadow = `inset 2px 2px 4px ${themeSettings.shadowColorDark}, inset -2px -2px 4px ${themeSettings.shadowColorLight}`

export const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>

      <Form></Form>
    </div>
  )
}

export default App

// :root {
//     --primary-light: #8abdff;
//     --primary: #6d5dfc;
//     --primary-dark: #5b0eeb;

//     --white: #FFFFFF;
//     --greyLight-1: #E4EBF5;
//     --greyLight-2: #c8d0e7;
//     --greyLight-3: #bec8e4;
//     --greyDark: #9baacf;
//   }
