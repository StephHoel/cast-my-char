import { ArrowLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'
import placeholder from '@/assets/placeholder.svg'
import { Content } from '@/components/actor/ActorContent'
import { useActors } from '@/components/layout/LayoutWrapper'
import { Loading } from '@/components/layout/Loading'
import { url } from '@/constants/routes'
import { capitalize, formatArray } from '@/utils/formatArray'

export function Famous() {
  const { id } = useParams<{ id: string }>()
  const { actors, loading } = useActors()

  const actor = actors.find((a) => a.id === id)
  const image = actor && actor.photoUrl.short.trim().length > 0 ? actor.photoUrl.short : placeholder

  if (loading) return <Loading />

  if (!actor) return <p>Famoso ou Famosa não encontrado.</p>

  return (
    <div>
      <div className='lg:max-w-10/12 flex max-h-[90vh] w-full flex-col overflow-hidden rounded-lg bg-gray-900 text-white shadow-lg'>
        <div className='relative shrink-0'>
          <img src={image} alt={actor.name} className='h-64 w-full rounded-t-lg object-cover' />

          <a
            href={url.index}
            className='flex gap-1 items-center justify-center absolute left-2 top-2 items-center justify-center rounded-full bg-black/70 p-2 text-center text-xl text-white hover:bg-black/85'
            aria-label='Fechar'
          >
            <ArrowLeft />
            Back
          </a>
        </div>

        <div className='space-y-3 overflow-y-auto p-4 text-2xl'>
          <h2 className='text-center text-4xl font-bold'>{actor.name}</h2>

          <Content title='Nacionalidade'>{formatArray(actor.nationality)}</Content>

          <Content title='Cor dos olhos'>{capitalize(actor.eyeColor)}</Content>

          <Content title='Cor do cabelo'>{formatArray(actor.hairColor)}</Content>

          <Content title='Faixa etária'>{formatArray(actor.ageRange)}</Content>

          <Content title='Gênero'>{formatArray(actor.gender)}</Content>

          {actor.tags?.length > 0 && <Content title='Outras Características'>{formatArray(actor.tags)}</Content>}
        </div>
      </div>
    </div>
  )
}
