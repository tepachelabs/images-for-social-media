'use client'

import Image from 'next/image'
import { Box, Card, Image as TuiImage, Link, Paragraph, Text } from 'theme-ui'

import pozoleTvFactsThumbnail from '~/components/images/pozole-tv-facts.png'
import { Page } from '~/components/page'

const menuItems = [
  {
    title: 'PozoleTV Facts',
    href: '/pozole-tv-facts',
    thumbnail: pozoleTvFactsThumbnail,
  },
]

export default function Home () {
  return (
    <Page title="Generate images for social media">
      <Paragraph>
        Select one of the templates available:
      </Paragraph>

      <Box>
        { menuItems.map((item) => (
          <Link href="/pozole-tv-facts" key={ item.href }>
            <Card>
              <TuiImage
                as={ Image }
                src={ item.thumbnail as any }
                width={ 180 }
                height={ 180 }
                alt="frame"
              />
              <Text>{item.title}</Text>
            </Card>
          </Link>
        )) }
      </Box>
    </Page>
  )
}
