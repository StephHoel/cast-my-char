/** biome-ignore-all lint/suspicious/noExplicitAny: <any> */
import type { Control } from 'react-hook-form'
import type { SugestionFormProps } from './sugestionForm'

export type SelectFieldProps = {
  name: keyof SugestionFormProps
  description: string
  label: string
  options: string[]
  isSingleSelection?: boolean
  control: Control<SugestionFormProps, any, SugestionFormProps>
}
