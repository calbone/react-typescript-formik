import { Questionnaire } from 'types/questionnaire'

export interface QuestionnairesResponse {
  data: Questionnaire[]
}

export interface QuestionnaireParames {
  id: string
}

export interface QuestionnaireResponse {
  data: Questionnaire
}
