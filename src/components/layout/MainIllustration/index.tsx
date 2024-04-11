import { Image } from '@/components/ui/Image'
import svg from 'src/assets/illustration.svg'

export const MainIllustration = () => {
  return (
    <Image aria-label="Ilustração principal" src={svg} width={350}/>
  )
}
