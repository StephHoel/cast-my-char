import { Field } from '@/components/form/Field'
import { SelectField } from '@/components/form/Select'
import { TagsInputField } from '@/components/form/TagsInput'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  AGE_RANGES,
  EYES_COLOR,
  GENDERS,
  HAIR_COLORS,
} from '@/constants/filterOptions'
import { useSugestionForm } from '@/hooks/useForm'
import { sendForm } from '@/services/sendForm'
import type { SugestionFormProps } from '@/types/sugestionForm'

export function Request() {
  const sugestionForm = useSugestionForm()

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = sugestionForm

  async function handleSubmitForm(data: SugestionFormProps) {
    await sendForm(data)
    sugestionForm.reset()
  }

  return (
    <Form {...sugestionForm}>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className='flex flex-col gap-12'
      >
        <Field
          control={control}
          name='name'
          isSubmitting={isSubmitting}
          label='Nome do Famoso'
          description='Informe nome e sobrenome do famoso'
          placeholder='Digite o nome do artista/famoso/intérprete'
        />

        <Field
          control={control}
          name='link'
          isSubmitting={isSubmitting}
          label='Link do Perfil'
          description='Informe o link do perfil ou IMDB ou Wikipedia para nos ajudar a registrar o famoso correto'
          placeholder='Informe o link do perfil'
        />

        <SelectField
          name='eye'
          control={control}
          label='Cor dos Olhos'
          description='Selecione apenas a cor original dos olhos da pessoa'
          options={EYES_COLOR.sort()}
          isSingleSelection={true}
        />

        <SelectField
          name='gender'
          control={control}
          label='Gênero'
          description='Selecione todos os gêneros conhecidos (com fotos públicas) da pessoa'
          options={GENDERS}
        />

        <SelectField
          name='age'
          control={control}
          label='Faixa Etária'
          description='Informe as faixas etárias conhecidas (com fotos públicas) da pessoa'
          options={AGE_RANGES}
        />

        <SelectField
          name='hair'
          control={control}
          label='Cor de Cabelo'
          description='Informe todas as cores de cabelo conhecidas (com fotos públicas) da pessoa'
          options={HAIR_COLORS.sort()}
        />

        <TagsInputField
          name='nat'
          label='Nacionalidade(s)'
          description='Informe um país de ascendência por vez e aperte Enter para inserir'
          control={control}
          isSubmitting={isSubmitting}
          placeholder={'Digite e aperte Enter...'}
        />

        <TagsInputField
          name='tags'
          label='Tags'
          description='Informe uma característica da pessoa por vez e pressione Enter para inserir'
          control={control}
          isSubmitting={isSubmitting}
          placeholder={'Digite e aperte Enter...'}
        />

        <Button disabled={isSubmitting} type='submit'>
          Registrar Pedido
        </Button>
      </form>
    </Form>
  )
}
