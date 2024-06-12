import { useConversion } from '@/contexts/FileContext/useConversion'
import { isCrtAndKey } from '@/utils/certificate-utils'
import { delay } from '@/utils/delay'
import { createAndDownloadBlob } from '@/utils/file-utils'
import {
  convertCrtAndKeyToPfx,
  convertPfxToCrtAndKey,
} from '@/utils/forge-utils'
import { readFromFile } from '@/utils/reader-utils'
import { useState } from 'react'
import { toast } from 'react-toastify'

const FAKE_DELAY = 1 * 1000

export const ConversionButton = () => {
  const { files, password, reset } = useConversion()
  const [isConverting, setIsConverting] = useState(false)

  const handleCrtAndKeyFiles = async () => {
    const crtFile = files.find((file) => file.name.endsWith('.crt'))
    const keyFile = files.find((file) => file.name.endsWith('.key'))

    if (!crtFile || !keyFile) {
      console.error('Arquivos não encontrados')
      return
    }

    const [crtFileReaded, keyFileReaded] = await Promise.all([
      readFromFile(crtFile),
      readFromFile(keyFile),
    ])

    const result = await convertCrtAndKeyToPfx(
      crtFileReaded,
      keyFileReaded,
      password,
    )

    const fileName = crtFile.name.split('.')[0]

    createAndDownloadBlob(result, 'application/x-pkcs12', `${fileName}.pfx`)
  }

  const handlePfxFile = async () => {
    const fileReaded = await readFromFile(files[0])

    const result = await convertPfxToCrtAndKey(fileReaded, password)

    const fileName = files[0].name.split('.')[0]

    createAndDownloadBlob(
      result.crt,
      'application/x-x509-ca-cert',
      `${fileName}.crt`,
    )
    createAndDownloadBlob(
      result.keyOfCrt,
      'application/octet-stream',
      `${fileName}.key`,
    )
  }

  const onClick = async () => {
    const conversionFunction = isCrtAndKey(files) ? handleCrtAndKeyFiles : handlePfxFile

    setIsConverting(true)
    try {
      await delay(FAKE_DELAY)
      await conversionFunction()
      toast.success('Arquivo convertido com sucesso')
    } catch (error) {
      toast.error('Falha ao converter o certificado, por favor verifique os arquivos e tente novamente')
      console.error(error)
    } finally {
      setIsConverting(false)
      reset()
    }

  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <button
        className="bottom-8 bg-secondary bold text-lg text-purple-dark rounded-sm py-4 w-80 text-center"
        onClick={onClick}
        disabled={isConverting}
      >
        {isConverting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-purple-dark mr-2"></div>
            <span>Convertendo...</span>
          </div>
        ) : (
          'Converter'
        )}
      </button>
    </div>
  )
}
