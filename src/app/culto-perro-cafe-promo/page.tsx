'use client'

import { Oswald, Raleway } from 'next/font/google'
import { useMemo, useState } from 'react'
import ReactMarkdown, { Components } from 'react-markdown'
import {
  Box,
  ThemeUIStyleObject,
  Text,
  Label,
  Textarea,
  Grid,
  Paragraph,
  Input,
  Select, Checkbox, Switch, Flex,
} from 'theme-ui'

import { Canvas } from '~/components/canvas'
import { EditorLayout } from '~/components/editor-layout'
import { useImageLoader } from '~/components/image-loader'
import { Page } from '~/components/page'

import { BackgroundComponent, Variant } from './background.component'
import { black, green, orange, white, yellow } from './colors'
import { BookIconComponent } from './img/book.component'
import { IconSkullComponent } from './img/icon-skull.component'

const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

interface Fields {
  variant: Variant
  icon: 'book' | 'heartSkull'
  header: string
  content: string
  bubble: string
  isBubbleContentCompact: boolean
}

const defaultValues: Fields = {
  variant: 'green',
  icon: 'heartSkull',
  header: 'Line one\n\nLine two',
  content: '# Header\n\nBold is **supported**. _Italic_ too.',
  bubble: '2x1',
  isBubbleContentCompact: false,
}

const icons = {
  book: BookIconComponent,
  heartSkull: IconSkullComponent,
}

export default function Home () {
  const [fields, setField] = useState<Fields>({ ...defaultValues })

  // Markdown directives for the header (the one with the lines)
  const headerComponents = useMemo<Components>(() => {
    return {
      p: (props) => (
        <Paragraph sx={ styles.headerParagraph }>
          { props.children }
        </Paragraph>
      ),
    }
  }, [])

  // When a parameter is adjusted, we want to update the fields
  function onChange<T> (field: keyof Fields, value: T) {
    if (field === 'isBubbleContentCompact') {
      setField({ ...fields, [field]: value as boolean })
    } else {
      setField({ ...fields, [field]: value as string })
    }
  }

  const Icon = useMemo(() => icons[fields.icon], [fields.icon])

  // The editor. All inputs go here
  const editorRenderer = () => (
    <Grid sx={ styles.editor }>
      <Box>
        <Label pb={ 2 }>Variant:</Label>
        <Select
          onChange={ (e) => onChange('variant', e.target.value) }
        >
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </Select>
      </Box>
      <Box>
        <Label pb={ 2 }>Icon:</Label>
        <Select
          value={ fields.icon }
          onChange={ (e) => onChange('icon', e.target.value) }
        >
          <option value="book">Book</option>
          <option value="heartSkull">Heart skull</option>
        </Select>
      </Box>
      <Box>
        <Label pb={ 2 }>Heading:</Label>
        <Textarea
          value={ fields.header }
          rows={ 3 }
          onChange={ (e) => onChange('header', e.target.value) }
        />
      </Box>
      <Box>
        <Label pb={ 2 }>Content:</Label>
        <Textarea
          value={ fields.content }
          rows={ 4 }
          onChange={ (e) => onChange('content', e.target.value) }
        />
      </Box>
      <Box>
        <Label pb={ 2 }>Bubble:</Label>
        <Input
          value={ fields.bubble }
          onChange={ (e) => onChange('bubble', e.target.value) }
        />
      </Box>
      <Box>
        <Switch
          label="Tweak bubble content"
          checked={ fields.isBubbleContentCompact }
          onChange={ (e) => onChange('isBubbleContentCompact', e.target.checked) }
        />
      </Box>
    </Grid>
  )

  return (
    <Page title="Culto Perro Cafe - Promo">
      <EditorLayout
        editorBody={ editorRenderer() }
      >
        <Canvas>
          <Box sx={ styles.fullSize }>
            <BackgroundComponent variant={ fields.variant }/>
          </Box>
          <Box sx={ styles.icon }>
            <Icon/>
          </Box>
          <Box sx={ styles.header }>
            <ReactMarkdown components={ headerComponents }>
              { fields.header }
            </ReactMarkdown>
          </Box>
          <Text sx={ {
            ...styles.bubble,
            right: fields.isBubbleContentCompact ? 72 : 84,
          } }>{ fields.bubble }</Text>
          <Box sx={ styles.contentWrapper }>
            <ReactMarkdown components={ contentComponents }>
              { fields.content }
            </ReactMarkdown>
          </Box>
        </Canvas>
      </EditorLayout>
    </Page>
  )
}

// Markdown directives for the content (the one within the big box)
const contentComponents: Components = {
  p: (props) => (
    <Text sx={ styles.content }>{ props.children }</Text>
  ),
  strong: (props) => (
    <Text sx={ { ...styles.content, fontWeight: 700 } }>{ props.children }</Text>
  ),
  h1: (props) => (
    <Text sx={ { ...styles.contentHeader } }>{ props.children }</Text>
  ),
}

const styles: Record<string, ThemeUIStyleObject> = {
  editor: {
    gap: 3,
  },
  fullSize: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  icon: {
    position: 'absolute',
    top: 50,
    left: 70,
    height: 36,
    width: 36,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 174,
    left: 106,
    zIndex: 10,
    gap: 2,
  },
  headerParagraph: {
    color: '#222',
    fontFamily: oswald.style.fontFamily,
    fontSize: '40px',
    lineHeight: 1,
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '-0.5px',
    position: 'relative',
  },
  contentWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: '345px',
    left: '75px',
    display: 'flex',
    width: '64%',
    height: '100%',
    textAlign: 'left',
    zIndex: 4,
  },
  content: {
    color: black,
    fontFamily: raleway.style.fontFamily,
    lineHeight: 1.2,
    letterSpacing: '0.4px',
    fontSize: '14px',
  },
  contentHeader: {
    textTransform: 'uppercase',
    fontWeight: 700,
    borderBottom: '2px solid #222',
    width: 'fit-content',
    pb: '2px',
    mb: '4px',
  },
  bubble: {
    position: 'absolute',
    bottom: 142,
    fontSize: '36px',
    fontWeight: 900,
    color: black,
    fontFamily: oswald.style.fontFamily,
    zIndex: 1,
    letterSpacing: '2px',
  },
}
