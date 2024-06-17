export type ReadMethod = 'arrayBuffer' | 'string'

export type ReaderFunctions = {
  [key in ReadMethod]: () => void
}

/**
 * Lê o conteúdo de um arquivo e o retorna como uma string.
 * @param file - O arquivo a ser lido.
 * @returns Uma promise que resolve com o conteúdo do arquivo.
 * @throws Se ocorrer um erro ao ler o arquivo.
 */
export const readFromFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result as ArrayBuffer | null
      if (result === null) {
        reject('Resultado da leitura vazio')
        return
      }

      const pfxContent = new Uint8Array(result)
      const pfxContentString = String.fromCharCode.apply(
        null,
        pfxContent as unknown as number[], // Uma little gambs aqui porque o typescript é burro igual uma porta
      )
      resolve(pfxContentString)
    }

    reader.onerror = () => {
      reject('Erro ao ler arquivo')
    }

    reader.onabort = () => {
      reject('Leitura de arquivo abortada')
    }

    reader.readAsArrayBuffer(file)
  })
}
