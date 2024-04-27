import { PropsWithChildren } from 'react'

type DropZoneRootProps = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

export const DropZoneRoot = ({ children, ...props }: DropZoneRootProps) => {
  return (
    <div
      className="w-full h-36 flex flex-col items-center justify-center border-2 rounded-sm border-purple-light border-dashed cursor-pointer p-6"
      {...props}
    >
      {children}
    </div>
  )
}
