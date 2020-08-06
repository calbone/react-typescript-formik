import React, { useState } from 'react'
import { useField } from 'formik'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'

interface DateCalendarProps {
  className?: string
  name: string
}

const DateCalendarComponent: React.FC<DateCalendarProps> = ({
  name,
  className,
}) => {
  const [field] = useField(name)
  const [startDate] = useState(new Date())
  return (
    <div className={className}>
      <div className="datePicker">
        <DatePicker selected={startDate} {...field} />
      </div>
    </div>
  )
}

const StyledDateCalendar = styled(DateCalendarComponent)`
  .datePicker {
    display: flex;
    align-items: center;
    /* position: relative; */
    /* .react-datepicker-wrapper {
      display: block;
      width: 100%;
    } */
    input {
      width: 100%;
      padding: 8px 56px 8px 14px;
      border: 1px solid ${({ theme }) => theme.colors.mainD};
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.baseC};
      line-height: 1.714;
    }
    &::after {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-width: 5px 5px 0;
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.mainC} transparent transparent;
      pointer-events: none;
      content: '';
    }
  }
`

export default StyledDateCalendar