import { FC, ReactNode } from 'react'
import { Grid, Heading } from 'theme-ui'

interface Props {
  children?: ReactNode
  title?: string
}

export const Page: FC<Props> = ({ children, title }) => {
  return (
    <Grid sx={ styles.container }>
      <Heading as="h1">{ title }</Heading>
      { children }
    </Grid>
  )
}

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: 1200,
    px: 4,
    py: 4,
    width: '100%',
  },
}
