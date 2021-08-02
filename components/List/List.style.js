import styled from 'styled-components'

export const ListItemWrap = styled.div`
  align-items: center;
  border: 1px solid var(--gallery-grey);
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  transition: 150ms ease;
  width: 100%;

  &:first-child {
    border-radius: 10px 10px 0 0;
  }

  & > * {
    flex: 1;
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }

  :hover,
  :focus,
  :active {
    color: #000;
    background-color: var(--gallery-grey);
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  span {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
`

export const ListWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 100%;
`