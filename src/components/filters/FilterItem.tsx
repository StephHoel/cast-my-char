import type { FilterItemProps } from '@/types/filterItem'

export function FilterItem({ option, isActive, onToggle }: FilterItemProps) {
  return (
    <button
      type='button'
      onClick={() => onToggle(option)}
      className={`
        rounded-full border px-3 py-1 text-sm transition 
        ${
          isActive
            ? 'border-blue-500 bg-blue-500 text-white'
            : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-400'
        }
      `}
    >
      {option}
    </button>
  )
}
