import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { sugestionFormSchema } from '@/schemas/sugestionForm'
import type { SugestionFormProps } from '@/types/sugestionForm'

export function useSugestionForm() {
  return useForm<SugestionFormProps>({
    resolver: zodResolver(sugestionFormSchema),
    defaultValues: {
      name: '',
      link: '',
      big: '',
      short: '',
      isIntegrated: '',
      eye: [],
      age: [],
      gender: [],
      hair: [],
      nat: [],
      tags: [],
    },
    mode: 'onSubmit',
  })
}
