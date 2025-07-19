import type { z } from 'zod/v4'
import type { sugestionFormSchema } from '@/schemas/sugestionForm'

export type SugestionFormProps = z.infer<typeof sugestionFormSchema>
