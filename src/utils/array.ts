import type { ActorProps } from '@/types/actor'

export function Includes(array: string[], compare: string): boolean {
  return array.map((t) => t.toLowerCase()).includes(compare.toLowerCase())
}

export function Compare(array: string, compare: string): boolean {
  return array.toLowerCase() === compare.toLowerCase()
}

export function SortArray(array: ActorProps[]): ActorProps[] {
  return array.sort((a, b) => a.name.localeCompare(b.name))
}
