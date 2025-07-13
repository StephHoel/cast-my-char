import placeholder from "@/assets/placeholder.svg"
import { useEscapeKey } from '@/hooks/useEscapeKey'
import { useScrollLock } from '@/hooks/useScrollLock'
import type { ActorModalProps } from '@/types/actorModal'
import { Capitalize, CapitalizeAndFormat } from '@/utils/array'
import { Content } from './ActorModalContent'

export function ActorModal({ actor, onClose }: ActorModalProps) {
  const isOpen = !!actor

  const image = actor && actor.photoUrl.short.trim().length > 0
    ? actor.photoUrl.short
    : placeholder

  useEscapeKey(() => {
    if (isOpen) onClose()
  })

  useScrollLock(isOpen)

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 text-white rounded-lg shadow-lg w-full lg:max-w-10/12 max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="relative shrink-0">
          <img
            src={image}
            alt={actor.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white bg-black/70 rounded-full w-11 h-11 text-xl text-center justify-center p-2 hover:bg-black/85"
            aria-label="Fechar"
          >
            ✖️
          </button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto text-2xl">
          <h2 className="text-4xl font-bold text-center">{actor.name}</h2>

          <Content title='Nacionalidade'>
            {CapitalizeAndFormat(actor.nationality)}
          </Content>

          <Content title='Cor dos olhos'>
            {Capitalize(actor.eyeColor)}
          </Content>

          <Content title='Cor do cabelo'>
            {CapitalizeAndFormat(actor.hairColor)}
          </Content>

          <Content title='Faixa etária'>
            {CapitalizeAndFormat(actor.ageRange)}
          </Content>

          <Content title='Gênero'>
            {CapitalizeAndFormat(actor.gender)}
          </Content>

          {actor.tags?.length > 0 && (
            <Content title='Outras Características'>
              {CapitalizeAndFormat(actor.tags)}
            </Content>
          )}
        </div>
      </div>
    </div>
  )
}


