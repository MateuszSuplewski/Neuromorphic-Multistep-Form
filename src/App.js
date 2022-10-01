import React from 'react'
import Button from './components/Button'
import TextField from './components/TextField'
import Toggler from './components/Toggler'
import ProgressBar from './components/ProgressBar'
import { ThemeProvider } from 'styled-components'

const themeSettings = {
  primaryColor: '#9baacf',
  primaryBackground: '#e4eBf5',
  decorationColor: '#185af1',
  shadowColorDark: '#bec8e4',
  shadowColorLight: 'rgba(255, 255, 255, 0.8)'
}

// themeSettings.shadow = `4px 4px 6px ${themeSettings.shadowColorDark}, -4px -4px 6px ${themeSettings.shadowColorLight}`
// themeSettings.innerShadow = `inset 2px 2px 4px ${themeSettings.shadowColorDark}, inset -2px -2px 4px ${themeSettings.shadowColorLight}`

export const App = () => {
  return (
    <ThemeProvider theme={themeSettings}>
      <div>
        <Button>Button</Button>
        <TextField placeholder={'Its a placeholder'}/>
        <Toggler/>
        <ProgressBar></ProgressBar>
      </div>
    </ThemeProvider>
  )
}

export default App
