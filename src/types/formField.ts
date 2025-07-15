/** biome-ignore-all lint/suspicious/noExplicitAny: any padrão do controlador */
import type { Control } from 'react-hook-form'
import type { SugestionFormProps } from './sugestionForm'

export type FormFieldProps = {
  control: Control<SugestionFormProps, any, SugestionFormProps>
  isSubmitting: boolean
  name:
    | 'name'
    | 'big'
    | 'link'
    | 'nat'
    | 'eye'
    | 'hair'
    | 'age'
    | 'gender'
    | 'tags'
    | 'short'
    | 'isIntegrated'
  label: string
  description: string
  placeholder: string
}
