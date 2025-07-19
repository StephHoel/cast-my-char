import { z } from 'zod/v4'

export const sugestionFormSchema = z.object({
  isIntegrated: z.string(),
  name: z.string().min(1, { message: 'Insira nome e sobrenome' }),
  link: z.string(),
  big: z.string(),
  short: z.string(),

  eye: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'Escolha pelo menos 1',
  }),

  age: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'Escolha pelo menos 1',
  }),

  gender: z.array(z.string()).refine((value) => value.length === 1, {
    message: 'Escolha apenas 1',
  }),

  hair: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'Escolha pelo menos 1',
  }),

  nat: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'Insira pelo menos 1 nacionalidade',
  }),

  tags: z.array(z.string()),
})
