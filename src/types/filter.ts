import { FiltersState } from "./filtersState"

export type FiltersProps = {
  filters: FiltersState
  onChange: (filters: FiltersState) => void
}