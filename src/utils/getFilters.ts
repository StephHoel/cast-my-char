import { actors } from '@/constants/actors'
import type { FiltersState } from '@/types/filtersState'
import { capitalize } from './formatArray'

export function getFilterOptions() {
  const nationalities = new Set<string>()
  const eyeColors = new Set<string>()
  const hairColors = new Set<string>()
  const ageRanges = new Set<string>()
  const genders = new Set<string>()
  const tags = new Set<string>()

  for (const actor of actors) {
    actor.nationality?.forEach((n) => nationalities.add(capitalize(n)))
    actor.hairColor?.forEach((h) => hairColors.add(capitalize(h)))
    actor.ageRange?.forEach((a) => ageRanges.add(capitalize(a)))
    actor.gender?.forEach((t) => genders.add(capitalize(t)))
    actor.tags?.forEach((t) => tags.add(capitalize(t)))

    if (actor.eyeColor) eyeColors.add(capitalize(actor.eyeColor))
  }

  const filtersOptions: FiltersState = {
    name: '',
    nationality: Array.from(nationalities).sort(),
    gender: Array.from(genders).sort(),
    eyeColor: Array.from(eyeColors).sort(),
    hairColor: Array.from(hairColors).sort(),
    ageRange: Array.from(ageRanges).sort(),
    tags: Array.from(tags).sort(),
  }

  return filtersOptions
}
