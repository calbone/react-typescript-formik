import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { readQuestionnaires } from 'stores/domain/form/questionnaires'
import FormList, {
  FormListStateProps,
  FormListDispatchProps,
} from 'components/pages/FormList'

const mapStateToProps = ({
  questionnaires: { questionnaires },
}: {
  questionnaires: FormListStateProps
}): FormListStateProps => ({
  questionnaires,
})

const mapDispatchToProps = (dispatch: Dispatch): FormListDispatchProps => ({
  readQuestionnaires: () => dispatch(readQuestionnaires()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormList)
