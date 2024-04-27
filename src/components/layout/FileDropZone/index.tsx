import { useConversion } from '@/contexts/FileContext/useConversion'
import {
  getAcceptedCertififacteFiles,
  isCrtAndKey,
  isCrtOrKey,
  isPfx,
} from '@/utils/certificate-utils'
import { getAcceptedExtensions, getErrorCodes } from '@/utils/file-utils'
import { FileRejection, useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import { DropZoneRoot } from '../DropZoneRoot'
import { FileDropZoneIcon } from '../FileDropZoneIcon'
import { FiledropzoneTitle } from '../FileDropZoneTitle'
import { FileDropZoneWrapper } from '../FileDropZoneWrapper'

export const FileDropZone = () => {
  const { files, status, setFiles } = useConversion()
  const acceptedFiles = getAcceptedCertififacteFiles(files)
  const maxFiles = files.length === 0 ? 2 : 1

  const onDropRejected = (rejectFiles: FileRejection[]) => {
    const errorCodes = getErrorCodes(rejectFiles)

    const isTooManyFiles = errorCodes.includes('too-many-files')
    if (isTooManyFiles) {
      toast.error('Você pode enviar apenas 2 arquivos')
    }

    const isInvalidType = errorCodes.includes('file-invalid-type')
    if (isInvalidType) {
      toast.error(
        'Os únicos formatos aceitos são ' +
          getAcceptedExtensions(acceptedFiles).join(', '),
      )
    }
  }

  const onDropAccepted = async (acceptedFiles: File[]) => {
    const isPfxFile = acceptedFiles.length === 1 && isPfx(acceptedFiles[0])
    const isCrtOrKeyFile =
      acceptedFiles.length === 1 && isCrtOrKey(acceptedFiles[0])
    const isCrtAndKeyFiles = isCrtAndKey(acceptedFiles)

    if (isPfxFile || isCrtOrKeyFile || isCrtAndKeyFiles) {
      setFiles([...files, ...acceptedFiles])
      return
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptedFiles,
    onDropRejected,
    onDropAccepted,
    maxFiles: maxFiles,
    noDragEventsBubbling: true,
    disabled: status === 'canConvert',
  })

  return (
    <FileDropZoneWrapper>
      <DropZoneRoot {...getRootProps()}>
        <input {...getInputProps()} />
        <FileDropZoneIcon />
        <FiledropzoneTitle />
      </DropZoneRoot>
    </FileDropZoneWrapper>
  )
}
