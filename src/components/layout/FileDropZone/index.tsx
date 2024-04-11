import { Accept, useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import { DropZoneRoot } from '../DropZoneRoot'
import { FileDropZoneContent } from '../FileDropZoneContent'
import { FileDropZoneWrapper } from '../FileDropZoneWrapper'

const acceptObject: Accept = {
  'application/x-pkcs12': ['.pfx'],
  'application/x-x509-ca-cert': ['.crt'],
  'application/octet-stream': ['.key'],
}

export const FileDropZone = () => {
  const onDropRejected = () => {
    toast.error('Os únicos formatos aceitos são .pfx, .crt e .key')
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptObject,
    onDropRejected,
    maxFiles: 2,
  })

  return (
    <FileDropZoneWrapper>
      <DropZoneRoot {...getRootProps()}>
        <input {...getInputProps()} />
        <FileDropZoneContent />
      </DropZoneRoot>
    </FileDropZoneWrapper>
  )
}
