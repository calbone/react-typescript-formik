import React, { useCallback } from 'react'
import { useField, useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import styled from 'styled-components/macro'
import 'react-datepicker/dist/react-datepicker.css'
dayjs.locale('ja')

interface DateCalendarProps {
  className?: string
  name: string
}

const DateCalendarComponent: React.FC<DateCalendarProps> = ({
  name,
  className,
}) => {
  const { setFieldValue } = useFormikContext()

  const [field] = useField(name)
  const { value, onChange, ...restField } = field

  const handleStartDateChange = useCallback(
    (date: Date) => {
      setFieldValue(name, date)
    },
    [name, setFieldValue]
  )
  return (
    <div className={className}>
      <div className="datePicker">
        <DatePicker
          selected={value}
          onChange={handleStartDateChange}
          dateFormat="yyyy/MM/dd HH:mm"
          timeFormat="HH:mm"
          showTimeSelect
          {...restField}
        />
      </div>
    </div>
  )
}

const StyledDateCalendar = styled(DateCalendarComponent)`
  .datePicker {
    margin-bottom: 8px;
    .react-datepicker-wrapper {
      position: relative;
      input {
        padding: 8px 56px 8px 14px;
        border: 1px solid ${({ theme }) => theme.colors.mainD};
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.baseC};
        line-height: 1.714;
        width: 100%;
      }
      &::after {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-width: 5px 5px 0;
        border-style: solid;
        border-color: ${({ theme }) => theme.colors.mainC} transparent
          transparent;
        pointer-events: none;
        content: '';
      }
    }
  }
`

export default StyledDateCalendar
