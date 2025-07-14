import { z } from 'zod/v4'

export const sugestionFormSchema = z.object({
  name: z.string().min(1, { message: 'Insira nome e sobrenome' }),
  link: z.string(),
  age: z.string(),
  big: z.string(),
  eye: z.string(),
  gender: z.string(),
  hair: z.string(),
  isIntegrated: z.string(),
  nat: z.string(),
  short: z.string(),
  tags: z.string(),
})
