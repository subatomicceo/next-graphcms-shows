import Layout from '@c/Layout'
import styled from 'styled-components'

const ErrorWrap = styled.div`
  text-align: center;
`
const ErrorTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
`

function Error({ statusCode }) {
  return (<Layout>
    <ErrorWrap>
      {statusCode
        ? statusCode === 404 ? <><ErrorTitle>404</ErrorTitle> <p>Nothing to see here!</p></> : `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </ErrorWrap>
  </Layout>)
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error