import { Home } from '@/routes/Home'
import { RouteObject, createBrowserRouter } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
]

export const router = createBrowserRouter(routes)
