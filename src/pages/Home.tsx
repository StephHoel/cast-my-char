import { ActorList } from "@/components/actor/ActorList";
import { Filters } from "@/components/filters/Filters";
import { actors } from "@/constants/actors";
import { useFiltersStorage } from "@/hooks/useFiltersStorage";
import { FiltersState } from "@/types/filtersState";
import { getActorsFiltered } from "@/utils/getActorsFiltered";
import { useMemo } from "react";

export function Home() {
  const initial: FiltersState ={
    name: '',
    nationality: [],
    eyeColor: [],
    hairColor: [],
    ageRange: [],
    gender: [],
    tags: []
  }

  const [filters, setFilters] = useFiltersStorage(initial)


  const filteredActors = useMemo(() => {
    return getActorsFiltered(filters, actors)
  }, [filters])

  return (
    <>
      <Filters
        filters={filters}
        onChange={setFilters}
      />

      <ActorList actors={filteredActors} />
    </>
  )
}