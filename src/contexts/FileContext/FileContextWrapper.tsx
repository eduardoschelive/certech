import { isPfx } from '@/utils/certificate-utils'
import { PropsWithChildren, useState } from 'react'
import { ConversionStatus, FileContext } from './useFileContext'

export const FileContextWrapper = ({ children }: PropsWithChildren) => {
  const [files, setFiles] = useState<File[]>([])

  const getConversionStatus = (): ConversionStatus => {
    if (files.length === 0) {
      return 'empty'
    }

    if (files.length === 1 && !isPfx(files[0])) {
      return 'needOneMoreFile'
    }

    return 'canConvert'
  }

  return (
    <FileContext.Provider
      value={{ files, setFiles, status: getConversionStatus() }}
    >
      {children}
    </FileContext.Provider>
  )
}
