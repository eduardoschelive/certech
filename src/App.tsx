import { Flip, ToastContainer } from 'react-toastify'
import { FileContextWrapper } from './contexts/FileContext/FileContextWrapper'
import { Home } from './routes/Home'

function App() {
  return (
    <>
      <FileContextWrapper>
        <Home />
      </FileContextWrapper>
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
