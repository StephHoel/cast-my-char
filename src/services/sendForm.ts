import { toast } from 'sonner'
import { FORM_URL } from '@/constants/routes'
import type { SugestionFormProps } from '@/types/sugestionForm'

export async function sendForm(data: SugestionFormProps) {
  const formData = new FormData()
  formData.append('entry.1561591658', crypto.randomUUID())
  formData.append('entry.1806402210', data.name)
  formData.append('entry.1776193386', data.link)
  formData.append('entry.1221776346', data.nat.join(','))
  formData.append('entry.1779401284', data.eye.join(','))
  formData.append('entry.1958634453', data.hair.join(','))
  formData.append('entry.1644028565', data.age.join(','))
  formData.append('entry.30659834', data.gender.join(','))
  formData.append('entry.640708584', data.tags.join(','))
  formData.append('entry.1187744977', data.big)
  formData.append('entry.611006121', data.short)
  formData.append('entry.1769110141', 'Não')

  await fetch(FORM_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  })

  toast.success('Enviado! Obrigada 🎉', {
    action: {
      label: 'Undo',
      onClick: () => {},
    },
    position: 'top-center',
  })
}
