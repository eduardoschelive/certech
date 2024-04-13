import { Accept, FileRejection } from 'react-dropzone'

export const getAcceptedExtensions = (accept: Accept) => {
  return Object.values(accept).flat()
}

export const getErrorCodes = (rejectFiles: FileRejection[]) => {
  return rejectFiles.flatMap((rejection) =>
    rejection.errors.map((error) => error.code),
  )
}

export const createAndDownloadBlob = (
  data: BlobPart,
  fileType: string,
  fileName: string,
) => {
  const blob = new Blob([data], { type: fileType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  a.click()
}
