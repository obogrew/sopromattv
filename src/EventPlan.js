import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

import {Calendar, momentLocalizer} from 'react-big-calendar'
// a localizer for BigCalendar
import "react-big-calendar/lib/css/react-big-calendar.css"
import { getEvents } from './gcal'


class EventPlan extends React.Component {
  
  localizer() {
    return momentLocalizer(moment);
  }

  convert = m => new Date(m.year(), m.month(), m.date(), m.hour(), m.minute());

  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }
  render () {
    return (
      // React Components in JSX look like HTML tags
      <Calendar
        style={{height: '420px'}}
        events={this.state.events}
    localizer={this.localizer()}
		defaultView="day"
		getNow={() => this.convert(moment())}
		toolbar={false}
      />
    )
  }
}

//render(<EventPlan />, document.getElementById('root'))

export default EventPlan;
