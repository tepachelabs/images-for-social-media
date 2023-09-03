import { toPng } from 'html-to-image'
import html2canvas from 'html2canvas'
import { FC, useRef, useState } from 'react'
import { Box, Button, Card, Heading, ThemeUIStyleObject } from 'theme-ui'

interface Props {
  children?: React.ReactNode
  debug?: boolean
}

const canvasSize = 500

export const Canvas: FC<Props> = ({ children, debug }) => {
  const canvas = useRef<HTMLDivElement>(null)

  function onClick () {
    if (!canvas.current) {
      return
    }

    html2canvas(canvas.current, {
      windowWidth: canvasSize * 2,
      windowHeight: canvasSize * 2,
      scale: 4,
    }).then(canvas => {
      if (debug) {
        document.body.appendChild(canvas)
      } else {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = canvas.toDataURL()
        link.click()
      }
    })
  }

  return (
    <Box ref={ canvas } sx={ styles.canvas } onClick={ onClick }>
      { children }
    </Box>
  )
}

const styles: Record<string, ThemeUIStyleObject> = {
  canvas: {
    height: canvasSize,
    width: canvasSize,
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
  },
}
