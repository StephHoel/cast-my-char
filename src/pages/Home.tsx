import { ActorList } from '@/components/actor/ActorList'
import { Filters } from '@/components/filters/Filters'
import { useActors } from '@/components/layout/LayoutWrapper'
import { Loading } from '@/components/layout/Loading'
import { initial } from '@/constants/filtersState'
import { useFiltersStorage } from '@/hooks/useFiltersStorage'
import { SortArray } from '@/utils/array'

export function Home() {
  const [filters, setFilters] = useFiltersStorage(initial)
  const { actors, loading } = useActors()

  return (
    <>
      <Filters filters={filters} onChange={setFilters} />

      {loading ? (
        <Loading />
      ) : !actors ? (
        <p className='text-gray-300 text-2xl text-center'>Nenhum famoso na lista...</p>
      ) : (
        <ActorList actors={SortArray(actors)} />
      )}
    </>
  )
}
