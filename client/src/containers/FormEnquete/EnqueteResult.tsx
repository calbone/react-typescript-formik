import * as React from 'react'
import styled from 'styled-components'
import { AnswerSummary } from 'stores/domain/form/type'
import PopMenu from 'components/PopMenu'
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
  const ResultSummary = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.margin * 2};
    padding: 12px 16px;
    background: ${({ theme }) => theme.colors.baseC};
    font-weight: bold;
    .summaryNum {
      font-size: 20px;
    }
  `
  // const PopMenu = styled.div`
  //   display: flex;
  //   flex: 0 0 auto;
  //   align-items: center;
  //   position: relative;
  //   cursor: pointer;
  //   svg {
  //     width: 24px;
  //     height: 24px;
  //     fill: ${({ theme }) => theme.colors.mainC};
  //     min-width: 16px;
  //   }
  //   &:hover {
  //     .popMenu__select {
  //       visibility: visible;
  //       opacity: 1;
  //       z-index: 1;
  //     }
  //   }
  //   .popMenu__select {
  //     visibility: hidden;
  //     opacity: 0;
  //     position: absolute;
  //     top: calc(100% + 5px);
  //     right: 0;
  //     z-index: -1;
  //     border-radius: 2px;
  //     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  //     background-color: ${({ theme }) => theme.colors.baseC};
  //     white-space: nowrap;
  //     cursor: pointer;
  //     transition: 0.3s;
  //   }
  //   li + li {
  //     border-top: 1px solid ${({ theme }) => theme.colors.baseA};
  //   }
  //   button {
  //     width: 100%;
  //     padding: 10px 65px;
  //     font-weight: bold;
  //     font-size: 14px;
  //     line-height: 1.5;
  //   }
  // `
  const menuList = ['Shift-JIS', 'UTF-8']
  return (
    <React.Fragment>
      <ResultSummary>
        <p>
          集計結果
          <span className="summaryNum">
            {commaSeparated(answerSummary.total_count)}件
          </span>
        </p>
        <PopMenu label={'CSVダウンロード'} menuList={menuList}>
          <Icon type="download" />
        </PopMenu>
        {/*CSVダウンロード
          <ul className="popMenu__select">
            <li>
              <button>Shift-JIS</button>
            </li>
            <li>
              <button>UTF-8</button>
            </li>
          </ul> */}
      </ResultSummary>
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
