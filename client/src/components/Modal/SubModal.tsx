import * as React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import ModalStyle from './style'

interface SubModalProps {
  className?: string
  show: boolean
}

const SubModalComponent: React.FC<SubModalProps> = ({
  className,
  show,
  children
}) => {
  return (
    <CSSTransition in={show} classNames="fade" timeout={400}>
      <div className={className}>
        <div className="overlay"></div>
        <div className="inner">{children}</div>
      </div>
    </CSSTransition>
  )
}

const styledSubModal = styled(SubModalComponent)`
  ${ModalStyle}
  .icon {
    width: 48px;
    margin: 0 auto 24px;
  }
`

export default styledSubModal
