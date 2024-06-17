import { isPfx } from '@/utils/certificate-utils'
import { PropsWithChildren, useState } from 'react'
import { ConversionContext, ConversionStatus } from './useConversion'

/**
 * Esse componente é responsável por prover o contexto de conversão.
 * 
 * Ele controla todos os estados do contexto, como os arquivos que estão sendo
 * convertidos e a senha que está sendo utilizada. Além disso ele fornece o status da conversão.
 * 
 * @param children - Os elementos filhos que estão dentro do contexto.
 * @return As children dentro do contexto de conversão.
 */
export const ConversionContextWrapper = ({ children }: PropsWithChildren) => {
  const [files, setFiles] = useState<File[]>([])
  const [password, setPassword] = useState<string>('')

  const getConversionStatus = (): ConversionStatus => {
    if (files.length === 0) {
      return 'empty'
    }

    if (files.length === 1 && !isPfx(files[0])) {
      return 'needOneMoreFile'
    }

    return 'canConvert'
  }

  const reset = () => {
    setFiles([])
    setPassword('')
  }

  return (
    <ConversionContext.Provider
      value={{
        files,
        setFiles,
        status: getConversionStatus(),
        password,
        setPassword,
        reset,
      }}
    >
      {children}
    </ConversionContext.Provider>
  )
}
