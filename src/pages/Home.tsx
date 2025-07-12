"use client"
import { ActorList } from "@/components/actor/ActorList";
import { Filters } from "@/components/filters/Filters";
import { initial } from "@/constants/filtersState";
import { useFiltersStorage } from "@/hooks/useFiltersStorage";
import { getSheet } from "@/services/gSheets";
import { ActorProps } from "@/types/actor";
import { getActorsFiltered } from "@/utils/getActorsFiltered";
import { Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export function Home() {
  const [filters, setFilters] = useFiltersStorage(initial)
  const [list, setList] = useState<ActorProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const famous = await getSheet()
        const integrated = famous.filter(actor => actor.isIntegrated !== "Não")
        setList(integrated)
      } catch (error) {
        console.error("Erro ao carregar atores: ", error)
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
      <Filters
        filters={filters}
        onChange={setFilters}
      />

      {loading ? (
        <div className="flex gap-2">
          <Loader2 className="animate-spin" />
          <p>Carregando...</p>
        </div>
      ) : (
        <ActorList actors={filteredActors} />
      )}
    </>
  )
}