import type { FiltersState } from "@/types/filtersState"
import { getFilterOptions } from "@/utils/getFilters"
import { useState } from "react"
import { FilterGroup } from "./FilterGroup"

export type AdvancedFiltersProps = {
  filters: FiltersState
  toggleItem: (key: keyof FiltersState, value: string) => void
}
export function AdvancedFilters({ filters, toggleItem }: AdvancedFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const filtersOptions = getFilterOptions()

  return (
    <>
      {/* Toggle filtros avançados */}
      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={() => setShowAdvanced((prev) => !prev)}
          className="text-sm text-blue-400 hover:cursor-pointer hover:underline focus:outline-none"
        >
          {showAdvanced ? 'Ocultar filtros avançados' : 'Mostrar filtros avançados'}
        </button>
      </div>

      {/* Filtros avançados */}
      {showAdvanced && (
        <div className="space-y-4">
          <FilterGroup
            title="Cor do Cabelo"
            options={filtersOptions.hairColor}
            selected={filters.hairColor}
            onToggle={(value) => toggleItem('hairColor', value)}
          />

          <FilterGroup
            title="Cor dos Olhos"
            options={filtersOptions.eyeColor}
            selected={filters.eyeColor}
            onToggle={(value) => toggleItem('eyeColor', value)}
          />

          <FilterGroup
            title="Nacionalidade"
            options={filtersOptions.nationality}
            selected={filters.nationality}
            onToggle={(value) => toggleItem('nationality', value)}
          />

          <FilterGroup
            title="Faixa Etária"
            options={filtersOptions.ageRange}
            selected={filters.ageRange}
            onToggle={(value) => toggleItem('ageRange', value)}
          />

          <FilterGroup
            title="Gênero"
            options={filtersOptions.gender}
            selected={filters.gender}
            onToggle={(value) => toggleItem('gender', value)}
          />

          <FilterGroup
            title="Tags"
            options={filtersOptions.tags}
            selected={filters.tags}
            onToggle={(value) => toggleItem('tags', value)}
          />
        </div>
      )}
    </>)
}