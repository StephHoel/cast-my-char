const separatorStand = ", "

export function sortAndJoin(array: string[], separator: string = separatorStand): string {
  return array.sort().join(separator)
}

export function capitalize(text: string): string {
  return text
    .split(" ")
    .map(t => t.charAt(0).toUpperCase() + t.slice(1))
    .join(' ')
}

export function formatArray(array: string[], separator: string = separatorStand): string {
  return sortAndJoin(array.map((item) => capitalize(item)), separator)
}