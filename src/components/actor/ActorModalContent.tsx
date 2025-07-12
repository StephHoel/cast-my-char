import type { ContentProps } from "@/types/content";

export function Content({ title, children }: ContentProps) {
  return (
    <div>
      <div className='font-bold text-[1.75rem]'>{title}</div>
      <div className=''>{children}</div>
    </div>
  )
}