import { createContext, useContext } from 'react'

/**
 * Representa o status de uma conversão.
 * 
 * - 'empty': Indica que não há arquivos para converter.
 * - 'canConvert': Indica que os arquivos podem ser convertidos.
 * - 'needOneMoreFile': Indica que é necessário mais um arquivo para a conversão.
 */
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

/**
 * Hook personalizado que fornece acesso ao ConversionContext.
 * Lança um erro se usado fora de um ConversionProvider.
 *
 * @returns O objeto ConversionContext.
 * @throws Se usado fora de um ConversionProvider.
 */
export const useConversion = () => {
  const context = useContext(ConversionContext)

  if (!context) {
    throw new Error(
      'useConversion deve ser usado dentro de um ConversionProvider',
    )
  }

  return context
}
