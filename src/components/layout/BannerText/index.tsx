import { Typography } from '@/components/ui/Typography'
import { MainText } from '../MainText'

export const BannerText = () => {
  return (
    <div className="flex flex-col gap-3">
      <MainText />
      <Typography as="h1" className="text-purple-light text-2xl font-bold">
        Arquivos de certificados digitais
      </Typography>
      <Typography as="p" className="text-gray-500 text-xl">
        Permite que os usuários encontrem um conversor completo
        <br /> para .PFX, .CRT + .KEY
      </Typography>
    </div>
  )
}
