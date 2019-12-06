import * as React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { readQuestionnaires } from '../../actions/questionnaires'
import Icon from '../../components/Icon'
import PageHeader from '../../components/PageHeader'

const FormList: React.FC = () => {
  // useEffect(() => {
  //   readQuestionnaires()
  // }, [])
  return (
    <React.Fragment>
      <PageHeader label="フォーム一覧" />
      {/* <div className="p-pageHeader">
        <Link to="/dashboard" className="c-return">
          <Icon type="arrow" />
          戻る
        </Link>
        <h2 className="p-pageHeader__title">フォーム一覧</h2>
      </div> */}
      <div className="l-content">
        <div className="p-formList">
          {/* <Link to="/form">
            <div className="c-box">
              <Icon type="plus" />
              フォームを新規作成
            </div>
          </Link> */}
          <div className="p-formList__list">
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
        </div>
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
