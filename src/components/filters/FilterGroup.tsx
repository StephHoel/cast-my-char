import { FilterGroupProps } from "@/types/filterGroup"
import { FilterItem } from "./FilterItem"

export function FilterGroup({ title, options, selected, onToggle }: FilterGroupProps) {
  return (
    <div className="overflow-x-auto">
      <h3 className="text-sm font-semibold mb-2 text-gray-300">{title}</h3>

      <div className="flex gap-2 w-max mb-2">
        {options.map((option) => {
          return (
            <FilterItem
              key={option}
              option={option}
              isActive={selected.includes(option)}
              onToggle={onToggle}
            />
          )
        })}
      </div>
    </div>
  )
}