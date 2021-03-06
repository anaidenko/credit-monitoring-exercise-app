import { FunctionComponent } from 'react'

import cn from 'classnames'
import { parseISO, format } from 'date-fns'

type Props = {
  className?: string
  value?: Date
  dateString?: string
  dateFormat?: string
}

const Date: FunctionComponent<Props> = ({ className, value, dateString, dateFormat = 'LLLL	d, yyyy' }: Props) => {
  const date = value || parseISO(dateString)
  const dateISO = value ? value.toISOString() : dateString
  return (
    <time dateTime={dateISO} className={cn('date', className)}>
      {format(date, dateFormat)}
    </time>
  )
}

export default Date
