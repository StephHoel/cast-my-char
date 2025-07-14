'use client'
import { ActorList } from '@/components/actor/ActorList'
import { Filters } from '@/components/filters/Filters'
import { initial } from '@/constants/filtersState'
import { useFiltersStorage } from '@/hooks/useFiltersStorage'
import { getFamous } from '@/services/getFamousFromSheet'
import type { ActorProps } from '@/types/actor'
import { getActorsFiltered } from '@/utils/filterActors'
import { Loader2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export function Home() {
  const [filters, setFilters] = useFiltersStorage(initial)
  const [list, setList] = useState<ActorProps[]>([])
  const [loading, setLoading] = useState(true)

  // const searchParams = new URLSearchParams(window.location.search);
  // const redirectPath = searchParams.get('redirect');
  // console.log('searchParams home: ', redirectPath)

  // if (redirectPath && redirectPath !== '/') {
  //   window.history.replaceState(null, '', redirectPath);
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const famous = await getFamous()
        const integrated = famous.filter((actor) => actor.isIntegrated !== 'Não')
        setList(integrated)
      } catch (error) {
        console.error('Erro ao carregar atores: ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredActors = useMemo(() => {
    return getActorsFiltered(filters, list)
  }, [filters, list])

  return (
    <>
      <Filters filters={filters} onChange={setFilters} />

      {loading ? (
        <div className='flex gap-2'>
          <Loader2 className='animate-spin' />
          <p>Carregando...</p>
        </div>
      ) : (
        <ActorList actors={filteredActors} />
      )}
    </>
  )
}
