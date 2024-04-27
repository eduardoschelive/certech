import { createContext, useContext } from 'react'

export type ConversionStatus = 'empty' | 'canConvert' | 'needOneMoreFile'

type ConversionContextType =
  | {
      files: File[]
      setFiles: React.Dispatch<React.SetStateAction<File[]>>
      status: ConversionStatus
      password: string
      setPassword: React.Dispatch<React.SetStateAction<string>>
      reset: () => void
    }
  | undefined

export const ConversionContext = createContext<ConversionContextType>(undefined)

export const useConversion = () => {
  const context = useContext(ConversionContext)

  if (!context) {
    throw new Error(
      'useConversion deve ser usado dentro de um ConversionProvider',
    )
  }

  return context
}
