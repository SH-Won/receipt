import { createBrowserRouter } from 'react-router-dom'
import App from '@/app'
import LandingPage from '@/views/LandingPage'

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
      ],
    },
  ],
  {
    basename: '/',
  }
)
