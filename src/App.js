import React from 'react'
import Button from './components/Button'
import TextField from './components/TextField'
import Toggler from './components/Toggler'
import ProgressBar from './components/ProgressBar'
import RadioButton from './components/RadioButton'
import { ThemeProvider } from 'styled-components'
import NavigateButton from './components/NavigateButton'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

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
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button>Button</Button>
        <TextField
          placeholder={'Its a placeholder'}
          label={'This is TextField label!'}
        />
        <Toggler label={'regulamin akademii językowej'}/>
        <ProgressBar></ProgressBar>
        <RadioButton label={'This is Radio button!'}></RadioButton>
        <NavigateButton
          icon={faAngleLeft}
          size={'lg'}
        >
        </NavigateButton>
        <NavigateButton
          icon={faAngleRight}
          size={'lg'}
        >
        </NavigateButton>
      </div>
    </ThemeProvider>
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
