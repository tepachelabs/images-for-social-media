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

export const IconSkullComponent: FC<Props> = ({
  variant = 'green',
}) => {
  const colorScheme = useMemo(() => colorSchemes[variant], [variant])

  return (
    <svg viewBox="0 0 79.5 81.79" style={{ height: '100%' }}>
      <g id="iconos">
        <path d="m15.02,54.69s11.84,18.02,21.96,23.67c6.5,3.63,12.36-.26,16.04-5s9.86-13.94,9.86-13.94"
          style={{ fill:'#f0d8b0', stroke:'#222', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth: 4 }}/>
        <path d="m64.89,57.85c-3.3,3.31-8.78,1.58-9.65,5.18-.87,3.6-1.95,6.35-3.86,6.3-4.25-.11-4.45-2.81-4.62-4s-2.2-3.21-2.53-.17c-.34,3.04-2.87,6.08-5.69,5.4-2.82-.68-1.74-5.07-2.4-6.42s-1.7.34-1.7.34c0,0-.51,5.4-4.04,5.5-3.54.09-4.65-8.17-4.65-8.17l-8.24-5.3s-3.94-3.14-7.09-9.19S2,32.07,2,20.5,11.99-.54,23.3,2.61c4.74,1.32,10.05,9.15,13.35,14.81,1.35,2.31,4.71,2.2,5.91-.19,2.83-5.59,7.75-13.14,14.14-14.36,12.36-2.37,20.25,9.47,20.78,22.09.53,12.62-12.59,32.88-12.59,32.88Z"
          style={{ fill:'#f0d8b0', stroke:'#222', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth: 4 }}/>
        <path d="m40.69,51.82s-5.57-.55-6.36,2.15c-.79,2.7,1.07,4.17,3.18,4.05,2.11-.11,3.69.12,5.94,0s3.49-1.47,3.26-2.37-1.09-5.33-6.03-3.84Z"
          style={{ fill:'#222', strokeWidth: 0 }}/>
        <path d="m21.38,30.16s-3.67,4.09-3.08,10c.32,3.21,2.82,8.25,4.4,9.17,1.58.92,8.41,1.26,9.05-3.75.64-5.01-1.78-19.48-10.37-15.43Z"
          style={{ fill:'#222', strokeWidth: 0 }}/>
        <path d="m55.29,50.2s4.64-2.94,4.62-11.55c0-3.22-2.12-6.48-3.52-7.64-1.4-1.17-8.09-2.63-9.54,2.21s-.7,19.57,8.44,16.99Z"
          style={{ fill:'#222', strokeWidth: 0 }}/>
        <path d="m55.86,20.8s2.03-1.86,6.59-1.69c4.56.17,6.25-.51,6.75-.84.51-.34,3.31-3.55,3.31-3.55"
          style={{ fill:'#f0d8b0', strokeWidth: 0 }}/>
        <path d="m55.14,20.01c3.02-3.95,9.19-1.97,12.88-3.37.85-.87,2.16-2.33,2.99-3.24,1.75-1.88,4.64.62,3.02,2.62-1.1,1.27-2.1,2.46-3.35,3.62-2.35,1.71-5.51,1.37-8.22,1.27-1.69-.16-3.35.1-4.98.47-.53.16-1.01.22-1.52.21-.8.04-1.31-.97-.8-1.58h0Z"
          style={{ fill:'#222', strokeWidth: 0 }}/>
        <path d="m63.12,24.34s1.35-1.35,1.69-2.11,1.37-2.13,1.69-2.7"
          style={{ fill:'#f0d8b0', strokeWidth: 0 }}/>
        <path d="m62.4,23.62c-.04-.9.18-1.45.47-2.1.12-.6.69-1.49,1.03-1.96.93-1.43,2.96-2.46,4.11-.79.73,1.01-.05,2.4-.53,3.19-.47.73-.76,1.19-1.24,1.84-.84,1.3-3.76,2.06-3.85-.19h0Z"
          style={{ fill:'#222', strokeWidth: 0 }}/>
      </g>
    </svg>
  )
}
