import { Flip, ToastContainer } from 'react-toastify'
import { ConversionContextWrapper } from './contexts/FileContext/ConversionContextWrapper'
import { Home } from './routes/Home'

function App() {
  return (
    <>
      <ConversionContextWrapper>
        <Home />
      </ConversionContextWrapper>
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
