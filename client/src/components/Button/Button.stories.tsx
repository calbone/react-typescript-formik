import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import Button from './Button'

const stories = storiesOf('Button', module)
stories.add('Base', () => (
  <Button valid={boolean('状態', true)} label={text('テキスト', '登録する')} />
))
