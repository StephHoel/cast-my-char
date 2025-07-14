import type { SearchBarProps } from '@/types/searchBar'

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className='mb-2'>
      <label htmlFor='search' className='mb-1 block text-sm text-gray-300'>
        Buscar por nome ou característica
      </label>
      <input
        id='search'
        type='text'
        placeholder='Digite um nome ou característica'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  )
}
