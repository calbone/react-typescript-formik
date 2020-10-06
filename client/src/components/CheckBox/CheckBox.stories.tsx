import React from 'react'
import { storiesOf } from '@storybook/react'
import withFormik from 'storybook-formik'
import { text } from '@storybook/addon-knobs'
import CheckBox from './'
import { defaultValues } from '../../constants/defaultValues'

const stories = storiesOf('CheckBox', module)
stories
  .addDecorator(withFormik)
  .add('default', () => (
    <CheckBox
      name={text('フォーム名', 'question_data.questions[0].required')}
      value={text('id', '1')}
      label={text('テキスト', '必須')}
    />
  ))
