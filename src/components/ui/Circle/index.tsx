import { Typography } from '../Typography'

export type CircleProps = {
  className?: string
  innerText?: string
}

export const Circle = ({ className, innerText }: CircleProps) => {
  return (
    <div
      className={
        'flex flex-row items-center justify-center w-16 h-16 rounded-full ' +
        className
      }
    >
      <Typography as="h2" className="text-white font text-2xl">
        {innerText}
      </Typography>
    </div>
  )
}
