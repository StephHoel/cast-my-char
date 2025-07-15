import { useEffect, useState } from 'react'
import { STORAGE_KEY } from '@/constants/cache'
import type { FiltersState } from '@/types/filtersState'

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
