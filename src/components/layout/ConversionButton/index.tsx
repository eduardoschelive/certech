import { useFileContext } from '@/contexts/FileContext/useFileContext'
import { isCrtAndKey } from '@/utils/certificate-utils'
import { createAndDownloadBlob } from '@/utils/file-utils'
import {
  convertCrtAndKeyToPfx,
  convertPfxToCrtAndKey,
} from '@/utils/forge-utils'
import { readFromFile } from '@/utils/reader-utils'

export const ConversionButton = () => {
  const { files, setFiles } = useFileContext()

  const onClick = async () => {
    if (isCrtAndKey(files)) {
      const crtFile = files.find((file) => file.name.endsWith('.crt'))
      const keyFile = files.find((file) => file.name.endsWith('.key'))

      if (!crtFile || !keyFile) {
        console.error('Arquivos não encontrados')
        return
      }

      const crtFileReaded = await readFromFile(crtFile)
      const keyFileReaded = await readFromFile(keyFile)

      const result = await convertCrtAndKeyToPfx(crtFileReaded, keyFileReaded)

      const fileName = crtFile.name.split('.')[0]

      createAndDownloadBlob(result, 'application/x-pkcs12', `${fileName}.pfx`)
    } else {
      const fileReaded = await readFromFile(files[0])
      const result = await convertPfxToCrtAndKey(fileReaded)

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
    setFiles([])
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <button
        className="bottom-8 bg-[#F3E3F7] -bold text-lg text-purple-dark rounded-sm px-20 py-4"
        onClick={onClick}
      >
        Converter
      </button>
    </div>
  )
}
