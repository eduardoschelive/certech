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
      <BackgroundBanner />\
      <div
        className={
          shouldShowTutorial
            ? 'absolute top-96 w-full'
            : 'absolute top-[340px] w-full'
        }
      >
        {shouldShowTutorial ? <TutorialCircles /> : <FileDropZone />}
      </div>
      <div className="absolute bottom-0 w-full h-52">
        {shouldShowTutorial ? <FileDropZone /> : <ConversionButton />}
      </div>
    </>
  )
}
