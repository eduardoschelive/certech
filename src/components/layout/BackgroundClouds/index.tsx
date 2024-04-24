import { Cloud } from '../Cloud'

export const BackgroundClouds = () => {
  return (
    <>
      <div className="absolute top-10 -left-10 w-32 z-10">
        <Cloud opacity="opacity-30" />
      </div>
      <div className="absolute top-2 left-1/2 w-32 z-10">
        <Cloud opacity="opacity-30" />
      </div>
      <div className="absolute top-32 left-1/3 w-40 z-10">
        <Cloud opacity="opacity-30" />
      </div>
    </>
  )
}
