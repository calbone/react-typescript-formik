import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import CheckBox from './CheckBox'

const stories = storiesOf('CheckBox', module)
stories.add('Base', () => (
  <CheckBox
    name={text('フォーム名', 'required')}
    value={text('id', 'required')}
    label={text('テキスト', '必須')}
  />
))
