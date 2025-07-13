import type { ActorProps } from '@/types/actor'
import type { RawActorProps } from '@/types/rawActor'
import type { SugestionFormProps } from "@/types/sugestionForm"
import Papa from 'papaparse'

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
  formData.append('entry.1769110141', "Não")

  await fetch(
    'https://docs.google.com/forms/d/e/1FAIpQLSevk0ft50lR2EXAiPF_0Tu4McEjjg-ePy--BoDHeq8VpGhoRA/formResponse',
    {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    }
  )

  alert('Enviado! Obrigada 🎉')
}

export async function getSheet(): Promise<ActorProps[]> {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTwo37E6cUaPgNU6AIawA69d1iBtlZYMLqXZc2FhVtjnMZcF5EKE5WTWgsi0AWT2F0j4iBpbP21rNxX/pub?gid=1596534945&single=true&output=csv"

  const response = await fetch(SHEET_URL)
  const csvText = await response.text()

  return new Promise((resolve, _) => {
    Papa.parse<RawActorProps>(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const actors: ActorProps[] = results.data.map((entry) => ({
          id: entry.id,
          name: entry.name,
          nationality: entry.nationality.split(", "),
          eyeColor: entry.eyeColor,
          hairColor: entry.hairColor.split(", "),
          ageRange: entry.ageRange.split(", "),
          gender: entry.gender.split(", "),
          tags: entry.tags.split(", "),
          photoUrl: {
            big: entry['photoUrl.big'],
            short: entry['photoUrl.short'],
          },
          isIntegrated: entry.isIntegrated
        }))
        resolve(actors)
      }
    })
  })
}