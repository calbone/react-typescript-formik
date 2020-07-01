import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { readQuestionnaire } from 'stores/domain/form/questionnaires'
import { readAnswerSummary } from 'stores/domain/form/answerSummary'
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
  readQuestionnaire: (id) => dispatch(readQuestionnaire(id)),
  readAnswerSummary: (id) => dispatch(readAnswerSummary(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormEnquete)
