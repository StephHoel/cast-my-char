import { useToggleItem } from '@/hooks/useToggleItem'
import type { FiltersProps } from '@/types/filter'
import { AdvancedFilters } from './AdvancedFilters'
import { SearchBar } from './SearchBar'

export function Filters({ filters, onChange }: FiltersProps) {
  const toggleItem = useToggleItem

  return (
    <section className='mb-6 rounded-lg bg-gray-900 p-4 text-white shadow-md'>
      <SearchBar
        value={filters.name}
        onChange={(value) => onChange({ ...filters, name: value })}
      />

      <AdvancedFilters
        filters={filters}
        toggleItem={(key, value) => toggleItem(filters, onChange, key, value)}
      />
    </section>
  )
}
