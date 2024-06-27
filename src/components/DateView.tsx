import React from 'react'

// Assets
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg'
import { twMerge } from 'tailwind-merge'

type DateProps = {
  date: string,
  time?: string,
  lg?: boolean
}

const DateView: React.FC<DateProps> = ({ date, time, lg = false }) => {
  const _d = new Date(date)
  const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = months[_d.getMonth()]
  const day = _d.getDate()
  const year = _d.getFullYear()
  return (
    <div className="flex items-center gap-x-2">
    <CalendarIcon />
    <p className={twMerge("description2 text-tertiary-100", lg ? "text-base" : "text-xs")}>
      {`${month} ${day}, ${year}`} {time ? "|" : ""} {time}
    </p>
  </div>
  )
}

export default DateView