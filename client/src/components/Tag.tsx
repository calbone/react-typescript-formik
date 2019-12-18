import * as React from 'react'
import styled from 'styled-components'

interface TagProps {
  status: boolean
}

const TagWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`
const TagInner = styled.div<TagProps>`
  padding: 6px;
  font-size: 12px;
  line-height: 1;
  border: 1px solid;
  background-color: transparent;
  color: ${({ status }) =>
    status
      ? ({ theme }) => theme.colors.accentC
      : ({ theme }) => theme.colors.mainD};
  border-color: ${({ status }) =>
    status
      ? ({ theme }) => theme.colors.accentC
      : ({ theme }) => theme.colors.mainD};
`

const Tag: React.FC<TagProps> = ({ status }) => {
  return (
    <TagWrapper>
      <TagInner status={status}>{status ? '公開中' : '非公開'}</TagInner>
    </TagWrapper>
  )
}

export default Tag
