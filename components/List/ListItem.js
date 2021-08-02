import { object } from 'prop-types'
import Link from 'next/link'

// styled components
import { ListItemWrap } from './List.style'

export const ListItem = ({show}) => {
  const { artists, scheduledStartTime, title, ticketPrice } = show

  // convert date to human readable
  const startDate = new Date(scheduledStartTime)
  const dateString = `${startDate.toDateString()} ${startDate.toTimeString()}`
  // convert arr to string with commas
  const artistsString = artists.map(artist => artist.fullName).join(', ')

  return (<Link href={`/show/${show.slug}`}>
    <ListItemWrap>
      <h3 title={title}>{title} &rarr;</h3>
      <p>{artistsString}</p>
      <p>${ticketPrice}</p>
      <span>{dateString}</span>
    </ListItemWrap>
  </Link>
  )
}

ListItem.propTypes = {
  show: object.isRequired
}