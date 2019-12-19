import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import styled from 'styled-components'
import { Questionnaire } from '../../stores/domain/form/type'
import { readQuestionnaires } from '../../stores/domain/form/actions/questionnaires'
import Icon from '../../components/Icon'
import Content from '../../components/Content'
import PageHeader from '../../components/PageHeader'
import Tag from '../../components/Tag'

const FormList: React.FC<MergeProps> = ({
  readQuestionnaires,
  questionnaires
}) => {
  useEffect(() => {
    readQuestionnaires()
  }, [readQuestionnaires])
  const CreateForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    font-weight: bold;
    font-size: 16px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.baseC};
    opacity: 1;
    transition: 0.2s;
    a & {
      color: ${({ theme }) => theme.colors.accentA};
    }
    &:hover {
      opacity: 0.6;
    }
    svg {
      width: 14px;
      height: 14px;
      margin-right: 14px;
      fill: ${({ theme }) => theme.colors.accentA};
    }
  `
  const FormListWrapper = styled.div`
    margin-top: 16px;
  `
  const FormListItem = styled.div`
    padding: 16px 48px 16px 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.baseA};
    background: #fff;
  `
  const FormListName = styled.p`
    font-weight: bold;
    a & {
      color: ${({ theme }) => theme.colors.mainA};
    }
  `
  const FormListStatus = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.mainC};
  `
  const FormListEmphasis = styled.span`
    display: flex;
    align-items: center;
    margin-left: 12px;
    font-size: 12px;
    font-weight: bold;
  `
  return (
    <React.Fragment>
      <PageHeader label="フォーム一覧" />
      <Content>
        <Link to="/enquete">
          <CreateForm>
            <Icon type="plus" />
            フォームを新規作成
          </CreateForm>
        </Link>
        <FormListWrapper>
          {questionnaires.map(question => {
            return (
              <Link to={`/enquete/${question.id}/edit`} key={question.id}>
                <FormListItem>
                  <FormListName>{question.title}</FormListName>
                  <FormListStatus>
                    <Tag status={question.show_status} />
                    <FormListEmphasis>
                      {question.answer_count}人
                    </FormListEmphasis>
                    が回答済
                  </FormListStatus>
                </FormListItem>
              </Link>
            )
          })}
        </FormListWrapper>
      </Content>
    </React.Fragment>
  )
}

interface DispatchProps {
  readQuestionnaires: () => void
}

interface StateProps {
  questionnaires: Questionnaire[]
}

interface MergeProps extends DispatchProps, StateProps {}

const mapStateToProps = (state: any): StateProps => ({
  questionnaires: state.questionnaires.questionnaires
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  readQuestionnaires: () => dispatch(readQuestionnaires())
})

export default connect(mapStateToProps, mapDispatchToProps)(FormList)
