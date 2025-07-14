export type FilterGroupProps = {
  title: string
  options: string[]
  selected: string[] | string
  onToggle: (value: string) => void
}
