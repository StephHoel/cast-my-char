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
  const image =
    actor && actor.photoUrl.short.trim().length > 0
      ? actor.photoUrl.short
      : placeholder

  if (loading) return <Loading />

  if (!actor) return <p>Famoso ou Famosa não encontrado.</p>

  return (
    <div className='2xl:w-[50vw] lg:w-[60vw] md:w-[90vw] h-[90vh] flex items-center justify-center'>
      <div className='w-full h-full mx-auto pb-8 flex flex-col overflow-hidden rounded-lg bg-gray-900 text-white shadow-lg'>
        <div className='not-md:h-1/4 md:h-1/2 relative shrink-0'>
          <img
            src={image}
            alt={actor.name}
            className='size-full rounded-t-lg object-cover'
          />

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

          <Content title='Nacionalidade'>
            {formatArray(actor.nationality) || 'N/A'}
          </Content>

          <Content title='Cor dos olhos'>
            {capitalize(actor.eyeColor) || 'N/A'}
          </Content>

          <Content title='Cor do cabelo'>
            {formatArray(actor.hairColor) || 'N/A'}
          </Content>

          <Content title='Faixa etária'>
            {formatArray(actor.ageRange) || 'N/A'}
          </Content>

          <Content title='Gênero'>{formatArray(actor.gender) || 'N/A'}</Content>

          {actor.tags?.length > 0 && (
            <Content title='Outras Características'>
              {formatArray(actor.tags) || 'N/A'}
            </Content>
          )}
        </div>
      </div>
    </div>
  )
}
