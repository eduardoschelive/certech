import { BackgroundBanner } from '@/components/layout/BackgroundBanner'
import { ConversionButton } from '@/components/layout/ConversionButton'
import { FileDropZone } from '@/components/layout/FileDropZone'
import { PasswordInput } from '@/components/layout/PasswordInput'
import { TutorialCircles } from '@/components/layout/TutorialCircles'
import { useConversion } from '@/contexts/FileContext/useConversion'

export const Home = () => {
  const { status } = useConversion()

  const shouldShowTutorial = status === 'empty' || status === 'needOneMoreFile'

  return (
    <>
      <BackgroundBanner />
      {shouldShowTutorial ? <TutorialCircles /> : null}
      <FileDropZone />

      {!shouldShowTutorial ? (
        <>
          <PasswordInput />
          <ConversionButton />
        </>
      ) : null}
    </>
  )
}
