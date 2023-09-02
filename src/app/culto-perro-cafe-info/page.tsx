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
  Select,
} from 'theme-ui'

import { Canvas } from '~/components/canvas'
import { EditorLayout } from '~/components/editor-layout'
import { useImageLoader } from '~/components/image-loader'
import { Page } from '~/components/page'

import { BackgroundComponent, Variant } from './background.component'
import { green, orange, white, yellow } from './colors'
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
  title: string
  header: string
  content: string
  showLogo: boolean
}

const defaultValues: Fields = {
  variant: 'green',
  icon: 'book',
  title: 'Información',
  header: 'Line one\n\nLine two\n\nLine Three',
  content: 'Bold is **supported**. _Italic_ too.',
  showLogo: false,
}

const icons = {
  book: BookIconComponent,
  heartSkull: IconSkullComponent,
}

export default function Home () {
  const { backgroundImage, Component: ImageLoader } = useImageLoader()
  const [fields, setField] = useState<Fields>({ ...defaultValues })

  // Gets data, creates an actual image object
  const image = useMemo(() =>
    backgroundImage ? URL.createObjectURL(backgroundImage) : null,
  [backgroundImage],
  )

  // Markdown directives for the header (the one with the lines)
  const headerComponents = useMemo<Components>(() => {
    const boxOddBackground = fields.variant === 'orange' ? yellow : orange
    const boxDecorationBackground = fields.variant === 'green' ? yellow : green

    return {
      p: (props) => (
        <Paragraph sx={ {
          ...styles.headerParagraph,
          '&:nth-of-type(2)': {
            backgroundColor: boxOddBackground,
            top: '-2px',
          },
          '&:nth-of-type(3)': {
            top: '-4px',
          },
          '&:after': {
            content: '""',
          },
        } }>
          { props.children }
          <Box
            as="span"
            sx={ {
              ...styles.headerParagraphDecoration,
              backgroundColor: boxDecorationBackground,
            } }
          >
            <Box as="span" sx={ { ...styles.horizontalLine, top: '6px' } }/>
            <Box as="span" sx={ { ...styles.horizontalLine, bottom: '4px' } }/>
            <Box as="span" sx={ { ...styles.horizontalLine, bottom: '9px' } }/>
          </Box>
        </Paragraph>
      ),
    }
  }, [fields.variant])

  // When a parameter is adjusted, we want to update the fields
  function onChange<T> (field: keyof Fields, value: T) {
    let newValue: T = value

    if (field === 'showLogo') {
      setField({ ...fields, [field]: newValue as boolean })
    } else {
      setField({ ...fields, [field]: newValue as string })
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
        <Label pb={ 2 }>Title:</Label>
        <Input
          value={ fields.title }
          onChange={ (e) => onChange('title', e.target.value) }
        />
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
    </Grid>
  )

  return (
    <Page title="Culto Perro Cafe - Info">
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
          <Text sx={ styles.title }>{ fields.title }</Text>
          <Box sx={ styles.header }>
            <ReactMarkdown components={ headerComponents }>
              { fields.header }
            </ReactMarkdown>
          </Box>
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
  title: {
    position: 'absolute',
    top: 64,
    left: 128,
    fontSize: '19px',
    fontWeight: 900,
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: raleway.style.fontFamily,
    zIndex: 1,
    letterSpacing: '1px',
  },
  horizontalLine: {
    position: 'absolute',
    right: 0,
    height: '2.2px',
    width: '100%',
    zIndex: -1,
    backgroundColor: '#222',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 94,
    left: 60,
    zIndex: 10,
  },
  headerParagraph: {
    color: '#222',
    fontFamily: oswald.style.fontFamily,
    fontSize: '40px',
    lineHeight: 1,
    textTransform: 'uppercase',
    fontWeight: 700,
    backgroundColor: white,
    border: '2.2px solid #222',
    padding: '8px 20px 11px',
    borderRadius: '8px',
    letterSpacing: '-0.5px',
    position: 'relative',
  },
  headerParagraphDecoration: {
    border: '2.2px solid #222',
    borderRadius: '8px',
    position: 'absolute',
    top: '-2px',
    right: '-20px',
    height: 'calc(100% + 4px)',
    width: '32px',
    zIndex: -1,
    content: '""',
  },
  contentWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: '66%',
    left: '17.5%',
    display: 'flex',
    width: '64%',
    height: '100%',
    textAlign: 'left',
    zIndex: 4,
  },
  content: {
    color: '#222',
    fontFamily: raleway.style.fontFamily,
    lineHeight: 1.2,
    letterSpacing: '0.4px',
    fontSize: '14px',
  },
}
