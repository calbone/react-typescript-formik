import { configure } from '@storybook/react'
import { setConsoleOptions } from '@storybook/addon-console'

setConsoleOptions({
  panelExclude: []
})

const loadStories = () => {
  let req = require.context('../src/stories', true, /.(tsx|js)$/)
  req.keys().forEach(filename => req(filename))

  req = require.context('../src', true, /.stories.(tsx|js)$/)
  req.keys().forEach(filename => req(filename))
}

// automatically import all files ending in *.stories.js
configure(loadStories, module)
