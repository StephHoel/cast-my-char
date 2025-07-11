export function SortAndJoin(array: string[], separator: string = ", "): string {
  return array.sort().join(separator)
}

export function CapitalizeAndFormat(array: string[], separator: string = ", "): string {
  return SortAndJoin(array.map((item) => Capitalize(item)), separator)
}

export function Capitalize(text: string): string {
  return text.split(" ").map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(' ')
}

export function Includes(array: string[], compare: string): boolean {
  return array.map(t => t.toLowerCase()).includes(compare.toLowerCase())
}

export function Compare(array: string, compare: string): boolean {
  return array.toLowerCase() === compare.toLowerCase()
}
