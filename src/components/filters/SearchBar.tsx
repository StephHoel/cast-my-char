import type { SearchBarProps } from "@/types/searchBar";

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mb-2">
      <label htmlFor="search" className="block text-sm mb-1 text-gray-300">
        Buscar por nome ou característica
      </label>
      <input
        id="search"
        type="text"
        placeholder="Digite um nome ou característica"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}