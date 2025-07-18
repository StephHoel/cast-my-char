import type { FiltersState } from '@/types/filtersState'

export function useToggleItem(
  filters: FiltersState,
  onChange: (filters: FiltersState) => void,
  key: keyof FiltersState,
  value: string,
) {
  const list = filters[key] as string[]

  const newList = list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value]

  onChange({ ...filters, [key]: newList })
}
