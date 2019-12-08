import { QuestionnairesState } from '../type'
import * as actions from '../actions/questionnaires'

const initialState: QuestionnairesState = {
  questionnaires: [],
  questionnaire: {},
  create: { loaded: true, error: null },
  read: { loaded: true, error: null },
  update: { loaded: true, error: null },
  delete: { loaded: true, error: null }
}

export const questionnaires = (
  state = initialState,
  action: actions.ActionTypes
): QuestionnairesState => {
  const { type, payload } = action
  switch (type) {
    // case ActionTypes.CLEAR_QUESTIONNAIRES:
    //   return {
    //     ...initialState,
    //     questionnaires: state.questionnaires
    //   }
    // case ActionTypes.CREATE_QUESTIONNAIRES:
    //   return {
    //     ...state,
    //     create: { loaded: false, error: null }
    //   }
    // case ActionTypes.CREATE_QUESTIONNAIRES_SUCCESS:
    //   return {
    //     ...state,
    //     create: { loaded: true, error: false }
    //   }
    // case ActionTypes.CREATE_QUESTIONNAIRES_FAILURE:
    //   return {
    //     ...state,
    //     create: { loaded: true, error: true }
    //   }
    case actions.READ_QUESTIONNAIRES:
      return {
        ...state,
        read: { loaded: false, error: null }
      }
    case actions.READ_QUESTIONNAIRES_SUCCESS:
      return {
        ...state,
        questionnaires: payload,
        read: { loaded: true, error: false }
      }
    case actions.READ_QUESTIONNAIRES_FAILURE:
      return {
        ...state,
        read: { loaded: true, error: true }
      }
    case actions.READ_QUESTIONNAIRE:
      return {
        ...state,
        read: { loaded: false, error: null }
      }
    case actions.READ_QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        questionnaire: payload,
        read: { loaded: true, error: false }
      }
    case actions.READ_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        read: { loaded: true, error: true }
      }
    // case ActionTypes.UPDATE_QUESTIONNAIRES:
    //   return {
    //     ...state,
    //     update: { loaded: false, error: null }
    //   }
    // case ActionTypes.UPDATE_QUESTIONNAIRES_SUCCESS:
    //   return {
    //     ...state,
    //     update: { loaded: true, error: false }
    //   }
    // case ActionTypes.UPDATE_QUESTIONNAIRES_FAILURE:
    //   return {
    //     ...state,
    //     update: { loaded: true, error: true }
    //   }
    default:
      return { ...state }
  }
}
