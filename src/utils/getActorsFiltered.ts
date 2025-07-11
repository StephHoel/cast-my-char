import { ActorProps } from "@/types/actor"
import { FiltersState } from "@/types/filtersState"
import { Compare, Includes } from "./array"

export function getActorsFiltered(filters: FiltersState, actors: ActorProps[]) {
  const trimmedName = filters.name.trim().toLowerCase()

  return actors.filter((actor: ActorProps) => {
    const matchSearch =
      trimmedName === '' ||
      actor.name.toLowerCase().includes(trimmedName) ||
      actor.tags?.some((tag) => tag.toLowerCase().includes(trimmedName))


    const matchNationality =
      filters.nationality.length === 0 ||
      filters.nationality.some((nat) => Includes(actor.nationality, nat))

    const matchEyeColor =
      filters.eyeColor.length === 0 ||
      filters.eyeColor.some((eye) => Compare(actor.eyeColor, eye))

    const matchHairColor =
      filters.hairColor.length === 0 ||
      filters.hairColor.some((color) => Includes(actor.hairColor, color))

    const matchAgeRange =
      filters.ageRange.length === 0 ||
      filters.ageRange.some((range) => Includes(actor.ageRange, range))

    const matchGender =
      filters.gender.length === 0 ||
      filters.gender.some((gender) => Includes(actor.gender, gender))

    const matchTags =
      !filters.tags || filters.tags.length === 0 ||
      filters.tags.some((tag) => Includes(actor.tags, tag))

    return (
      matchSearch &&
      matchNationality &&
      matchEyeColor &&
      matchHairColor &&
      matchAgeRange &&
      matchGender &&
      matchTags
    )
  })
}