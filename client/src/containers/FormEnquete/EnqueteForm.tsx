import * as React from 'react'
import { useFormik } from 'formik'
import styled from '@emotion/styled'
import FieldInputText from '../../components/FieldInputText'
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
  `
  const FormQuestionPart = styled.div`
    &:not(:last-child) {
      border-bottom: #f2f2f2 solid 1px;
    }
  `
  const FormQuestionBody = styled.div`
    padding: 16px;
  `
  const FormLabel = styled.legend`
    display: block;
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 12px;
    span {
      margin-left: 0.5em;
      color: #fb311a;
    }
  `
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormQuestionBox>
        <FormQuestionPart>
          <FormQuestionBody>
            <FormLabel>
              フォームタイトル
              <span>*</span>
            </FormLabel>
            <div className="p-formGroup__item">
              <FieldInputText />
            </div>
          </FormQuestionBody>
        </FormQuestionPart>
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
