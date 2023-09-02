'use client'

import Image from 'next/image'
import { Card, Flex, Image as TuiImage, Link, Paragraph, Text } from 'theme-ui'

import cpcInfoThumbnail from '~/app/culto-perro-cafe-info/thumbnail.png'
import pozoleTvFactsThumbnail from '~/app/pozole-tv-facts/thumbnail.png'
import { Page } from '~/components/page'

const menuItems = [
  {
    title: 'PozoleTV Facts',
    href: '/pozole-tv-facts',
    thumbnail: pozoleTvFactsThumbnail,
  },
  {
    title: 'CPC Info',
    href: '/culto-perro-cafe-info',
    thumbnail: cpcInfoThumbnail,
  },
]

export default function Home () {
  return (
    <Page title="Generate images for social media">
      <Paragraph>
        Select one of the templates available:
      </Paragraph>

      <Flex sx={ { gap: 4 } }>
        { menuItems.map((item) => (
          <Link href={ item.href } key={ item.href }>
            <Card>
              <TuiImage
                as={ Image }
                src={ item.thumbnail as any }
                width={ 180 }
                height={ 180 }
                alt="frame"
              />
              <Text>{ item.title }</Text>
            </Card>
          </Link>
        )) }
      </Flex>
    </Page>
  )
}
