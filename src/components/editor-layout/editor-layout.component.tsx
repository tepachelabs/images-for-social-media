import { FC, ReactNode } from 'react'
import { Box, Flex, Text, ThemeUIStyleObject } from 'theme-ui'

interface Props {
  children: ReactNode
  editorBody: ReactNode,
}

export const EditorLayout: FC<Props> = ({ children, editorBody }) => {
  return (
    <Flex sx={ styles.frame }>
      <Box sx={ styles.editor }>
        { editorBody }
      </Box>
      <Box sx={ styles.preview }>
        { children }
        <Text sx={ styles.caption }>* Click to generate the image and download it.</Text>
      </Box>
    </Flex>
  )
}

const styles: Record<string, ThemeUIStyleObject> = {
  frame: {
    flexDirection: ['column', 'column', 'row'],
    gap: 4,
    width: '100%',
  },
  editor: {
    backgroundColor: 'white',
    borderRadius: 5,
    flex: 1,
    p: 4,
  },
  preview: {
    alignItems: 'flex-start',
    position: 'relative',
    aspectRatio: 1,
    width: 500,
  },
  caption: {
    display: 'block',
    pt: 2,
  },
}
