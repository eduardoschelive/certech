import { PropsWithChildren } from 'react'

export const FileDropZoneWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-52 flex items-center justify-center">
      <div className="w-2/3 h-2/3">{children}</div>
    </div>
  )
}
