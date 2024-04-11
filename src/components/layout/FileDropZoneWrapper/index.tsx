import { PropsWithChildren } from 'react'

export const FileDropZoneWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute bottom-0 w-full h-52">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-2/3 h-2/3">{children}</div>
      </div>
    </div>
  )
}
