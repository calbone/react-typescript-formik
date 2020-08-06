import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import CheckBox from './'

const stories = storiesOf('CheckBox', module)
stories.add('Base', () => (
  <CheckBox
    name={text('フォーム名', 'require')}
    value={text('id', '1')}
    label={text('テキスト', '必須')}
  />
))
