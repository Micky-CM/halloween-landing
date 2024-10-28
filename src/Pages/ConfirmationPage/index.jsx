import { Link } from 'react-router-dom'

const ConfirmationPage = ()=> {
  return (
    <div className="min-h-screen bg-gradient-to-b from-liliac-dark to-liliac-soft flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-title text-pumpkin mb-6">¡Compra Completa!</h1>
      <p className="text-xl text-frosted font-body italic mb-8">Gracias por tu compra. Te esperamos en el Trick or Treat Fest.</p>
      <Link to="/" className="text-pumpkin underline hover:text-amber-600">
        Volver a la página principal
      </Link>
    </div>
  )
}

export default ConfirmationPage
