import { toPng } from 'html-to-image'
import html2canvas from 'html2canvas'
import { FC, useRef, useState } from 'react'
import { Box, Button, Card, Heading, ThemeUIStyleObject } from 'theme-ui'

interface Props {
  children?: React.ReactNode
}

export const Canvas: FC<Props> = ({ children }) => {
  const canvas = useRef<HTMLDivElement>(null)

  function onClick () {
    if (!canvas.current) {
      return
    }

    html2canvas(canvas.current)
      .then(function (canvas) {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = canvas.toDataURL()
        link.click()
      })
      .catch((err) => {
        console.log(err)
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
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
}
