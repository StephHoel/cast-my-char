import { type KeyboardEvent, useState } from 'react'
import type { FormFieldProps } from '@/types/formField'
import { FilterItem } from '../filters/FilterItem'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

export function TagsInputField({
  label,
  description,
  name,
  control,
  isSubmitting,
  placeholder,
}: FormFieldProps) {
  const [inputValue, setInputValue] = useState('')

  const handleAdd = (
    e: KeyboardEvent<HTMLInputElement>,
    value: string,
    onChange: (val: string[]) => void,
    current: string[],
  ) => {
    const trimmed = value.trim()
    if (!['Enter', 'Tab', ','].includes(e.key) || !trimmed) return

    e.preventDefault()

    const items = trimmed
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag && !current.includes(tag))

    if (items.length) onChange([...current, ...items])

    setInputValue('')
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selected = [...field.value]

        return (
          <FormItem>
            <div className='flex flex-col gap-2'>
              <FormLabel className='text-base font-medium'>{label}</FormLabel>
              <FormDescription>{description}</FormDescription>
            </div>

            <FormControl>
              <div className='space-y-2'>
                <div className='flex flex-wrap gap-2 h-fit rounded-md focus-within:ring-2 focus-within:ring-ring'>
                  {selected.map((tag: string, idx: number) => (
                    <FilterItem
                      key={tag}
                      option={tag}
                      isActive={selected.includes(tag)}
                      onToggle={() =>
                        field.onChange(selected.filter((_, i) => i !== idx))
                      }
                    />
                  ))}
                </div>

                <Input
                  {...field}
                  disabled={isSubmitting}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) =>
                    handleAdd(e, inputValue, field.onChange, selected)
                  }
                  placeholder={placeholder}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
