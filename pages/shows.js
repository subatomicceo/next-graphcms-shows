import { useState } from 'react'
import Layout from '@c/Layout'
import { Grid, Card } from '@c/Grid'
import { List } from '@c/List'
import { Title } from '@c/Title'
import { Toggle } from '@c/Toggle'
import { TYPES } from '@c/Toggle/Toggle.consts'
import { getAllShows } from '@l/graphcms'

// constants
const {
  grid,
  list
} = TYPES


export default function Shows({ shows }) {
  const [toggle, setToggle] = useState(grid)

  return (
    <Layout title="next-graphcms-shows / Shows">
      <Title>Shows</Title>

      <Toggle toggle={toggle} setToggle={setToggle} />

      {toggle === list ?
        <List shows={shows} />
        :
        <Grid>
          {shows.map(show => (
            <Card href={`/show/${show.slug}`} header={show.title} key={show.id}>
              <p>{show.artists.map(({ fullName }) => fullName).join(', ')}</p>
            </Card>
          ))}
        </Grid>
      }
    </Layout>
  )
}

export async function getServerSideProps() {
  const shows = (await getAllShows()) || []
  return {
    props: { shows },
  }
}
