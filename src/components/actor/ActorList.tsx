import { ActorCard } from '@/components/actor/ActorCard'
import type { ActorListProps } from '@/types/actorList'

export function ActorList({ actors }: ActorListProps) {
  if (actors.length === 0) {
    return <p className='mt-8 text-center text-zinc-400'>Nenhum ator ou atriz encontrado com os filtros atuais.</p>
  }

  return (
    <div className={`grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4`}>
      {actors.map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </div>
  )
}
