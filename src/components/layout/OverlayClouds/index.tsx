import { Cloud } from '../Cloud'

export const OverlayClouds = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="relative z-40 w-72 -top-9 -left-20">
        <Cloud opacity="opacity-100" />
      </div>
      <div className="relative z-40 w-72 -top-56 -right-36">
        <Cloud opacity="opacity-100" />
      </div>
    </div>
  )
}
