import type { FiltersState } from './filtersState'

export type AdvancedFiltersProps = {
  filters: FiltersState
  toggleItem: (key: keyof FiltersState, value: string) => void
}
