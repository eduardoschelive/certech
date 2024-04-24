import { PropsWithChildren } from 'react'

export const FileDropZoneWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-2/3 h-full">{children}</div>
    </div>
  )
}
