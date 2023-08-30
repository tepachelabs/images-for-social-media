'use client'

import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import ReactMarkdown, { Components } from 'react-markdown'
import {
  Box,
  Image as TuiImage,
  ThemeUIStyleObject,
  Text,
  Label,
  Textarea,
  Grid,
  Paragraph,
  Slider,
  Input, Checkbox, Switch,
} from 'theme-ui'

import { Canvas } from '~/components/canvas'
import { EditorLayout } from '~/components/editor-layout/editor-layout.component'
import { useImageLoader } from '~/components/image-loader'
import { Page } from '~/components/page'

import background from './img/pozoletv-background.png'
import frame from './img/pozoletv-frame.png'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '800',
})

interface Fields {
  showText: boolean
  text: string
  fontSize: number
  lineHeight: number
  padding: number
}

const defaultValues: Fields = {
  showText: true,
  text: 'Markdown is **supported**.',
  fontSize: 5,
  lineHeight: 1.2,
  padding: 32,
}

export default function Home () {
  const { backgroundImage, Component: ImageLoader } = useImageLoader()
  const [fields, setField] = useState<Fields>({ ...defaultValues })

  // Gets data, creates an actual image object
  const image = useMemo(() =>
    backgroundImage ? URL.createObjectURL(backgroundImage) : null,
  [backgroundImage],
  )

  // Markdown directives
  const components = useMemo<Components>(() => {
    const commonStyles = {
      fontWeight: 800, // hardcoded by style
      fontSize: fields.fontSize,
      lineHeight: fields.lineHeight,
    }

    return {
      p: (props) => (
        <Text sx={ {
          ...commonStyles,
          paddingLeft: `${ fields.padding }px`,
        } }>{ props.children }</Text>
      ),
      strong: (props) => (
        <Text sx={ {
          ...commonStyles,
          color: '#ef483e',
        } }>{ props.children }</Text>
      ),
    }
  }, [fields.fontSize, fields.lineHeight, fields.padding])

  // When a parameter is adjusted, we want to update the fields
  function onChange<T> (field: keyof Fields, value: T) {
    let newValue: T = value

    if (field === 'showText') {
      setField({ ...fields, [field]: newValue as boolean })
    } else if (field !== 'text') {
      setField({
        ...fields,
        [field]: newValue ? parseInt(newValue as string, 10) : defaultValues[field],
      })
    } else {
      setField({ ...fields, [field]: newValue as string })
    }
  }

  // The canvas. All imagery goes here
  const canvasRenderer = () => (
    <Canvas>
      { image && (
        <TuiImage
          sx={ styles.overlapped }
          as={ Image }
          src={ image }
          width={ 500 }
          height={ 500 }
          alt="frame"
        />
      ) }
      { fields.showText && (
        <TuiImage
          sx={ styles.overlapped }
          as={ Image }
          src={ background as any }
          width="100%"
          height="100%"
          alt="background"
        />
      ) }
      <TuiImage
        sx={ styles.overlapped }
        as={ Image }
        src={ frame as any }
        width="100%"
        height="100%"
        alt="frame"
      />
      { fields.showText && (
        <Box sx={ styles.floating }>
          <ReactMarkdown components={ components }>
            { fields.text }
          </ReactMarkdown>
        </Box>
      ) }
    </Canvas>
  )

  // The editor. All inputs go here
  const editorRenderer = () => (
    <Grid sx={ styles.editor }>
      <Box>
        <Label pb={ 2 }>Background image:</Label>
        <ImageLoader/>
      </Box>
      <Box>
        <Switch
          label="Show text"
          checked={ fields.showText }
          onChange={ (e) => onChange('showText', e.target.checked) }
        />
      </Box>
      <Box>
        <Label pb={ 2 }>Content:</Label>
        <Textarea
          value={ fields.text }
          rows={ 3 }
          onChange={ (e) => onChange('text', e.target.value) }
          disabled={ !fields.showText }
        />
      </Box>
      <Box sx={ styles.inlineField }>
        <Label pb={ 2 }>Font size:</Label>
        <Slider
          min={ 4 }
          max={ 8 }
          value={ fields.fontSize }
          onChange={ (e) => onChange('fontSize', e.target.value) }
          disabled={ !fields.showText }
        />
      </Box>
      <Box sx={ styles.inlineField }>
        <Label pb={ 2 }>Line height:</Label>
        <Slider
          min={ 100 }
          max={ 200 }
          step={ 10 }
          value={ fields.lineHeight * 100 }
          onChange={ (e) =>
            // Custom updater because the value is pre-processed
            setField({
              ...fields,
              lineHeight: e.target.value ? parseInt(e.target.value) / 100 : defaultValues.lineHeight,
            }) }
          disabled={ !fields.showText }
        />
      </Box>
      <Box sx={ styles.inlineField }>
        <Label pb={ 2 }>Padding:</Label>
        <Slider
          min={ 0 }
          max={ 100 }
          step={ 8 }
          value={ fields.padding }
          onChange={ (e) => onChange('padding', e.target.value) }
          disabled={ !fields.showText }
        />
      </Box>
    </Grid>
  )

  return (
    <Page title="PozoleTV facts">
      <EditorLayout
        elements={ [
          { id: 'canvas', Component: canvasRenderer() },
          { id: 'editor', Component: editorRenderer() },
        ] }
      />
    </Page>
  )
}

const styles: Record<string, ThemeUIStyleObject> = {
  editor: {
    gap: 3,
    p: 4,
  },
  overlapped: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  floating: {
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    left: '3em',
    display: 'flex',
    width: '21em',
    height: '100%',
    textAlign: 'left',
    zIndex: 4,
  },
  copy: {
    fontFamily: openSans.style.fontFamily,
    fontSize: 24,
    fontWeight: 800,
  },
  inlineField: {
    display: 'inline-flex',
  },
}
