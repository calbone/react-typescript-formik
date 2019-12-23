import * as React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import ModalStyle from './style'

interface ModalProps {
  className?: string
  onHideModal: () => void
  show: boolean
}

const ModalComponent: React.FC<ModalProps> = ({
  className,
  onHideModal,
  show,
  children
}) => {
  return (
    <CSSTransition in={show} classNames="fade" timeout={400}>
      <div className={className}>
        <div className="overlay" onClick={onHideModal}></div>
        <div className="inner">
          <button type="button" className="close" onClick={onHideModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M628.3,1489.11l-4.89,4.89,4.89,4.89a1,1,0,0,1-1.41,1.41l-4.89-4.89-4.89,4.89a1,1,0,0,1-1.41-1.41l4.89-4.89-4.89-4.89a1,1,0,1,1,1.41-1.41l4.89,4.89,4.89-4.88a.993.993,0,0,1,1.41,1.4Z"
                transform="translate(-610 -1482)"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </CSSTransition>
  )
}

const styledModal = styled(ModalComponent)`
  ${ModalStyle}
  .close {
    position: absolute;
    top: 24px;
    right: 32px;
    svg {
      display: block;
      width: 24px;
    }
    path {
      fill: $color-main-c;
    }
  }
`

export default styledModal
