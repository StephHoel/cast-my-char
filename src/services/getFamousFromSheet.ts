import { SHEET_URL } from "@/constants/routes"
import type { ActorProps } from "@/types/actor"
import type { RawActorProps } from "@/types/rawActor"
import { Split } from "@/utils/formatString"
import Papa from "papaparse"

export async function getFamous(): Promise<ActorProps[]> {
  const response = await fetch(SHEET_URL)
  const csvText = await response.text()

  return new Promise((resolve, _) => {
    Papa.parse<RawActorProps>(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const actors: ActorProps[] = results.data.map((entry) => ({
          id: entry.id,
          name: entry.name,
          nationality: Split(entry.nationality),
          eyeColor: entry.eyeColor.trim(),
          hairColor: Split(entry.hairColor),
          ageRange: Split(entry.ageRange),
          gender: Split(entry.gender),
          tags: Split(entry.tags),
          photoUrl: {
            big: entry['photoUrl.big'],
            short: entry['photoUrl.short'],
          },
          isIntegrated: entry.isIntegrated
        }))
        resolve(actors)
      }
    })
  })
}