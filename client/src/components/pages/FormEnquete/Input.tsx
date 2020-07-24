import * as React from 'react'
import { Form, FormikProps, FieldArray, Formik } from 'formik'
import styled from 'styled-components'
import { Questionnaire } from 'types/questionnaire'
import FormLabel from 'components/FormLabel'
import { TextField, AddTextField } from 'components/TextField'
import TextArea from 'components/TextArea'
import SelectBox from 'components/SelectBox'
import CheckBox from 'components/CheckBox'
import RadioButton from 'components/RadioButton'
import ToggleButton from 'components/ToggleButton'
import Accordion from 'components/Accordion'
import { Button } from 'components/Button'
import Icon from 'components/Icon'
import { disclosureTypes, questionTypes } from 'constants/selectValues'

type InitialValuesProps = {
  initialValues: Questionnaire
}
const Input: React.FC<InitialValuesProps> = ({ initialValues }) => {
  const FormQuestionBox = styled.div`
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.baseC};
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    .part {
      padding: 16px;
      &:not(:last-child) {
        border-bottom: ${({ theme }) => theme.colors.baseA} solid 1px;
      }
    }
  `
  const FormGroup = styled.fieldset`
    :not(:first-of-type) {
      margin-top: 24px;
    }
  `
  const QuestionBox = styled.div`
    margin-top: 8px;
    padding: 16px 16px 24px;
    border: 1px solid ${({ theme }) => theme.colors.baseA};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.baseB};
  `
  const FormQuestionAccordion = styled.div`
    padding: 16px;
    cursor: pointer;
  `
  const TextFieldColumn = styled.div`
    display: flex;
    justify-content: space-between;
    :not(:last-child) {
      margin-bottom: 8px;
    }
  `
  const PopMenu = styled.ul`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    position: relative;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
      fill: ${({ theme }) => theme.colors.mainC};
      min-width: 16px;
    }
    &:hover {
      .popMenu__select {
        visibility: visible;
        opacity: 1;
        z-index: 1;
      }
    }
    .popMenu__select {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: calc(100% + 5px);
      right: 0;
      z-index: -1;
      border-radius: 2px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background-color: ${({ theme }) => theme.colors.baseC};
      white-space: nowrap;
      cursor: pointer;
      transition: 0.3s;
    }
    li + li {
      border-top: 1px solid ${({ theme }) => theme.colors.baseA};
    }
    button {
      width: 100%;
      padding: 10px 65px;
      font-weight: bold;
      font-size: 14px;
      line-height: 1.5;
    }
  `
  const AddField = styled.p`
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.accentA};
    font-weight: bold;
    cursor: pointer;
  `

  const QuestionCheckBound = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    border-top: ${({ theme }) => theme.colors.mainD} solid 1px;
    padding-top: 18px;
    svg {
      width: 24px;
      height: 24px;
      fill: ${({ theme }) => theme.colors.mainC};
      cursor: pointer;
    }
    .sortArea {
      display: flex;
      .c-sortIcon:not(:first-child) {
        margin-left: 20px;
      }
    }
  `
  const ButtonContainer = styled.div`
    text-align: center;
    padding: 32px 0;
  `

  const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 48px;
    margin-top: 16px;
    border: 2px dashed #b9b9b9;
    border-radius: 8px;
    cursor: pointer;
  `

  const AddQuestion = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 14px;
      margin-right: 8px;
    }
    path {
      fill: #818181;
    }
  `
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props: FormikProps<Questionnaire>) => {
        const {
          question_data: { questions },
        } = props.values
        console.log('props.values', props.values)
        return (
          <Form>
            <FormQuestionBox>
              <div className="part">
                <FormGroup>
                  <FormLabel title="フォームタイトル" require />
                  <TextField name="title" />
                </FormGroup>
                <FormGroup>
                  <FormLabel title="質問内容" require />
                  <FieldArray
                    name="question_data.questions"
                    render={(arrayHelpers) =>
                      questions.map((question, idx) => {
                        return (
                          <React.Fragment key={idx}>
                            <QuestionBox>
                              <FormGroup>
                                <FormLabel title="質問の形式" />
                                <SelectBox
                                  key={idx}
                                  name={`question_data.questions[${idx}].question_type`}
                                  items={questionTypes}
                                />
                              </FormGroup>
                              <FormGroup>
                                <FormLabel title="質問タイトル" />
                                <TextField
                                  key={idx}
                                  name={`question_data.questions[${idx}].question_title`}
                                />
                              </FormGroup>
                              <FormGroup>
                                <FormLabel title="選択肢" />
                                <FieldArray
                                  name={`question_data.questions[${idx}].choices`}
                                  render={(arrayHelpers) =>
                                    question.choices.map((choice, cidx) => {
                                      return (
                                        <React.Fragment key={cidx}>
                                          <TextFieldColumn>
                                            <AddTextField
                                              key={cidx}
                                              name={`question_data.questions[${idx}].choices[${cidx}].choice_title`}
                                            />
                                            {question.choices.length > 1 && (
                                              <PopMenu>
                                                <Icon type="dots" />
                                                <ul className="popMenu__select">
                                                  <li>
                                                    <button
                                                      key={cidx}
                                                      type="button"
                                                      onClick={() => {
                                                        arrayHelpers.remove(
                                                          cidx
                                                        )
                                                      }}
                                                    >
                                                      削除
                                                    </button>
                                                  </li>
                                                </ul>
                                              </PopMenu>
                                            )}
                                          </TextFieldColumn>
                                          {question.choices.length - 1 ===
                                            cidx && (
                                            <AddField
                                              onClick={() =>
                                                arrayHelpers.push({
                                                  choice_uuid: null,
                                                  choice_title: null,
                                                })
                                              }
                                            >
                                              入力エリアを追加する
                                            </AddField>
                                          )}
                                        </React.Fragment>
                                      )
                                    })
                                  }
                                />
                              </FormGroup>
                              <QuestionCheckBound>
                                {questions.length > 1 && (
                                  <Icon
                                    type="trash"
                                    onClick={() => arrayHelpers.remove(idx)}
                                  />
                                )}
                                <div className="sortArea">
                                  <span className="c-sortIcon c-sortIcon--up" />
                                  <span className="c-sortIcon c-sortIcon--down" />
                                </div>
                                <CheckBox
                                  key={idx}
                                  label="必須"
                                  name={`question_data.questions[${idx}].required`}
                                  value="required"
                                />
                              </QuestionCheckBound>
                            </QuestionBox>
                            {questions.length - 1 === idx && (
                              <AddButton
                                onClick={() =>
                                  arrayHelpers.push({
                                    question_uuid: null,
                                    question_type: 'textarea',
                                    question_title: null,
                                    choices: [
                                      {
                                        choice_uuid: null,
                                        choice_title: null,
                                      },
                                    ],
                                    required: false,
                                  })
                                }
                              >
                                <AddQuestion>
                                  <Icon type="plus" />
                                  質問を追加する
                                </AddQuestion>
                              </AddButton>
                            )}
                          </React.Fragment>
                        )
                      })
                    }
                  />
                </FormGroup>
              </div>
              <div className="part">
                <FormGroup>
                  <FormLabel title="応募制限" />
                  <RadioButton
                    label="無制限"
                    name="answer_limit_status"
                    value="unlimited"
                  />
                  <RadioButton
                    label="一回だけ"
                    name="answer_limit_status"
                    value="once"
                  />
                </FormGroup>
              </div>
              <FormQuestionAccordion>
                <Accordion
                  title="完了ページ設定"
                  content={<TextArea rows={9} name={'body'} />}
                />
              </FormQuestionAccordion>
            </FormQuestionBox>
            <FormQuestionBox>
              <div className="part">
                <FormGroup>
                  <FormLabel title="公開状態" />
                  <ToggleButton
                    labelOn="公開"
                    labelOff="非公開"
                    name="show_status"
                    defaultValue={initialValues.show_status}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel title="公開範囲" />
                  <SelectBox
                    name={'disclosure_scope'}
                    items={disclosureTypes}
                  />
                </FormGroup>
              </div>
              <ButtonContainer>
                <Button valid={true} type="submit" label="登録する" />
              </ButtonContainer>
            </FormQuestionBox>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Input
