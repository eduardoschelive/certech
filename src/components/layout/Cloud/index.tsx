import cloudImage from '@/assets/cloud.png'
import { Image } from '@/components/ui/Image'

type CloudProps = {
  opacity?: 'opacity-20' | 'opacity-30' | 'opacity-100'
  zIndex?: 'z-10' | 'z-20' | 'z-30' | '-z-10' | '-z-20' | '-z-30'
}

export const Cloud = ({ opacity, zIndex }: CloudProps) => {
  return (
    <Image src={cloudImage} className={`${opacity} ${zIndex}`} alt="cloud" />
  )
}
