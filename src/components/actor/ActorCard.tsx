import placeholder from '@/assets/placeholder.svg'
import { url } from '@/constants/routes'
import type { ActorCardProps } from '@/types/actorCard'

export function ActorCard({ actor }: ActorCardProps) {
  const firstNationality = actor.nationality.sort()[0]
  const firstAge = actor.ageRange[0]

  const image = actor.photoUrl.big.trim().length > 0 ? actor.photoUrl.big : placeholder

  return (
    <a href={url.famous.replace(':id', actor.id)}>
      <div className='w-full overflow-hidden rounded-lg bg-gray-800 text-left shadow-md transition hover:shadow-lg focus:outline-none'>
        <img loading='lazy' src={image} alt={actor.name} className='h-60 w-full object-cover' />

        <div className='p-4'>
          <h2 className='text-lg font-semibold text-white'>{actor.name}</h2>

          <p className='text-sm text-gray-400'>
            {firstNationality + (actor.nationality.length > 1 ? ` + ${actor.nationality.length - 1}` : '')}
          </p>

          <p className='text-sm text-gray-400'>
            {firstAge + (actor.ageRange.length > 1 ? ` + ${actor.ageRange.length - 1}` : '')}
          </p>
        </div>
      </div>
    </a>
  )
}
