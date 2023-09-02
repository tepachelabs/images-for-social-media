import { FC, useMemo } from 'react'

import { coral, green, orange, white, yellow } from '../colors'

export type Variant = 'green' | 'yellow' | 'orange'

interface Props {
  variant?: Variant
}

const colorSchemes: Record<Variant, {
  background: string
  contrast: string
}> = {
  yellow: {
    background: yellow,
    contrast: orange,
  },
  orange: {
    background: orange,
    contrast: yellow,
  },
  green: {
    background: green,
    contrast: orange,
  },
}

export const BookIconComponent: FC<Props> = ({
  variant = 'green',
}) => {
  const colorScheme = useMemo(() => colorSchemes[variant], [variant])

  return (
    <svg viewBox="0 0 62.18 80.2" style={{ height: '100%' }}>
      <g id="iconos">
        <path d="m57.64,55.98v8.64c0,1.42-1.05,2.58-2.34,2.58h-23.36c-.24.12-.49.21-.75.21-.11,0-.23-.01-.34-.04-.11.02-.22.04-.34.04-.26,0-.52-.09-.75-.21H6.06c-1.29,0-2.34-1.16-2.34-2.58v-8.9s0,0,0,0c-.04-.03-.08-.06-.11-.1l-.12,17.11,8.85-.13,11.46-.04h0c.74,0,1.41.47,1.65,1.18.11.29,1.19,2.99,4.72,2.99h.32c3.76,0,5.39-3.08,5.45-3.21.3-.59.92-.96,1.6-.96l11.55.3,9.59-.27-.23-17.84c-.07.53-.37.98-.82,1.23Z"
          style={{ fill: 'none', strokeWidth: 0 }}/>
        <path d="m7.59,16.03c-.44,0-.94.02-1.34.08.1,1.56.15,4.46.16,7.73,2.01.99,3.93,2.12,5.58,3.71.18.19.42.46.63.64.95.68,1.62,2.08,2.72,2.84,1.02.89,2.09,1.73,3.21,2.48.91.61.03,2.01-.91,1.46-1.19-.7-2.4-1.34-3.63-1.98-.74-.5-1.66-.75-2.51-1.16.14.72.27,1.44.34,2.16.04,1.57-.17,3.05-.46,4.56-.11.57-.67.94-1.24.82-.49-.1-.83-.52-.84-1-.08-1.21-.08-3.55-.35-4.68-.32-1.13-.67-2.27-1.05-3.38-.12-.52-.4-1.13-.64-1.73-.28-.2-.56-.4-.84-.59-.02,5.21-.12,10.32-.22,11.78-.21,2.94.12,10.44.27,13.43,2.39.54,7.75,1.81,12.17,3.34,3.71,1.28,7.71,3.96,10.27,5.85.08-5.55.22-16.31.24-18.7.03-2.81,0-15.45,0-18.67-2.17-1.83-10.85-8.54-21.55-8.99Zm20.16,38.06c-3.06-.17-5.34-1.83-6.45-5.13-.8-2.37-.99-5.57-.41-9.69.74-5.27,3.63-7.88,5.39-9.01.82-.53,1.4-.73,1.4-.73,0,0,.07.04.17.12.17.15.41.45.46,1.01.08.86-.44,7.15-.57,8.53-.13,1.38-.1,6.46,0,7.75.05.63.2,1.62.33,2.53.14.94.26,1.81.25,2.1-.03.57-.03,2.56-.58,2.53Z"
          style={{ fill: '#f2dab2', strokeWidth: 0 }}/>
        <path d="m55.51,39.77c-.05-.65-.09-2.01-.13-3.77-1.82,1.77-8.14,7.85-9.26,5.3-.12-.35-.03-.72.2-.98,2.33-2.4,4.84-4.46,7.03-6.96.6-.49,1.25-1.37,1.97-2.03-.06-5.69-.04-12.5.13-15.22-.4-.06-.92-.1-1.37-.08-10.68.45-19.35,7.16-21.52,8.99,0,3.23-.02,15.86,0,18.67.02,2.39.17,13.15.24,18.7,2.56-1.89,6.57-4.57,10.27-5.85,4.42-1.53,9.78-2.81,12.17-3.35.15-2.99.48-10.48.27-13.43Zm-15.59,8.91c-1.06,3.6-3.39,5.41-6.56,5.41,0,0-.3-.98,0-2.53.07-.37.15-1.08.22-1.99.23-2.94.44-7.88.4-9.55-.05-1.93-.29-5.87-.61-7.43l.05.06c-.16-.63-.21-1.64.21-2.26.25-.37.62-.39,1.04-.21,1.74,1.07,4.78,3.67,5.55,9.1.55,3.91.41,7.04-.29,9.41Z"
          style={{ fill: '#f2dab2', strokeWidth: 0 }}/>
        <path d="m61.55,24.85c0-.59-.32-1.14-.82-1.46l-2.14-1.33c.02-3.17.08-5.62.16-6.15.19-.67.06-1.37-.36-1.92-.88-1.13-2.88-1.32-4.42-1.28-11.24.47-20.13,6.95-23.12,9.4-2.98-2.45-11.88-8.93-23.14-9.41-1.53-.02-3.52.15-4.4,1.28-.42.55-.56,1.25-.38,1.83.09.54.15,2.96.18,6.07-.06.02-.12.04-.18.07l-1.62.84c-.57.3-.93.89-.94,1.53L0,74.48c0,.47.18.92.51,1.25.33.33.8.55,1.25.5l10.6-.16,10.36-.04c.92,1.58,3.1,4.17,7.45,4.17h.32c4.37,0,6.88-2.65,7.95-4.15l10.66.27,11.39-.32c.95-.03,1.7-.81,1.69-1.76l-.63-49.4Zm-6.24,6.48c-.71.66-1.37,1.54-1.97,2.03-2.19,2.5-4.7,4.56-7.03,6.96-.23.26-.32.63-.2.98,1.12,2.54,7.45-3.53,9.26-5.3.04,1.76.08,3.13.13,3.77.21,2.94-.12,10.44-.27,13.43-2.39.54-7.75,1.81-12.17,3.35-3.71,1.28-7.71,3.96-10.27,5.85-.08-5.55-.22-16.31-.24-18.7-.03-2.81,0-15.44,0-18.67,2.17-1.83,10.84-8.54,21.52-8.99.45-.02.97.02,1.37.08-.18,2.72-.19,9.53-.13,15.22Zm-26.17,12.36c-.02,2.39-.17,13.15-.24,18.7-2.56-1.89-6.57-4.57-10.27-5.85-4.42-1.53-9.78-2.81-12.17-3.34-.15-2.99-.48-10.48-.27-13.43.11-1.46.2-6.57.22-11.78.28.19.56.39.84.59.24.61.51,1.21.64,1.73.38,1.11.73,2.25,1.05,3.38.27,1.13.27,3.48.35,4.68.01.48.35.9.84,1,.57.11,1.12-.25,1.24-.82.29-1.52.5-2.99.46-4.56-.08-.73-.2-1.45-.34-2.16.86.41,1.77.65,2.51,1.16,1.23.64,2.44,1.29,3.63,1.98.95.55,1.82-.85.91-1.46-1.12-.75-2.19-1.59-3.21-2.48-1.1-.76-1.77-2.16-2.72-2.84-.2-.19-.45-.45-.63-.64-1.65-1.59-3.56-2.72-5.58-3.71-.01-3.27-.06-6.17-.16-7.73.4-.06.9-.09,1.34-.08,10.7.45,19.38,7.16,21.55,8.99,0,3.23.02,15.86,0,18.67Zm19.95,29.16l-11.55-.3c-.68,0-1.29.36-1.6.96-.07.13-1.69,3.21-5.45,3.21h-.32c-3.53,0-4.61-2.7-4.72-2.99-.24-.7-.9-1.18-1.65-1.18h0l-11.46.04-8.85.13s.2-17.05.24-17.01c0,0,0,0,0,0v8.9c0,1.42,1.05,2.58,2.34,2.58h23.69c.24.12.49.21.75.21.11,0,.22-.01.34-.04.11.02.23.04.34.04.26,0,.52-.09.75-.21h23.36c1.29,0,2.34-1.16,2.34-2.58v-8.64c.45-.25.75-.71.82-1.23l.23,17.84-9.59.27Z"
          style={{ fill: '#222', strokeWidth: 0 }}/>
        <path d="m27.76,54.09c.55.03.55-1.95.58-2.53.02-.29-.11-1.15-.25-2.1-.13-.91-.28-1.89-.33-2.53-.1-1.29-.13-6.38,0-7.75.13-1.38.65-7.67.57-8.53-.05-.55-.29-.86-.46-1.01-.09-.08-.17-.12-.17-.12,0,0-.58.2-1.4.73-1.76,1.13-4.65,3.74-5.39,9.01-.58,4.12-.39,7.32.41,9.69,1.11,3.3,3.39,4.96,6.45,5.13Z"
          style={{ fill: '#222', strokeWidth: 0 }}/>
        <path d="m34.66,30.18c-.42-.18-.79-.16-1.04.21-.41.62-.37,1.62-.21,2.26l-.05-.06c.33,1.57.57,5.51.61,7.43.04,1.67-.16,6.62-.4,9.55-.07.91-.15,1.63-.22,1.99-.3,1.55,0,2.53,0,2.53,3.17,0,5.51-1.82,6.56-5.41.7-2.37.84-5.49.29-9.41-.77-5.43-3.8-8.03-5.55-9.1Z"
          style={{ fill: '#222', strokeWidth: 0 }}/>
        <path d="m29.87,14.51c.36.91,1.76.93,2.13.02.87-2.24.46-4.41.46-6.76-.1-.9-.16-2.31-.19-3.22-.05-1.09-.09-2.2-.16-3.3-.12-1.62-2.51-1.67-2.69-.05-.2,2.24-.35,4.52-.17,6.77.2,2.14-.24,4.43.61,6.54Z"
          style={{ fill: '#222', strokeWidth: 0 }}/>
        <path d="m22.59,7.76c.23.48.49.96,1.23,1.25.68.27,1.46-.08,1.71-.77.32-.65.24-1.31-.07-1.84-.61-1.42-1.27-2.81-2.11-4.11-.79-1.27-2.85-.4-2.47,1.07.39,1.55.98,3,1.71,4.41Z"
          style={{ fill: '#222', strokeWidth: 0 }}/>
        <path d="m16.61,12.61c.45.3.91.57,1.7.44,1.61-.3,1.26-2.53.07-3.09-1.24-.9-2.52-1.76-3.91-2.45-.51-.26-1.14-.17-1.57.25-.54.53-.54,1.39-.01,1.93,1.13,1.13,2.38,2.07,3.72,2.92Z"
          style={{ fill: '#222', strokeWidth: 0 }}/>
        <path d="m37.83,9.01c.74-.29,1-.77,1.23-1.25.73-1.41,1.32-2.86,1.71-4.41.38-1.45-1.67-2.35-2.47-1.06-.84,1.3-1.5,2.69-2.11,4.1-.22.45-.41.91-.19,1.52.18.83.99,1.44,1.83,1.1Z"
          style={{ fill: '#222', strokeWidth: 0 }}/>
        <path d="m43.34,13.06c1.37.17,2.01-.74,3.01-1.33.97-.89,3.36-2,2.66-3.6-.33-.68-1.16-.95-1.83-.61-1.39.69-2.67,1.55-3.91,2.45-.42.28-.82.58-.94,1.21-.27.81.12,1.74,1.01,1.88Z"
          style={{ fill: '#222', strokeWidth: 0 }}/>
      </g>
    </svg>
  )
}