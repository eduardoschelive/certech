/**
 * Salva o diretório de certificados.
 * @param directory  - O diretório de certificados.
 */
export function saveCertificateDirectory(directory: string) {
    localStorage.setItem('certificate-directory', directory)
}

/**
 * Retorna o diretório de certificados.
 * @returns O diretório de certificados.
 */
export function getCertificateDirectory() {
  // @ts-ignore
  return localStorage.getItem('certificate-directory') || window.homeDirectory
}

/**
 * Seleciona um diretório para salvar os certificados. Baseado no diretório selecionado, salva o diretório de certificados.
 * Caso o diretório não seja selecionado, retorna o diretório de certificados atual.
 * @returns O diretório de certificados.
 */
export async function selectCertificateDirectory() {
  // @ts-ignore
  const directory = await window.fileAPI.selectFolder()

  if (!directory) {
    return getCertificateDirectory()
  }

  saveCertificateDirectory(directory)

  return directory
}
