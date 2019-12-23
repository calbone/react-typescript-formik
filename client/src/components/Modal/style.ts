import { css } from 'styled-components'

const ModalStyle = css`
  display: none;
  justify-content: center;
  align-items: center;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  transition: 0.4s;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(26, 26, 26, 0.8);
    cursor: pointer;
  }
  .inner {
    opacity: 0;
    position: relative;
    z-index: 2;
    transform: translateY(-50px);
    width: 720px;
    max-width: 96%;
    max-height: 96%;
    padding: 24px 32px 32px;
    border-radius: 2px;
    overflow-y: scroll;
    background-color: #fff;
    transition: 0.3s;
  }
  &.fade-enter {
    display: flex;
  }
  &.fade-enter-active {
    opacity: 1;
    .inner {
      opacity: 1;
      transform: translateY(0);
    }
  }
  &.fade-enter-done {
    display: flex;
    opacity: 1;
    .inner {
      opacity: 1;
      transform: translateY(0);
    }
  }
  &.fade-exit {
    display: flex;
  }
  &.fade-exit-active {
    display: flex;
  }
  &.fade-exit-done {
    display: none;
  }
`

export default ModalStyle
