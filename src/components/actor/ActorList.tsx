import { ActorCard } from '@/components/actor/ActorCard'
import type { ActorProps } from '@/types/actor'
import type { ActorListProps } from '@/types/actorList'
import { useState } from 'react'
import { ActorModal } from './ActorModal'

export function ActorList({ actors }: ActorListProps) {
  const [selectedActor, setSelectedActor] = useState<ActorProps | null>(null)
  actors = actors.sort((a, b) => a.name.localeCompare(b.name))

  if (actors.length === 0) {
    return (
      <p className="text-center text-zinc-400 mt-8">
        Nenhum ator ou atriz encontrado com os filtros atuais.
      </p>
    )
  }

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6`}>
      {actors.map((actor) => (
        <ActorCard
          key={actor.id}
          actor={actor}
          onClick={() => setSelectedActor(actor)}
        />
      ))}

      <ActorModal actor={selectedActor} onClose={() => setSelectedActor(null)} />
    </div>
  )
}
