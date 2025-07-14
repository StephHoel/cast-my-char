import type { FilterGroupProps } from '@/types/filterGroup'
import { FilterItem } from './FilterItem'

export function FilterGroup({ title, options, selected, onToggle }: FilterGroupProps) {
  return (
    <div className=''>
      <h3 className='mb-2 text-sm font-semibold text-gray-300'>{title}</h3>

      <div className='overflow-x-auto'>
        <div className='mb-2 flex w-max gap-2'>
          {options.map((option) => {
            return <FilterItem key={option} option={option} isActive={selected.includes(option)} onToggle={onToggle} />
          })}
        </div>
      </div>
    </div>
  )
}
