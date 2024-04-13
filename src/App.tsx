import { RouterProvider } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'
import { FileContextWrapper } from './contexts/FileContext/FileContextWrapper'
import { router } from './router'

function App() {
  return (
    <>
      <FileContextWrapper>
        <RouterProvider router={router} />
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
