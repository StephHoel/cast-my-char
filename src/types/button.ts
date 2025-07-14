import type { PropsWithChildren } from 'react'

export type ButtonProps = PropsWithChildren & {
  selected: boolean
  key: string
  onClick: () => void
}
