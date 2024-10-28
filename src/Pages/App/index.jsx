import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import Navbar from '../../components/Navbar'
import TicketsPage from '../TicketsPage'
import ConfirmationPage from '../ConfirmationPage'
import NotFoundPage from '../NotFoundPage'
import Footer from '../../components/Footer'
import './App.css'


const AppRoutes = ()=> {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/buy-tickets', element: <TicketsPage /> },
    { path: '/confirmation-page', element: <ConfirmationPage /> },
    { path: '/*', element: <NotFoundPage /> },
  ])
  return routes
}

const App = ()=> {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
