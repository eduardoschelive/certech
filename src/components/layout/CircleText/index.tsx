import { Circle } from '@/components/ui/Circle'
import { Typography } from '@/components/ui/Typography'
import { PropsWithChildren } from 'react'

type CircleTextProps = {
  circleInnerText?: string
}

export const CircleText = ({
  children,
  circleInnerText,
}: PropsWithChildren<CircleTextProps>) => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <Circle className="bg-purple-light" innerText={circleInnerText} />
      <Typography as="h1" className="max-w-60 text-mainText">
        {children}
      </Typography>
    </div>
  )
}
