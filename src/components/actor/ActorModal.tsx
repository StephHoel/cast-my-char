import placeholder from '@/assets/placeholder.svg'
import { useEscapeKey } from '@/hooks/useEscapeKey'
import { useScrollLock } from '@/hooks/useScrollLock'
import type { ActorModalProps } from '@/types/actorModal'
import { Content } from './ActorModalContent'
import { capitalize, formatArray } from '@/utils/formatArray'

export function ActorModal({ actor, onClose }: ActorModalProps) {
  const isOpen = !!actor

  const image = actor && actor.photoUrl.short.trim().length > 0 ? actor.photoUrl.short : placeholder

  useEscapeKey(() => {
    if (isOpen) onClose()
  })

  useScrollLock(isOpen)

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='lg:max-w-10/12 flex max-h-[90vh] w-full flex-col overflow-hidden rounded-lg bg-gray-900 text-white shadow-lg'
      >
        <div className='relative shrink-0'>
          <img src={image} alt={actor.name} className='h-64 w-full rounded-t-lg object-cover' />
          <button
            onClick={onClose}
            className='absolute right-2 top-2 size-11 justify-center rounded-full bg-black/70 p-2 text-center text-xl text-white hover:bg-black/85'
            aria-label='Fechar'
          >
            ✖️
          </button>
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
