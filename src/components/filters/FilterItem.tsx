import type { FilterItemProps } from "@/types/filterItem";

export function FilterItem({ option, isActive, onToggle }: FilterItemProps) {
  return (
    <button
      type="button"
      onClick={() => onToggle(option)}
      className={`
        px-3 py-1 rounded-full border text-sm transition 
        ${isActive
          ? 'bg-blue-500 text-white border-blue-500'
          : 'bg-gray-800 text-gray-300 border-gray-600 hover:border-gray-400'
        }
      `}
    >
      {option}
    </button>
  )
}