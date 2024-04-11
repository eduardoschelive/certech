import { Cloud } from '../Cloud'

export const OverlayClouds = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="relative z-40 w-72 -top-24 -left-20">
        <Cloud zIndex="z-30" opacity="opacity-100" />
      </div>
      <div className="relative z-40 w-72 -top-72 -right-40">
        <Cloud zIndex="z-30" opacity="opacity-100" />
      </div>
    </div>
  )
}
