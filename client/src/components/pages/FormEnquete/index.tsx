import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Content from 'components/Content'
import PageHeader from 'components/PageHeader'
import { Modal, SubModal } from 'components/Modal'
import { MergeProps, DispathProps, StateProps } from './types'
import { Questionnaire } from 'types/questionnaire'
import Form from './Form'
import Result from './Result'

export type FromEnqueteDispathProps = DispathProps
export type FromEnqueteStateProps = StateProps

type TabNameTypes = 'edit' | 'answer'

const FormEnquete: React.FC<MergeProps> = ({
  questionnaire,
  answerSummary,
  readQuestionnaire,
  readAnswerSummary,
  match,
}) => {
  const [isModal, setModal] = useState(false)
  const [isSubModal, setSubModal] = useState(false)
  const [tabName, setTabName] = useState('edit')
  const [copyText, setCopyText] = useState('')
  useEffect(() => {
    if (match.params.id) {
      readQuestionnaire(match.params.id)
      readAnswerSummary(match.params.id)
    }
  }, [readQuestionnaire, readAnswerSummary, match.params.id])

  const handleChangeTab = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setTabName(event.currentTarget.id as TabNameTypes)
  }
  const showModal = () => {
    setModal(true)
  }
  const hideModal = () => {
    setModal(false)
  }
  const showSubModal = () => {
    setSubModal(true)
  }
  const hideSubModal = () => {
    setSubModal(false)
  }
  const handleCopyUrl = () => {
    const copyUrl = window.location.href
    const inputElem = document.createElement('input')
    document.body.appendChild(inputElem)
    inputElem.value = copyUrl
    inputElem.select()
    const msg = document.execCommand('copy')
      ? 'コピーしました'
      : 'コピーできませんでした'
    showSubModal()
    setCopyText(msg)
    document.body.removeChild(inputElem)
    setTimeout(() => {
      hideSubModal()
    }, 1800)
  }
  const initialValues: Questionnaire = {
    question_data: {
      questions: [
        {
          choices: [
            {
              choice_uuid: null,
              choice_title: null,
            },
          ],
          required: false,
          question_type: null,
          question_uuid: null,
          question_title: null,
        },
      ],
    },
    answer_limit_status: 'unlimited',
    finish_body:
      'この度はエントリーいただき誠にありがとうございました。\nエントリーが無事、完了いたしました。',
    answer_count: 0,
    show_status: true,
    show_start_datetime: new Date(),
    show_end_datetime: new Date(),
  }
  const TargetContent = () => {
    if (tabName === 'edit') {
      return <Form initialValues={initialValues} />
    } else if (tabName === 'answer') {
      return <Result answerSummary={answerSummary} />
    }
    return null
  }

  const EnqueteHeader = styled.div`
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.baseC};
    .title {
      padding: 16px;
      font-weight: bold;
      border-bottom: ${({ theme }) => theme.colors.baseA} solid 1px;
    }
    .support {
      display: flex;
      justify-content: flex-end;
      margin-right: 24px;
      padding-top: 12px;
      padding-bottom: 14px;
      .assist {
        display: flex;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
        &:first-child {
          border-right: 1px solid ${({ theme }) => theme.colors.baseA};
          margin-right: 24px;
          padding-right: 24px;
        }
        svg {
          width: 24px;
          height: 24px;
          margin-right: 8px;
          fill: ${({ theme }) => theme.colors.mainC};
        }
      }
    }
  `
  const Tab = styled.ul`
      display: flex;
      align-items: stretch;
      margin-bottom: 16px;
      &:not(:first-child) {
        margin-top: 32px;
      }
      .item {
        flex: 0 0 50%;
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          padding: 17px 10px;
          background-color: ${({ theme }) => theme.colors.baseC};
          font-weight: bold;
          font-size: 14px;
          line-height: 1;
          transition: 0.2s;
          &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            background-color: transparent;
            content: '';
          }
          &.is-current {
            color:${({ theme }) => theme.colors.accentA}
            &::before {
              height: 4px;
              background-color:${({ theme }) => theme.colors.accentA}
            }
          }
        }
      }
    `
  const EnqueteModal = styled.div`
    .assist {
      display: flex;
      align-items: center;
      padding: 0 16px;
      font-weight: bold;
      cursor: pointer;
      svg {
        width: 24px;
        height: 24px;
        margin-right: 8px;
        fill: ${({ theme }) => theme.colors.mainC};
      }
    }
    .sharingList {
      margin-top: 16px;
      a {
        font-weight: bold;
      }
    }
    .sharingItem {
      margin-bottom: 16px;
      font-weight: bold;
    }
    .sharingExplan {
      border-top: 1px solid ${({ theme }) => theme.colors.baseA};
      margin-top: 20px;
      padding: 16px 16px 0;
      p {
        margin-bottom: ${({ theme }) => theme.margin * 2}px;
      }
    }
  `
  return (
    <React.Fragment>
      <PageHeader label="フォーム詳細" />
      <Content>
        {match.params.id && (
          <React.Fragment>
            <EnqueteHeader>
              <div className="title">{questionnaire?.title}</div>
              <ul className="support">
                <li className="assist" onClick={showModal}>
                  <Icon type="help" />
                  共有方法
                </li>
                <li className="assist" onClick={handleCopyUrl}>
                  <Icon type="assignment" />
                  URLをコピー
                </li>
              </ul>
            </EnqueteHeader>
            <Tab>
              <li className="item">
                <button
                  className={tabName === 'edit' ? 'is-current' : ''}
                  onClick={handleChangeTab}
                  id="edit"
                >
                  編集
                </button>
              </li>
              <li className="item">
                <button
                  className={tabName === 'answer' ? 'is-current' : ''}
                  onClick={handleChangeTab}
                  id="answer"
                >
                  回答
                </button>
              </li>
            </Tab>
          </React.Fragment>
        )}
        <TargetContent />
      </Content>
      <Modal onHideModal={hideModal} show={isModal}>
        <EnqueteModal>
          <div className="assist">
            <Icon type="help" />
            フォームの共有方法
          </div>
          <div className="sharingExplan">
            <p>
              作成したフォームはURLをコピーして貼り付けることで共有できます。
            </p>
            <p>共有方法は2通りあります。</p>
            <div className="sharingList">
              <p className="sharingItem">1.URLをコピーして記事内に埋め込む</p>
              <span className="sharingItem">
                2.サイトのメニューにリンクを追加する
              </span>
              <br />
              メニュー管理 &gt; メニューを追加する &gt; リンクから設定できます。
            </div>
          </div>
        </EnqueteModal>
      </Modal>
      <SubModal show={isSubModal}>
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <defs>
              <linearGradient
                id="linear-gradient-search"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0.014" stopColor="#fb311a" />
                <stop offset="1" stopColor="#ff8e00" />
              </linearGradient>
            </defs>
            <g
              stroke="#707070"
              strokeWidth="1"
              opacity="0"
              fill="url(#linear-gradient-search)"
            ></g>
            <g>
              <path
                d="M58,82.213a1.122,1.122,0,0,1-.748-.289L49.337,74.35a1.092,1.092,0,1,1,1.52-1.568L58,79.632l13.532-13.29a1.092,1.092,0,0,1,1.52,1.568L58.768,81.948A1.3,1.3,0,0,1,58,82.213Z"
                transform="translate(-37.18 -50.109)"
                fill="url(#linear-gradient-search)"
              />
              <path
                d="M24,48A24,24,0,1,1,48,24,24.016,24.016,0,0,1,24,48ZM24,2.171A21.829,21.829,0,1,0,45.829,24,21.854,21.854,0,0,0,24,2.171Z"
                fill="url(#linear-gradient-search)"
              />
            </g>
          </svg>
        </div>
        <div className="emphasis">{copyText}</div>
      </SubModal>
    </React.Fragment>
  )
}

export default FormEnquete
