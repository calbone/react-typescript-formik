import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { readQuestionnaire } from '../../stores/domain/form/actions/questionnaires'
import { readAnswerSummary } from '../../stores/domain/form/actions/answerSummary'
import { Questionnaire, AnswerSummary } from '../../stores/domain/form/type'
import Icon from '../../components/Icon'
import Content from '../../components/Content'
import PageHeader from '../../components/PageHeader'
// import Modal from '../../components/Modal'
// import SubModal from '../../components/SubModal'
import EnqueteForm from './EnqueteForm'
// import EnqueteResult from './EnqueteResult'

interface DispathProps {
  readQuestionnaire: (id: string) => void
  readAnswerSummary: (id: string) => void
}

interface StateProps {
  questionnaire: Questionnaire
  answerSummary: AnswerSummary
}

interface MergeProps
  extends DispathProps,
    StateProps,
    RouteComponentProps<{ id: string }> {}

interface LocalState {
  selectedTabName: 'edit' | 'answer'
  isModal: boolean
  isSubModal: boolean
  copyText: string
}

class FormEnquete extends React.Component<MergeProps, LocalState> {
  constructor(props: MergeProps) {
    super(props)
    this.state = {
      selectedTabName: 'edit',
      isModal: false,
      isSubModal: false,
      copyText: ''
    }
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.readQuestionnaire(this.props.match.params.id)
      this.props.readAnswerSummary(this.props.match.params.id)
    }
  }

  handleChangeTab = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.setState({
      selectedTabName: event.currentTarget.id as any
    })
  }
  showModal = () => {
    this.setState({ isModal: true })
  }
  hideModal = () => {
    this.setState({ isModal: false })
  }
  showSubModal = (copyText: string) => {
    this.setState({ isSubModal: true, copyText })
  }
  hideSubModal = () => {
    this.setState({ isSubModal: false })
  }
  handleCopyUrl = () => {
    const copyUrl = window.location.href
    const inputElem = document.createElement('input')
    document.body.appendChild(inputElem)
    inputElem.value = copyUrl
    inputElem.select()
    const msg = document.execCommand('copy')
      ? 'コピーしました'
      : 'コピーできませんでした'
    this.showSubModal(msg)
    document.body.removeChild(inputElem)
    setTimeout(() => {
      this.hideSubModal()
    }, 1800)
  }
  initialValues = {
    question_data: { questions: [] },
    answer_limit_status: 'unlimited',
    finish_body:
      'この度はエントリーいただき誠にありがとうございました。\nエントリーが無事、完了いたしました。',
    show_status: true,
    show_start_datetime: new Date(),
    show_end_datetime: new Date()
  }
  content = () => {
    if (this.state.selectedTabName === 'edit') {
      return <EnqueteForm />
    }
    // } else
    // if (this.state.selectedTabName === 'answer') {
    //   return <EnqueteResult answerSummary={this.props.answerSummary} />
    // }
  }
  render() {
    return (
      <React.Fragment>
        <PageHeader label="フォーム詳細" />
        <Content>
          {this.props.match.params.id && (
            <React.Fragment>
              <div className="p-formEnqueteHeader">
                <div className="p-formEnqueteHeader__title">
                  {this.props.questionnaire.title}
                </div>
                <ul className="p-formEnqueteHeader__support">
                  <li
                    className="p-formEnqueteHeader__assist"
                    onClick={this.showModal}
                  >
                    <Icon type="help" />
                    共有方法
                  </li>
                  <li
                    className="p-formEnqueteHeader__assist"
                    onClick={this.handleCopyUrl}
                  >
                    <Icon type="assignment" />
                    URLをコピー
                  </li>
                </ul>
              </div>
              <ul className="c-tabA">
                <li className="c-tabA__item">
                  <button
                    className={
                      this.state.selectedTabName === 'edit' ? 'is-current' : ''
                    }
                    onClick={this.handleChangeTab}
                    id="edit"
                  >
                    編集
                  </button>
                </li>
                <li className="c-tabA__item">
                  <button
                    className={
                      this.state.selectedTabName === 'answer'
                        ? 'is-current'
                        : ''
                    }
                    onClick={this.handleChangeTab}
                    id="answer"
                  >
                    回答
                  </button>
                </li>
              </ul>
            </React.Fragment>
          )}
          {this.content()}
        </Content>
        {/* <Modal onHideModal={this.hideModal} show={this.state.isModal}>
          <div className="p-formEnqueteModal">
            <div className="p-formEnqueteModal__assist">
              <Icon type="help" />
              フォームの共有方法
            </div>
            <div className="p-formEnqueteModal__sharingExplan">
              <p>
                作成したフォームはURLをコピーして貼り付けることで共有できます。
              </p>
              <p>共有方法は2通りあります。</p>
              <div className="p-formEnqueteModal__sharingList">
                <p className="p-formEnqueteModal__sharingItem">
                  1.URLをコピーして記事内に埋め込む
                </p>
                <span className="p-formEnqueteModal__sharingItem">
                  2.サイトのメニューにリンクを追加する
                </span>
                <br />
                メニュー管理 &gt; メニューを追加する &gt;
                リンクから設定できます。
                <br />
                設定は<a href="/club/dashboard/menu_links/new">こちら</a>
              </div>
            </div>
          </div>
        </Modal>
        <SubModal
          onHideSubModal={this.hideSubModal}
          show={this.state.isSubModal}
        >
          <div className="p-subModal__icon">
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
          <div className="p-subModal__emphasis">{this.state.copyText}</div>
        </SubModal> */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any): StateProps => {
  return {
    questionnaire: state.questionnaires.questionnaire,
    answerSummary: state.answerSummary.answerSummary
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispathProps => ({
  readQuestionnaire: id => dispatch(readQuestionnaire(id)),
  readAnswerSummary: id => dispatch(readAnswerSummary(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormEnquete)
