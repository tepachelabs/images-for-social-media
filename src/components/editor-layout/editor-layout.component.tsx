import { FC, ReactNode } from 'react'
import { Box, ThemeUIStyleObject } from 'theme-ui'

interface Props {
  elements: Element[],
  children?: React.ReactNode
}

interface Element {
  id: string,
  Component: ReactNode,
}

export const EditorLayout: FC<Props> = ({ children, elements }) => {
  return (
    <Box sx={ styles.frame }>
      { elements.map((element) => (
        <Box key={ element.id } sx={ styles.side }>
          { element.Component }
        </Box>
      )) }

      { children }
    </Box>
  )
}

const styles: Record<string, ThemeUIStyleObject> = {
  frame: {
    display: 'flex',
    gap: 4,
    width: '100%',
  },
  side: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'rgba(45, 45, 45, 0.45)',
    position: 'relative',
    aspectRatio: 1,
    width: '50%',
  },
}
