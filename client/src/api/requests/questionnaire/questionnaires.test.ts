import axios from 'axios'
import { readQuestionnairesRequest } from '.'
import MockAdapter from 'axios-mock-adapter'
import QuestionnairesData from '../../__mocks__/questionnaires.json'

describe('Questionnaires API', () => {
  const mock = new MockAdapter(axios)
  afterEach(() => {
    mock.reset()
  })
  describe('Get Questionnaires', () => {
    it('should succeed', async () => {
      const response = await readQuestionnairesRequest()
      expect(response).toEqual(QuestionnairesData.questionnaires)
    })
  })
})
