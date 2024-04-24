import cloudImage from '@/assets/cloud.png'
import { Image } from '@/components/ui/Image'

type CloudProps = {
  opacity?: 'opacity-20' | 'opacity-30' | 'opacity-100'
}

export const Cloud = ({ opacity }: CloudProps) => {
  return <Image src={cloudImage} className={`${opacity}`} alt="cloud" />
}
