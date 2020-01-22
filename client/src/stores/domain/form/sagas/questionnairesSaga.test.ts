import { expectSaga } from 'redux-saga-test-plan'
import { handleReadQuestionnairesRequest } from './questionnaires'

describe('Questionnaires API sagas', () => {
  it('fetches Questionnaires', () => {
    return expectSaga(handleReadQuestionnairesRequest)
  })
})
