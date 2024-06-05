import { isPfx } from '@/utils/certificate-utils'
import { PropsWithChildren, useState } from 'react'
import { ConversionContext, ConversionStatus } from './useConversion'

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
