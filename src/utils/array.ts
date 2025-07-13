export function Includes(array: string[], compare: string): boolean {
  return array.map(t => t.toLowerCase()).includes(compare.toLowerCase())
}

export function Compare(array: string, compare: string): boolean {
  return array.toLowerCase() === compare.toLowerCase()
}
