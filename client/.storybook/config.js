import * as React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { setConsoleOptions } from '@storybook/addon-console'
import { themes } from '../src/constants/themes'
import { ThemeProvider } from 'styled-components'

setConsoleOptions({
  panelExclude: [],
})

addDecorator(withKnobs)
addDecorator(withInfo)
addParameters({
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
})
addDecorator((story) => <ThemeProvider theme={themes}>{story()}</ThemeProvider>)

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src/components', true, /\.(story|stories)\.tsx?$/),
    require.context('../src/components', true, /\__stories__\/index\.tsx?$/),
  ],
  module
)
