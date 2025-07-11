import { ActorList } from "@/components/actor/ActorList";
import { Filters } from "@/components/filters/Filters";
import { actors } from "@/constants/actors";
import { FiltersState } from "@/types/filtersState";
import { getActorsFiltered } from "@/utils/getActorsFiltered";
import { useMemo, useState } from "react";

export function Home() {
  const [filters, setFilters] = useState<FiltersState>({
    name: '',
    nationality: [],
    eyeColor: [],
    hairColor: [],
    ageRange: [],
    gender: [],
    tags: []
  })

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