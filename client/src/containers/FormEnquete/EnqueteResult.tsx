import * as React from 'react'
import { AnswerSummary } from 'stores/domain/form/type'
import { commaSeparated } from 'utils/commaSeparated'
import Icon from 'components/Icon'

type AnswerSummaryProps = {
  answerSummary: AnswerSummary
}

const EnqueteResult: React.FC<AnswerSummaryProps> = ({ answerSummary }) => {
  const { answer_detail_summaries = [] } = answerSummary
  const isObject = (obj: object | []) => {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }
  console.log('answer_detail_summaries:', answer_detail_summaries)
  return (
    <React.Fragment>
      <div className="p-formEnquete__resultSummary">
        <p>
          集計結果
          <span className="p-formEnquete__summaryNum">
            {commaSeparated(answerSummary.total_count)}件
          </span>
        </p>
        <div className="c-popMenu p-formEnquete__download">
          <Icon type="download" />
          CSVダウンロード
          <ul className="c-popMenu__select">
            <li>
              <button>Shift-JIS</button>
            </li>
            <li>
              <button>UTF-8</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-formEnquete__resultGuide">
        個人情報（メールアドレス、住所）はCSVをダウンロードしてご確認いただけます。
        <br />
        CSVはPCサイトのみで確認できます。
      </div>
      <div className="c-box">
        {answer_detail_summaries.map((answer, i) => {
          return (
            <div className="p-formEnquete__part" key={i}>
              <div className="c-box__body">
                <p className="p-formEnquete__resultTitle">
                  {answer.answer_detail_summary.question_title}
                </p>
                <div className="p-formEnquete__answerNum">
                  回答 {answer.answer_detail_summary.answer_count}件
                </div>
                {/* {answer.answer_detail_summary.summary.length > 0 &&
                  answer.answer_detail_summary.summary.map((summary, j) => {
                    return isObject(summary) ? (
                      <div
                        className="p-formEnquete__resultItem p-formEnquete__resultItem--vote"
                        key={j}
                      >
                        {j + 1}. {summary.choice_title}
                        <span>{summary.choice_count}票</span>
                      </div>
                    ) : (
                      <div className="p-formEnquete__resultItem" key={j}>
                        {j + 1}. {summary}
                      </div>
                    )
                  })} */}
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default EnqueteResult
