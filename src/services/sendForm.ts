import type { SugestionFormProps } from '@/types/sugestionForm'

export async function sendForm(dados: SugestionFormProps) {
  const formData = new FormData()
  formData.append('entry.1561591658', crypto.randomUUID())
  formData.append('entry.1806402210', dados.name)
  formData.append('entry.1776193386', dados.link)
  formData.append('entry.1221776346', dados.nat)
  formData.append('entry.1779401284', dados.eye)
  formData.append('entry.1958634453', dados.hair)
  formData.append('entry.1644028565', dados.age)
  formData.append('entry.30659834', dados.gender)
  formData.append('entry.640708584', dados.tags)
  formData.append('entry.1187744977', dados.big)
  formData.append('entry.611006121', dados.short)
  formData.append('entry.1769110141', 'Não')

  await fetch(
    'https://docs.google.com/forms/d/e/1FAIpQLSevk0ft50lR2EXAiPF_0Tu4McEjjg-ePy--BoDHeq8VpGhoRA/formResponse',
    {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    },
  )

  alert('Enviado! Obrigada 🎉')
}
