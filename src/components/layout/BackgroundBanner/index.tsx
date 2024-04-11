import { BackgroundClouds } from '../BackgroundClouds'
import { BannerText } from '../BannerText'
import { MainIllustration } from '../MainIllustration'
import { OverlayClouds } from '../OverlayClouds'
import { WaveLayer } from '../WaveLayer'

export const BackgroundBanner = () => {
  return (
    <div className="w-full h-56">
      <div className="h-full bg-[#F3E3F7]">
        <BackgroundClouds />
      </div>
      <WaveLayer />
      <div className="absolute w-full top-2 z-10">
        <div className="flex items-center justify-around mx-16">
          <BannerText />
          <div>
            <MainIllustration />
          </div>
        </div>
      </div>
      <OverlayClouds />
    </div>
  )
}
