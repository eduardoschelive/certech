import { useConversion } from '@/contexts/FileContext/useConversion'
import { isCrt } from '@/utils/certificate-utils'

export const FiledropzoneTitle = () => {
  const { files, status } = useConversion()

  const getTextByStatus = (status: string) => {
    if (status === 'empty') {
      return (
        <>
          Solte o arquivo para fazer a{' '}
          <span className="text-purple-light">conversão</span>
        </>
      )
    }

    if (status === 'canConvert') {
      return (
        <>
          Tudo pronto, basta inserir a senha e clicar em{' '}
          <span className="text-purple-light">converter</span>
        </>
      )
    }

    if (status === 'needOneMoreFile') {
      const file = isCrt(files[0]) ? '.key' : '.crt'
      return (
        <>
          Solte o arquivo <span className="text-purple-light"> {file}</span>
        </>
      )
    }
  }

  return (
    <div className="flex flex-col items-center justify-center my-2">
      <p className="text-center text-gray text-xl">{getTextByStatus(status)}</p>
    </div>
  )
}
