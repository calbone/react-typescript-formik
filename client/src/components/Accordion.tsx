import React from 'react'
import styled from 'styled-components'

interface AccordionState {
  isOpen: boolean
  height: number
}

interface AccordionProps {
  title: string
  content: JSX.Element
  className?: string
}

class AccordionComponent extends React.Component<
  AccordionProps,
  AccordionState
> {
  constructor(props: AccordionProps) {
    super(props)
    this.state = {
      isOpen: false,
      height: 0
    }
  }
  contentRef = React.createRef<HTMLDivElement>()

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  componentDidMount() {
    if (this.contentRef.current) {
      this.setState({ height: this.contentRef.current.offsetHeight })
    }
  }

  render() {
    const { title, content, className } = this.props

    return (
      <div className={className}>
        <div className={`${this.state.isOpen ? 'is-open' : ''}`}>
          <div className="title" onClick={this.toggle}>
            {title}
          </div>
          <div
            className="content"
            style={{ height: this.state.isOpen ? this.state.height : 0 }}
          >
            <div className="inner" ref={this.contentRef}>
              {content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Accordion = styled(AccordionComponent)`
  .title {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: rotate(135deg);
      width: 8px;
      height: 8px;
      margin-top: -4px;
      border-top: 2px solid ${({ theme }) => theme.colors.mainC};
      border-right: 2px solid ${({ theme }) => theme.colors.mainC};
      content: '';
      transition: transform 0.3s;
    }
  }
  .content {
    overflow: hidden;
    transition: 0.3s;
  }

  .inner {
    visibility: hidden;
  }

  .is-open {
    .inner {
      visibility: visible;
    }
  }
`

export default Accordion
