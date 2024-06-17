import { Accept, FileRejection } from 'react-dropzone'

/**
 * Retorna um array com as extensões dos arquivos aceitos baseado no objeto accept.
 *
 * @param accept - O objeto accept com as extensões aceitas e os tipos de arquivos aceitos.
 * @returns Um array com apenas as extensões aceitas.
 */
export const getAcceptedExtensions = (accept: Accept) => {
  return Object.values(accept).flat()
}

/**
 * Retorna um array com as extensões dos arquivos rejeitados.
 *
 * @param rejectFiles - O array de rejeições de arquivos.
 * @returns Um array com os códigos de erro.
 */
export const getErrorCodes = (rejectFiles: FileRejection[]) => {
  return rejectFiles.flatMap((rejection) =>
    rejection.errors.map((error) => error.code),
  )
}

/**
 * Cria e faz o download de um blob.
 *
 * @param data - Os dados do blob.
 * @param fileType - O tipo do arquivo.
 * @param fileName - O nome do arquivo.
 */
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
