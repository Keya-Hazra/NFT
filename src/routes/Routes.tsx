import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../layout'

const Landing = React.lazy(() => import('../pages/landing'))
const NotFound = React.lazy(() => import('../pages/notFound'))

function Routes() {
  const routes = {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Landing /> },
    ],
  }

  const notFound = {
    path: '*',
    element: <NotFound />,
  }

  return useRoutes([routes, notFound])
}

export default Routes
