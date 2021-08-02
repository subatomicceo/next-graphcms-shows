import styled, {css} from 'styled-components'

import { FaThLarge, FaThList } from "react-icons/fa";

export const ToggleWrap = styled.div`
  display: flex;
`

// shared icon styles
const IconStyle = css`
  color: ${({isActive}) => isActive ? 'white' : 'black'};
  font-size: 1.5rem;
  margin: 0.5rem;
`

export const ListIcon = styled(FaThList)`
  ${IconStyle}
`

export const GridIcon = styled(FaThLarge)`
  ${IconStyle}
`
