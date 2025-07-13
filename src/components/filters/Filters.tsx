import type { FiltersProps } from '@/types/filter'
import type { FiltersState } from '@/types/filtersState'
import { AdvancedFilters } from './AdvancedFilters'
import { SearchBar } from './SearchBar'

export function Filters({ filters, onChange }: FiltersProps) {
  const toggleItem = (key: keyof FiltersState, value: string) => {
    const list = filters[key] as string[]

    const newList = list.includes(value)
      ? list.filter((v) => v !== value)
      : [...list, value]

    onChange({ ...filters, [key]: newList })
  }

  return (
    <section className="bg-gray-900 text-white p-4 rounded-lg shadow-md mb-6">
      <SearchBar
        value={filters.name}
        onChange={(value) => onChange({ ...filters, name: value })}
      />

      <AdvancedFilters
        filters={filters}
        toggleItem={toggleItem}
      />
    </section>
  )
}
