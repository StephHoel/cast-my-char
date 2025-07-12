import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSugestionForm } from '@/hooks/useForm';
import { sendForm } from '@/services/gSheets';
import type { SugestionFormProps } from "@/types/sugestionForm";

export function Request() {
  const sugestionForm = useSugestionForm()
  const { isSubmitting } = sugestionForm.formState

  async function handleSubmitForm(data: SugestionFormProps) {
    await sendForm(data)
    sugestionForm.reset()
  }

  return (
    <div>
      <Form {...sugestionForm}>
        <form onSubmit={sugestionForm.handleSubmit(handleSubmitForm)} className="flex flex-col gap-12">
          <FormField
            control={sugestionForm.control}
            name='name'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Nome do Famoso</FormLabel>
                  <FormDescription>Informe nome e sobrenome do famoso</FormDescription>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      placeholder='Digite o nome do artista/famoso/intérprete'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormField
            control={sugestionForm.control}
            name='link'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Link do Perfil</FormLabel>
                  <FormDescription>Informe o link do perfil ou IMDB ou Wikipedia para nos ajudar a registrar o famoso correto</FormDescription>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      placeholder='Informe o link do perfil'
                    />
                  </FormControl>
                </FormItem>
              )
            }}
          />

          <Button
            disabled={isSubmitting}
            type='submit'
          >
            Registrar Pedido
          </Button>
        </form>
      </Form>
    </div>
  )
}