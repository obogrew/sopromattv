import request from 'superagent'

const CALENDAR_ID = 'kfphl3gee0rku3hd5b6q093bik@group.calendar.google.com'
const API_KEY = 'AIzaSyAw05soKC9noFEzeNCzwHIJ-zpdVm_sL20'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.forEach((event) => {
          events.push({
            start: new Date(event.start.date || event.start.dateTime),
            end: new Date(event.end.date || event.end.dateTime),
            title: event.summary,
          })
        })
		callback(events)
      }
    })
}