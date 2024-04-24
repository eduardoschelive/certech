import { BackgroundBanner } from '@/components/layout/BackgroundBanner'
import { ConversionButton } from '@/components/layout/ConversionButton'
import { FileDropZone } from '@/components/layout/FileDropZone'
import { TutorialCircles } from '@/components/layout/TutorialCircles'
import { useFileContext } from '@/contexts/FileContext/useFileContext'

export const Home = () => {
  const { status } = useFileContext()

  const shouldShowTutorial = status === 'empty' || status === 'needOneMoreFile'

  return (
    <>
      <BackgroundBanner />
      {shouldShowTutorial ? <TutorialCircles /> : null}
      <FileDropZone />
      {!shouldShowTutorial ? <ConversionButton /> : null}
    </>
  )
}
