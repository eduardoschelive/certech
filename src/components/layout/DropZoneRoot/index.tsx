import { PropsWithChildren } from 'react'

type DropZoneRootProps = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

export const DropZoneRoot = ({ children, ...props }: DropZoneRootProps) => {
  return (
    <div
      className="w-full h-full flex items-center justify-center border-2 rounded-sm border-purple-light border-dashed border- cursor-pointer"
      {...props}
    >
      {children}
    </div>
  )
}
