import { FiltersState } from '@/types/filtersState'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cast_my_char_filters'

export function useFiltersStorage(initial: FiltersState) {
  const [filters, setFilters] = useState<FiltersState>(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(filters))
  }, [filters])

  return [filters, setFilters] as const
}
