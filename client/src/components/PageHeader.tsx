import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from './Icon'

type PageHeaderProps = {
  label: string
  to?: string
}

const PageHeaderComponent: React.FC<PageHeaderProps> = ({ label, to }) => {
  return (
    <PageHeader>
      <PageHeaderReturn to={to || '/'}>
        <Icon type="arrow" />
        戻る
      </PageHeaderReturn>
      <PageHeaderTitle>{label}</PageHeaderTitle>
    </PageHeader>
  )
}

const PageHeader = styled.div`
  position: relative;
  margin-bottom: 16px;
  padding: 12px 5em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
`
const PageHeaderReturn = styled(Link)`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.mainC};
  font-weight: bold;
  font-size: 12px;
  padding-left: 16px;
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(180deg);
    height: 10px;
    fill: ${({ theme }) => theme.colors.mainC};
  }
`
const PageHeaderTitle = styled.h2`
  font-size: 14px;
  line-height: 1.714;
`

export default PageHeaderComponent
