import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

interface AccordionProps {
  title: string
  content: JSX.Element | JSX.Element[]
  className?: string
}

const AccordionComponent: React.FC<AccordionProps> = ({
  title,
  content,
  className,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [contentHeight, setHeight] = useState<number | undefined>(0)
  const contentRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    setHeight(contentRef.current?.offsetHeight)
  }, [])
  const toggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className={className}>
      <div className={`${isOpen ? 'is-open' : ''}`}>
        <div className="title" onClick={toggle}>
          {title}
        </div>
        <div className="content" style={{ height: isOpen ? contentHeight : 0 }}>
          <div className="inner" ref={contentRef}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
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
    .title {
      margin-bottom: 33px;
    }
    .inner {
      visibility: visible;
    }
  }
`

export default Accordion
