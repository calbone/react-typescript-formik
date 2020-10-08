import * as React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { setConsoleOptions } from '@storybook/addon-console'
import { themes } from '../src/constants/themes'
import { ThemeProvider } from 'styled-components'
import requireContext from 'require-context.macro'

setConsoleOptions({
  panelExclude: [],
})

const req = requireContext(
  '../src/components',
  true,
  /\.(story|stories)\.tsx?$/
)
const loadStories = () => {
  addDecorator(withKnobs)
  addDecorator(withInfo)
  addDecorator(withA11y)
  addDecorator((story) => (
    <ThemeProvider theme={themes}>{story()}</ThemeProvider>
  ))
  req.keys().forEach((filename) => req(filename))
}

// automatically import all files ending in *.stories.js
configure(loadStories, module)
