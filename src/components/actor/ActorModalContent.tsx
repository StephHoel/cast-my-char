import type { ContentProps } from '@/types/content'

export function Content({ title, children }: ContentProps) {
  return (
    <div>
      <div className='text-[1.75rem] font-bold'>{title}</div>
      <div className=''>{children}</div>
    </div>
  )
}
