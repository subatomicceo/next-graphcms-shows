import { object } from 'prop-types'
import Link from 'next/link'
import moment from 'moment'
import { truncateText } from '@l/utils'

// styled components
import { ListItemWrap } from './List.style'

export const ListItem = ({show}) => {
  const { artists, scheduledStartTime, title, ticketPrice } = show

  // convert date to human readable
  const dateString = moment(scheduledStartTime).format('MMMM Do YYYY, h:mm a');
  // convert arr to string with commas
  const artistsString = artists.map(artist => artist.fullName).join(', ')

  return (<Link href={`/show/${show.slug}`}>
    <ListItemWrap>
      <h3 title={title}>{truncateText(title, 22)} &rarr;</h3>
      <p>{artistsString}</p>
      <b>${ticketPrice}</b>
      <span>{dateString}</span>
    </ListItemWrap>
  </Link>
  )
}

ListItem.propTypes = {
  show: object.isRequired
}