import * as React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import styled from '@emotion/styled'
// import { readQuestionnaires } from '../../actions/questionnaires'
import Icon from '../../components/Icon'
import PageHeader from '../../components/PageHeader'

const FormList: React.FC = () => {
  // useEffect(() => {
  //   readQuestionnaires()
  // }, [])
  const CreateForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    font-weight: bold;
    font-size: 16px;
    border-radius: 2px;
    background-color: #fff;
    opacity: 1;
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
    }
    svg {
      width: 14px;
      height: 14px;
      margin-right: 14px;
      fill: #ff8e00;
    }
  `
  return (
    <React.Fragment>
      <PageHeader label="フォーム一覧" />
      <div className="l-content l-content--narrow">
        <Link to="/form">
          <CreateForm>
            <Icon type="plus" />
            フォームを新規作成
          </CreateForm>
        </Link>
        {/* {questionnaires.map((question, i) => {
              return (
                <Link
                  to={`/dashboard/form/enquete/${question.id}/edit`}
                  key={i}
                >
                  <div className="p-formList__item">
                    <p className="p-formList__name">{question.title}</p>
                    <div className="p-formList__status">
                      <ul className="c-tag">
                        <li
                          className={`c-tag__item c-tag__item--another c-tag__item--${
                            question.show_status ? 'success' : 'disable'
                          }`}
                        >
                          {question.show_status ? '公開中' : '非公開'}
                        </li>
                      </ul>
                      <span className="p-formList__emphasis">
                        {question.answer_count}人
                      </span>
                      が回答済
                    </div>
                  </div>
                </Link>
              )
            })} */}
      </div>
    </React.Fragment>
  )
}

// const mapStateToProps = state => {
//   return {
//     questionnaires: state.questionnaires.questionnaires
//   }
// }

// const mapDispatchToProps = { readQuestionnaires }

// export default connect(mapStateToProps, mapDispatchToProps)(FormList)
export default FormList
