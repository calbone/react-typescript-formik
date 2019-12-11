import * as React from 'react'
import { useFormik } from 'formik'
import styled from '@emotion/styled'
import FormLabel from '../../components/FormLabel'
import FieldInputText from '../../components/FieldInputText'
import SelectBox from '../../components/SelectBox'
import RadioButton from '../../components/RadioButton'
import ToggleButton from '../../components/ToggleButton'
// import { connect } from "react-redux";
// import { push } from "connected-react-router";
// import SubModal from "../../components/SubModal";
// import DateCalendar from "../../components/DateCalendar";
// import Icon from "../../components/Icon";
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
  const FormQuestionBox = styled.div`
    border-radius: 2px;
    background-color: #fff;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    .part {
      padding: 16px;
      &:not(:last-child) {
        border-bottom: #f2f2f2 solid 1px;
      }
    }
  `
  const FormGroup = styled.fieldset`
    :not(:first-of-type) {
      margin-top: 24px;
    }
  `

  const FormQuestionAccordion = styled.div`
    padding: 16px;
    cursor: pointer;
  `
  const disclosureTypes = [
    { label: '全体公開', value: 'all' },
    { label: 'フォロワー限定', value: 'followers' },
    { label: '有料会員限定', value: 'paidMember' }
  ]
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormQuestionBox>
        <div className="part">
          <FormGroup>
            <FormLabel title="フォームタイトル" require />
            <FieldInputText />
          </FormGroup>
          <FormGroup>
            <FormLabel title="質問内容" require />
            <FieldInputText />
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
          <FormQuestionAccordion></FormQuestionAccordion>
        </div>
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
