import { func, string } from 'prop-types'
import { TYPES } from './Toggle.consts'

// constants
const {
  grid,
  list
} = TYPES

// styled components
import { ListIcon, GridIcon, ToggleWrap } from './Toggle.style'

export const Toggle = ({ setToggle, toggle = grid }) => (
  <ToggleWrap>
    <GridIcon isActive={toggle === grid} onClick={() => setToggle(grid)}/>
    <ListIcon isActive={toggle === list} onClick={() => setToggle(list)}/>
  </ToggleWrap>
)

Toggle.propTypes = {
  setToggle: func,
  toggle: string.isRequired
}