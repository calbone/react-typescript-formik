import React, { useState, useCallback } from 'react'
import { useField, useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import styled from 'styled-components'
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
  const [startDate, setStartDate] = useState();
  const { setFieldValue } = useFormikContext()
  const [field] = useField(name)
  const { value, onChange, ...restField } = field
  // console.log("dayjs1", dayjs())
  // console.log("dayjs2", dayjs(undefined))
  const handleDateChange = useCallback(
    (date: Date) => {
      const startDate = date;
      console.log("startDate", startDate)
      const endDate = date;
      console.log("endDate", endDate)
      setFieldValue(name, date);
      // if(dayjs(endDate).isAfter(dayjs(startDate))) {
      //   setFieldValue(name, date);
      // } else {
      //   console.log("開始日時より後を選択してください。");
      // }
    },
    [name, setFieldValue]
  )
  return (
    <div className={className}>
      <div className="datePicker">
        <DatePicker
          selected={value}
          onChange={handleDateChange}
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
