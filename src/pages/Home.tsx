import { ActorList } from '@/components/actor/ActorList'
import { Filters } from '@/components/filters/Filters'
import { useActors } from '@/components/layout/LayoutWrapper'
import { Loading } from '@/components/layout/Loading'
import { initial } from '@/constants/filtersState'
import { useFiltersStorage } from '@/hooks/useFiltersStorage'

export function Home() {
  const [filters, setFilters] = useFiltersStorage(initial)

  const { actors, loading } = useActors()

  if (!actors) return <p className='text-gray-300 text-2xl text-center'>Nenhum famoso na lista...</p>

  return (
    <>
      <Filters filters={filters} onChange={setFilters} />

      {loading ? <Loading /> : <ActorList actors={actors} />}
    </>
  )
}
