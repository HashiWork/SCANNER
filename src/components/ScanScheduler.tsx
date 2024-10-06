import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment)

interface ScanEvent {
  id: number
  title: string
  start: Date
  end: Date
  assetId: number
}

const ScanScheduler: React.FC = () => {
  const [events, setEvents] = useState<ScanEvent[]>([
    {
      id: 1,
      title: 'Scan for example.com',
      start: new Date(2024, 2, 15, 10, 0),
      end: new Date(2024, 2, 15, 11, 0),
      assetId: 1
    },
    {
      id: 2,
      title: 'Scan for test.com',
      start: new Date(2024, 2, 16, 14, 0),
      end: new Date(2024, 2, 16, 15, 0),
      assetId: 2
    }
  ])

  const handleSelectEvent = (event: ScanEvent) => {
    alert(`Scan details for ${event.title}`)
    // Here you could open a modal or navigate to a detailed view of the scan
  }

  return (
    <div className="h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Scan Scheduler</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 100px)' }}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  )
}

export default ScanScheduler