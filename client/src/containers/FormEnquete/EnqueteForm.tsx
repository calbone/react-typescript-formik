import * as React from 'react'
import { useFormik } from 'formik'
import styled from 'styled-components'
import FormLabel from '../../components/FormLabel'
import { TextField, AddTextField } from '../../components/TextField'
import TextArea from '../../components/TextArea'
import SelectBox from '../../components/SelectBox'
import CheckBox from '../../components/CheckBox'
import RadioButton from '../../components/RadioButton'
import ToggleButton from '../../components/ToggleButton'
import Accordion from '../../components/Accordion'
// import { connect } from "react-redux";
// import { push } from "connected-react-router";
// import SubModal from "../../components/SubModal";
// import DateCalendar from "../../components/DateCalendar";
import Icon from '../../components/Icon'
// import Accordion from "../../components/Accordion";
// import {
//   clearQuestionnaires,
//   createQuestionnaires,
//   updateQuestionnaires
// } from "../../actions/questionnaires";

const EnqueteForm = () => {
  const formik = useFormik({
    initialValues: {
      email: 'ああああ'
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  const disclosureTypes = [
    { label: '全体公開', value: 'all' },
    { label: 'フォロワー限定', value: 'followers' },
    { label: '有料会員限定', value: 'paidMember' }
  ]
  const questionTypes = [
    { label: 'テキストエリア', value: 'textarea' },
    { label: 'テキストボックス', value: 'textbox' },
    { label: 'セレクトボックス', value: 'selectbox' },
    { label: 'チェックボックス', value: 'checkbox' },
    { label: 'ラジオボタン', value: 'radio' },
    { label: 'メールアドレス(個人情報)', value: 'mail' },
    { label: '住所(個人情報)', value: 'address' }
  ]
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
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormQuestionBox>
        <div className="part">
          <FormGroup>
            <FormLabel title="フォームタイトル" require />
            <TextField />
          </FormGroup>
          <FormGroup>
            <FormLabel title="質問内容" require />
            <QuestionBox>
              <FormGroup>
                <FormLabel title="質問の形式" />
                <SelectBox items={questionTypes} />
              </FormGroup>
              <FormGroup>
                <FormLabel title="質問タイトル" />
                <TextField />
              </FormGroup>
              <FormGroup>
                <FormLabel title="選択肢" />
                <TextFieldColumn>
                  <AddTextField />
                  <PopMenu>
                    <Icon type="dots" />
                    <ul className="popMenu__select">
                      <li>
                        <button>削除</button>
                      </li>
                    </ul>
                  </PopMenu>
                </TextFieldColumn>
                <AddField>入力エリアを追加する</AddField>
              </FormGroup>
              <QuestionCheckBound>
                <Icon type="trash" />
                <div className="sortArea">
                  <span className="c-sortIcon c-sortIcon--up"></span>
                  <span className="c-sortIcon c-sortIcon--down"></span>
                </div>
                <CheckBox label="必須" name="required" value="required" />
              </QuestionCheckBound>
            </QuestionBox>
          </FormGroup>
        </div>
        <div className="part">
          <FormGroup>
            <FormLabel title="応募制限" />
            <RadioButton
              label="無制限"
              name="answer_limit_status"
              value="unlimited"
              defaultChecked
            />
            <RadioButton
              label="一回だけ"
              name="answer_limit_status"
              value="once"
            />
          </FormGroup>
        </div>
        <FormQuestionAccordion>
          <Accordion title="完了ページ設定" content={<TextArea rows={9} />} />
        </FormQuestionAccordion>
        {/* <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button> */}
      </FormQuestionBox>
      <FormQuestionBox>
        <div className="part">
          <FormGroup>
            <FormLabel title="公開状態" />
            <ToggleButton labelOn="公開" labelOff="非公開" name="show_status" />
          </FormGroup>
          <FormGroup>
            <FormLabel title="公開範囲" />
            <SelectBox items={disclosureTypes} />
          </FormGroup>
        </div>
      </FormQuestionBox>
    </form>
  )
}

// const mapStateToProps = state => {
//   return {
//     isLoaded: state.questionnaires.update.loaded,
//     isError: state.questionnaires.update.error,
//     EnqueteForm: state.form.EnqueteForm || {}
//   };
// };
// const mapDispatchToProps = {
//   clearQuestionnaires,
//   createQuestionnaires,
//   updateQuestionnaires,
//   push
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(
//   reduxForm({
//     validate,
//     form: "EnqueteForm",
//     enableReinitialize: true
//   })(EnqueteForm)
// );

export default EnqueteForm
