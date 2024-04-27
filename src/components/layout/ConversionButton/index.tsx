import { useConversion } from '@/contexts/FileContext/useConversion'
import { isCrtAndKey } from '@/utils/certificate-utils'
import { createAndDownloadBlob } from '@/utils/file-utils'
import {
  convertCrtAndKeyToPfx,
  convertPfxToCrtAndKey,
} from '@/utils/forge-utils'
import { readFromFile } from '@/utils/reader-utils'

export const ConversionButton = () => {
  const { files, password, reset } = useConversion()

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
    if (isCrtAndKey(files)) {
      await handleCrtAndKeyFiles()
    } else {
      await handlePfxFile()
    }

    reset()
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <button
        className="bottom-8 bg-secondary -bold text-lg text-purple-dark rounded-sm px-20 py-4"
        onClick={onClick}
      >
        Converter
      </button>
    </div>
  )
}
