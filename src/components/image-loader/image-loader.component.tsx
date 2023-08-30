import { FC, ReactNode, useRef, useState } from 'react'
import { Box, Button, Input } from 'theme-ui'

interface Props {
  children?: ReactNode
  title?: string
  onChange?: (fileList?: FileList | null) => void
}

export const useImageLoader = () => {
  const [backgroundImage, setBackgroundImage] = useState<MediaSource | null>()
  const $input = useRef<HTMLInputElement>(null)

  const imageChange = (fileList?: FileList | null) => {
    if (fileList && fileList.length > 0) {
      setBackgroundImage(fileList[0] as unknown as MediaSource)
    }
  }

  const removeSelectedImage = () => {
    if ($input.current) {
      $input.current.value = ''
    }
    setBackgroundImage(null)
  }

  const Component: FC<Props> = () => (
    <Box sx={ styles.container }>
      <Input
        ref={ $input }
        accept="image/*"
        type="file"
        onChange={ (event) => imageChange(event.target.files) }
      />

      { backgroundImage && (
        <Button onClick={ removeSelectedImage } sx={ styles.cta }>Remove</Button>
      ) }
    </Box>
  )

  return {
    Component,
    backgroundImage,
  }
}

const styles = {
  container: {
    display: 'flex',
    gap: '16px',
    width: '100%',
  },
  cta: {
    minWidth: 'auto',
  },
}
