import request from '../..'
import { Questionnaire } from './types'
// export const createQuestionnairesRequest = async payload => {
//   const url = "/api/v2/current_user/owner/questionnaires";
//   const data = await request.post(url, payload);
//   return data;
// };

interface QuestionnaireResponse {
  data: Questionnaire[]
}

export const readQuestionnairesRequest = async () => {
  const url = '/api/v2/current_user/owner/questionnaires'
  const { data } = await request.get<QuestionnaireResponse>(url)
  return data
}

export const readQuestionnaireRequest = async (payload: { id: string }) => {
  const url = `/api/v2/current_user/owner/questionnaires/${payload.id}`
  const data = await request.get(url)
  return data
}

// export const updateQuestionnairesRequest = async payload => {
//   const id = payload.id;
//   const url = `/api/v2/current_user/owner/questionnaires/${id}`;
//   const data = await request.put(url, payload);
//   return data;
// };
