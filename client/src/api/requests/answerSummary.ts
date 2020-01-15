import request from '../'

export const readAnswerSummaryRequest = async (payload: { id: string }) => {
  const url = `/api/v2/current_user/owner/questionnaires/${payload.id}/answer_summary`
  const data = await request.get(url)
  return data
}
