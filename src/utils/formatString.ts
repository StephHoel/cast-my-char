export function Split(text: string, separator: string = ","): string[] {
  return text.split(separator).map((tx) => tx.trim())
}