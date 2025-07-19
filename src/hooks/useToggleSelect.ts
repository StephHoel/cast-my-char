import { useCallback } from 'react'

export function useToggleSelect(
  selected: string[],
  onChange: (value: string[]) => void,
  isSingleValue: boolean = false,
) {
  return useCallback(
    (value: string) => {
      const nextValue = isSingleValue
        ? selected.includes(value)
          ? []
          : [value]
        : selected.includes(value)
          ? selected.filter((v) => v !== value)
          : [...selected, value]

      onChange(nextValue)
    },
    [selected, onChange, isSingleValue],
  )
}
