import { Accept, FileRejection } from 'react-dropzone'
import { getCertificateDirectory } from './folder'

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
 * @param data - O buffer de dados.
 * @param extension - a extensão do arquivo.
 * @param fileName - O nome do arquivo.
 */
export const writeFileOnCertificatePath = (
  data: Buffer | string,
  extension: string,
  fileName: string,
) => {
  const file = `${getCertificateDirectory()}/${fileName}.${extension}`
  // @ts-ignore
  window.fileAPI.writeFile(file, data)
}
