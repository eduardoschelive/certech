/**
 * Atrasa a execução de uma função por um número específico de milissegundos.
 * Serve para simular um atraso em uma operação assíncrona e dar a impressão de que algo está carregando.
 * 
 * @param ms - O número de milissegundos para atrasar a execução.
 * @returns Uma promise que resolve após o atraso.
 */
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}