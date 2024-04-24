import { Accept } from 'react-dropzone'

export const acceptCertificateFiles: Accept = {
  'application/x-pkcs12': ['.pfx'],
  'application/x-x509-ca-cert': ['.crt'],
  'application/octet-stream': ['.key'],
}

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

export const isPfx = (file: File) => file.name.endsWith('.pfx')
export const isCrt = (file: File) => file.name.endsWith('.crt')
export const isKey = (file: File) => file.name.endsWith('.key')

export const isCrtAndKey = (files: File[]) => {
  const crt = files.find((file) => isCrt(file))
  const key = files.find((file) => isKey(file))

  if (!crt || !key) {
    return false
  }

  return isCrt(crt) && isKey(key)
}

export const isCrtOrKey = (file: File) => {
  return isCrt(file) || isKey(file)
}

export const isAnyAcceptedFile = (file: File) =>
  isPfx(file) || isCrt(file) || isKey(file)
