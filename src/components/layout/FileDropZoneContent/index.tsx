import { useFileContext } from '@/contexts/FileContext/useFileContext'
import { isCrt } from '@/utils/certificate-utils'
import { IoCloudUploadOutline } from 'react-icons/io5'

const StatusEmpty = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <IoCloudUploadOutline size={58} className="text-purple-light" />
      <p className="text-center text-gray text-2xl">
        Solte o arquvio para fazer a{' '}
        <span className="text-purple-light">conversão</span>
      </p>
    </div>
  )
}

const StatusCanConvert = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <IoCloudUploadOutline size={58} className="text-purple-light" />
      <p className="text-center text-gray text-2xl">
        Tudo pronto, basta clicar em{' '}
        <span className="text-purple-light">converter</span>
      </p>
    </div>
  )
}

const StatusNeedOneMoreFile = ({ file }: { file: string }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <IoCloudUploadOutline size={58} className="text-purple-light" />
      <p className="text-center text-gray text-2xl">
        Solte o arquivo <span className="text-purple-light">{file}</span>
      </p>
    </div>
  )
}
export const FileDropZoneContent = () => {
  const { files, status } = useFileContext()

  if (status === 'empty') {
    return <StatusEmpty />
  }

  if (status === 'canConvert') {
    return <StatusCanConvert />
  }

  if (status === 'needOneMoreFile') {
    const file = isCrt(files[0]) ? '.key' : '.crt'
    return <StatusNeedOneMoreFile file={file} />
  }
}
