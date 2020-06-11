import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Questionnaire } from 'stores/domain/form/type'
import { readQuestionnaires } from 'stores/domain/form/actions/questionnaires'
import FormList from 'components/pages/FormList'

export interface DispatchProps {
  readQuestionnaires: () => void
}

export interface StateProps {
  questionnaires: Questionnaire[]
}

const mapStateToProps = (state: any): StateProps => ({
  questionnaires: state.questionnaires.questionnaires,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  readQuestionnaires: () => dispatch(readQuestionnaires()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormList)
