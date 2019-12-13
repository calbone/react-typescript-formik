import * as React from 'react'
import styled from 'styled-components'

interface TagProps {
  status: boolean
}

const TagWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: -12px;
  margin-right: -12px;
`
const TagInner = styled.div`
  margin-top: 12px;
  margin-right: 12px;
  padding: 6px;
  font-size: 12px;
  line-height: 1;
  border: 1px solid;
  background-color: transparent;
  color: ${props => (props ? '#00cc4b' : '#111')};
  border-color: ${props => (props ? '#00cc4b' : '#b9b9b9')};
`

const Tag: React.FC<TagProps> = ({ status }) => {
  return (
    <TagWrapper>
      <TagInner>{status ? '公開中' : '非公開'}</TagInner>
    </TagWrapper>
  )
}

export default Tag
