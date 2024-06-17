import { Accept } from 'react-dropzone'

export const acceptCertificateFiles: Accept = {
  'application/x-pkcs12': ['.pfx'],
  'application/x-x509-ca-cert': ['.crt'],
  'application/octet-stream': ['.key'],
}

/**
 * Retorna os arquivos de certificado aceitos com base no array de arquivos fornecido.
 * Se o array estiver vazio, retorna os arquivos de certificado aceitos padrão.
 * Se o array contiver um único arquivo com a extensão '.crt', retorna o tipo de arquivo de chave aceito.
 * Caso contrário, retorna o tipo de arquivo de certificado aceito.
 *
 * @param files - O array de arquivos.
 * @returns O objeto accept com os tipos de arquivos aceitos.
 */
export const getAcceptedCertififacteFiles = (files: File[]): Accept => {
  if (files.length === 0) {
    return acceptCertificateFiles
  }

  if (files.length === 1 && files[0].name.endsWith('.crt')) {
    return {
      'application/octet-stream': ['.key'],
    }
  }

  return {
    'application/x-x509-ca-cert': ['.crt'],
  }
}

/**
 * Verifica se o arquivo é um arquivo PFX.
 * @param file - O arquivo a ser verificado.
 * @returns true se o arquivo for um arquivo PFX, caso contrário false.
 */
export const isPfx = (file: File) => file.name.endsWith('.pfx')

/**
 * Verifica se o arquivo é um arquivo CRT.
 * @param file - O arquivo a ser verificado.
 * @returns true se o arquivo for um arquivo CRT, caso contrário false.
 */
export const isCrt = (file: File) => file.name.endsWith('.crt')

/**
 * Verifica se o arquivo é um arquivo KEY.
 * @param file - O arquivo a ser verificado.
 * @returns true se o arquivo for um arquivo KEY, caso contrário false.
 */
export const isKey = (file: File) => file.name.endsWith('.key')

/**
 * Verifica se os arquivos são CRT e KEY.
 * @param file - Um array com os arquivos a serem verificados.
 * @returns true se os arquivos forem CRT e KEY, caso contrário false.
 */
export const isCrtAndKey = (files: File[]) => {
  const crt = files.find((file) => isCrt(file))
  const key = files.find((file) => isKey(file))

  if (!crt || !key) {
    return false
  }

  return isCrt(crt) && isKey(key)
}

/**
* Verifica se o arquivo é um arquivo CRT ou KEY.
* @param file - O arquivo a ser verificado.
* @returns true se o arquivo for um arquivo CRT ou KEY, caso contrário false.
*/
export const isCrtOrKey = (file: File) => {
  return isCrt(file) || isKey(file)
}

/**
 * Verifica se o arquivo é qualquer um dos arquivos de certificado aceitos.
 * @param file - O arquivo a ser verificado.
 * @returns true se o arquivo for um arquivo de certificado aceito, caso contrário false.
 */
export const isAnyAcceptedFile = (file: File) =>
  isPfx(file) || isCrt(file) || isKey(file)
