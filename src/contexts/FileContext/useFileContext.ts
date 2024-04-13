import { createContext, useContext } from 'react'

export type ConversionStatus = 'empty' | 'canConvert' | 'needOneMoreFile'

type FileContext =
  | {
      files: File[]
      setFiles: React.Dispatch<React.SetStateAction<File[]>>
      status: ConversionStatus
    }
  | undefined

export const FileContext = createContext<FileContext>(undefined)

export const useFileContext = () => {
  const context = useContext(FileContext)

  if (!context) {
    throw new Error('useFileContext deve ser usado dentro de um FileProvider')
  }

  return context
}
