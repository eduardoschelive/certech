import { BannerText } from '../BannerText'
import { Cloud } from '../Cloud'
import { MainIllustration } from '../MainIllustration'
import { WaveLayer } from '../WaveLayer'

export const BackgroundBanner = () => {
  return (
    <div className="w-full">
      <div className="bg-secondary">
        <div className="flex items-center justify-around mx-32">
          <div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="max-w-32 top-10 -left-6 absolute">
                <Cloud opacity="opacity-30" zIndex="z-10" />
              </div>
              <div className="max-w-32 top-4 right-1/2 absolute">
                <Cloud opacity="opacity-30" zIndex="z-10" />
              </div>
              <div className="max-w-32 top-72 left-1/4 absolute">
                <Cloud opacity="opacity-30" zIndex="z-10" />
              </div>
            </div>
            <BannerText />
          </div>
          <div className="min-w-96">
            <MainIllustration />
          </div>
        </div>
      </div>
      <div className="relative -z-10 -top-16">
        <WaveLayer />
      </div>
      <div className="max-w-72 bottom-72 -left-16 absolute">
        <Cloud opacity="opacity-100" zIndex="z-10" />
      </div>
      <div className="max-w-72 top-14 -right-36 absolute overflow-x-clip">
        <Cloud opacity="opacity-100" zIndex="z-10" />
      </div>
    </div>
  )
}
