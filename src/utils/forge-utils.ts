import forge from 'node-forge'
import { Buffer } from "buffer"


/**
 * Converte um buffer PFX em um certificado e chave privada.
 * @param buffer - O buffer do PFX.
 * @param password - A senha do PFX.
 * @returns Um objeto contendo o certificado e a chave privada.
 * @throws Se ocorrer um erro ao converter o PFX.
 */
export const convertPfxToCrtAndKey = async (
  buffer: string,
  password: string,
) => {
  const p12Asn1 = forge.asn1.fromDer(buffer, false)

  const p12Parsed = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, password)

  const keyBag = p12Parsed.getBags({
    bagType: forge.pki.oids.pkcs8ShroudedKeyBag,
  })[forge.pki.oids.pkcs8ShroudedKeyBag]
  const cerBag = p12Parsed.getBags({ bagType: forge.pki.oids.certBag })[
    forge.pki.oids.certBag
  ]

  if (keyBag === undefined || cerBag === undefined) {
    throw new Error('Erro ao extrair chave privada e certificado')
  }

  const key = keyBag[0]
  const cert = cerBag[0]

  if (key === undefined || cert === undefined) {
    throw new Error('Erro ao extrair chave privada e certificado')
  }

  if (!key.key || !cert.cert) {
    throw new Error('Erro ao extrair chave privada e certificado')
  }

  const crt = forge.pki.certificateToPem(cert.cert)
  const keyOfCrt = forge.pki.privateKeyToPem(key.key)

  return { crt, keyOfCrt }
}

export const convertCrtAndKeyToPfx = async (
  crtBuffer: string,
  keyBuffer: string,
  password: string,
) => {
  const certAsn1 = forge.pki.certificateFromPem(crtBuffer)
  const keyAsn1 = forge.pki.decryptRsaPrivateKey(keyBuffer, password)

  const p12 = forge.pkcs12.toPkcs12Asn1(keyAsn1, certAsn1, password)

  const p12Der = forge.asn1.toDer(p12).getBytes()

  return Buffer.from(p12Der, 'binary')
}
