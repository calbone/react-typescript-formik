import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { setConsoleOptions } from '@storybook/addon-console'

setConsoleOptions({
  panelExclude: []
})

const req = require.context('../src/stories', true, /\.(story|stories)\.tsx$/)
const loadStories = () => {
  addDecorator(withKnobs)
  addDecorator(withInfo)
  req.keys().forEach(filename => req(filename))
}

// automatically import all files ending in *.stories.js
configure(loadStories, module)
