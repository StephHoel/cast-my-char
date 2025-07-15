import { Field } from '@/components/form/Field'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useSugestionForm } from '@/hooks/useForm'
import { sendForm } from '@/services/sendForm'
import type { SugestionFormProps } from '@/types/sugestionForm'

export function Request() {
  const sugestionForm = useSugestionForm()
  const { isSubmitting } = sugestionForm.formState

  async function handleSubmitForm(data: SugestionFormProps) {
    await sendForm(data)
    sugestionForm.reset()
  }

  return (
    <Form {...sugestionForm}>
      <form
        onSubmit={sugestionForm.handleSubmit(handleSubmitForm)}
        className='flex flex-col gap-12'
      >
        <Field
          control={sugestionForm.control}
          name='name'
          isSubmitting={isSubmitting}
          label='Nome do Famoso'
          description='Informe nome e sobrenome do famoso'
          placeholder='Digite o nome do artista/famoso/intérprete'
        />

        <Field
          control={sugestionForm.control}
          name='link'
          isSubmitting={isSubmitting}
          label='Link do Perfil'
          description='Informe o link do perfil ou IMDB ou Wikipedia para nos ajudar a registrar o famoso correto'
          placeholder='Informe o link do perfil'
        />

        {/* TODO: adicionar demais campos da tabela */}

        <Button disabled={isSubmitting} type='submit'>
          Registrar Pedido
        </Button>
      </form>
    </Form>
  )
}
