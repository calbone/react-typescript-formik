import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { readQuestionnaire } from 'stores/domain/form/questionnaires'
import { readAnswerSummary } from 'stores/domain/form/answerSummary'
import FormEnquete, {
  FromEnqueteDispathProps,
  FromEnqueteStateProps,
} from 'components/pages/FormEnquete'
import { State } from 'stores/domain/form'

const mapStateToProps = ({
  questionnaires: { questionnaire },
  answerSummary: { answerSummary },
}: State): FromEnqueteStateProps => {
  return {
    questionnaire,
    answerSummary,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): FromEnqueteDispathProps => ({
  readQuestionnaire: (id) => dispatch(readQuestionnaire(id)),
  readAnswerSummary: (id) => dispatch(readAnswerSummary(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormEnquete)
