'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { useToggleSelect } from '@/hooks/useToggleSelect'
import type { SelectFieldProps } from '@/types/selectField'
import { FilterItem } from '../filters/FilterItem'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'

export function SelectField({
  label,
  description,
  options,
  name,
  control,
  isSingleSelection = false,
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false)

  function openCloseOptionsBox() {
    setIsOpen(!isOpen)
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selected = [...field.value]

        const toggle = useToggleSelect(
          selected,
          field.onChange,
          isSingleSelection,
        )

        return (
          <FormItem>
            <div
              className='flex flex-col cursor-pointer gap-2'
              onClick={openCloseOptionsBox}
            >
              <div
                className='flex cursor-pointer items-center justify-between gap-2'
                onClick={openCloseOptionsBox}
              >
                <FormLabel className='text-base font-medium'>{label}</FormLabel>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              <FormDescription>{description}</FormDescription>
            </div>

            <FormControl>
              <div
                className={`mt-2 flex flex-wrap gap-2 transition-all duration-200 ${
                  isOpen ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                {options.map((option) => {
                  return (
                    <FilterItem
                      key={option}
                      option={option}
                      isActive={selected.includes(option)}
                      onToggle={toggle}
                    />
                  )
                })}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
