import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  clearQuestionnaire,
  readQuestionnaire,
} from 'stores/domain/form/questionnaires'
import {
  clearAnswerSummary,
  readAnswerSummary,
} from 'stores/domain/form/answerSummary'
import FormEnquete, {
  FormEnqueteDispathProps,
  FormEnqueteStateProps,
} from 'components/pages/FormEnquete'
import { State } from 'stores/domain/form'

const mapStateToProps = ({
  questionnaires: { questionnaire },
  answerSummary: { answerSummary },
}: State): FormEnqueteStateProps => {
  return {
    questionnaire,
    answerSummary,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): FormEnqueteDispathProps => ({
  clearQuestionnaire: () => dispatch(clearQuestionnaire()),
  clearAnswerSummary: () => dispatch(clearAnswerSummary()),
  readQuestionnaire: (id) => dispatch(readQuestionnaire(id)),
  readAnswerSummary: (id) => dispatch(readAnswerSummary(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormEnquete)
