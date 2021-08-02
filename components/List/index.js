import { array } from 'prop-types'
import { ListItem } from './ListItem'

// styled components
import { ListWrap } from './List.style'

export const List = ({ shows }) => (
  <ListWrap>
    {shows.map((show) => <ListItem key={show.id} show={show} />)}
  </ListWrap>
)


List.propTypes = {
  shows: array.isRequired
}