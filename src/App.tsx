import { BackgroundBanner } from '@/components/layout/BackgroundBanner'
import { Flip, ToastContainer } from 'react-toastify'
import { FileDropZone } from './components/layout/FileDropZone'
import { TutorialCircles } from './components/layout/TutorialCircles'

function App() {
  return (
    <>
      <div className="absolute inset-0">
        <BackgroundBanner />
        <TutorialCircles />
        <FileDropZone />
      </div>
      <ToastContainer
        transition={Flip}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
