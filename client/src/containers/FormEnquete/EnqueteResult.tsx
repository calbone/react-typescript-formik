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
  const ResultGuide = styled.div`
    padding: 0 16px;
    line-height: 2.2;
  `

  const Box = styled.div`
    border-radius: 2px;
    background-color: #fff;
    &:not(:first-child) {
      margin-top: 16px;
    }
  `

  const Part = styled.div`
    padding: 16px;
    &:not(:last-child) {
      border-bottom: ${({ theme }) => theme.colors.baseA} solid 1px;
    }
    .resultTitle {
      margin-bottom: 12px;
      font-weight: bold;
    }
    .answerNum {
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.mainC};
      font-size: 12px;
    }
    .resultItem {
      padding-left: 1em;
      text-indent: -1em;
      &:not(:last-child) {
        margin-bottom: 16px;
      }
      &--vote {
        display: flex;
        justify-content: space-between;
        span {
          font-weight: bold;
        }
      }
    }
  `
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
      </ResultSummary>
      <ResultGuide>
        個人情報（メールアドレス、住所）はCSVをダウンロードしてご確認いただけます。
        <br />
        CSVはPCサイトのみで確認できます。
      </ResultGuide>
      <Box>
        {answer_detail_summaries.map((answer, i) => {
          return (
            <Part key={i}>
              <p className="resultTitle">
                {answer.answer_detail_summary.question_title}
              </p>
              <div className="answerNum">
                回答 {answer.answer_detail_summary.answer_count}件
              </div>
              {answer.answer_detail_summary.summary.length > 0 &&
                answer.answer_detail_summary.summary.map((summary, j) => {
                  return isObject(summary) ? (
                    <div className="resultItem resultItem--vote" key={j}>
                      {j + 1}. {summary.choice_title}
                      <span>{summary.choice_count}票</span>
                    </div>
                  ) : (
                    <div className="resultItem" key={j}>
                      {j + 1}. {summary}
                    </div>
                  )
                })}
            </Part>
          )
        })}
      </Box>
    </React.Fragment>
  )
}

export default EnqueteResult
