import type { Theme } from 'theme-ui'

export const theme: Theme = {
  config: {
    useColorSchemeMediaQuery: 'system',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    modes: {
      dark: {
        text: '#ccc',
        background: '#222',
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 'auto',
      gap: 2,
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
}
