import styled from 'styled-components'

export const ListItemWrap = styled.div`
  align-items: center;
  border: 1px solid var(--gallery-grey);
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.5rem;
  text-align: center;
  text-decoration: none;
  transition: 150ms ease;
  width: 100%;

  &:first-child {
    border-radius: 10px 10px 0 0;
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
    flex: 2;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    flex: 2;
  }

  b {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    flex: 0.5;
  }

  span {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.5;
    flex: 1;
  }

  /* large screens */
  @media (min-width: 600px) {
    flex-direction: row;
    text-align: left;
  }
`

export const ListWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem auto;
  width: 100%;
`