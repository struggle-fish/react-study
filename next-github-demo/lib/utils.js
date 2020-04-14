import moment from 'moment'
export function getastUpdated(time) {
  return moment(time).fromNow()
}