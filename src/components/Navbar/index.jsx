import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ()=> {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = ()=> {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return ()=> window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (id)=> {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`w-full h-20 fixed z-10 top-0 font-title px-12 py-6 transition-colors duration-300 ${
        isScrolled ? 'bg-night bg-opacity-80' : 'bg-night'
      } flex justify-between items-center`}
    >
      <img
        className="w-24 cursor-pointer hover:scale-125"
        src="../../../public/Trick-or-Treat-Fest-logo.png"
        alt="logo de Trick or Treat Fest"
        onClick={() => navigate('/')}
      />

      <ul className="flex items-center text-pumpkin text-xl gap-2">
        <li
          className="cursor-pointer hover:scale-110 px-4 py-1"
          onClick={() => navigate('/')}
        >
          Inicio
        </li>
        <li
          className="cursor-pointer hover:scale-110 px-4 py-1"
          onClick={() => handleNavigation('tickets')}
        >
          Tickets
        </li>
        <li
          className="cursor-pointer hover:scale-110 px-4 py-1"
          onClick={() => handleNavigation('artists')}
        >
          Artistas
        </li>
        <li
          className="cursor-pointer hover:scale-110 px-4 py-1"
          onClick={() => handleNavigation('gallery')}
        >
          Galería
        </li>
        <li
          className="cursor-pointer hover:scale-110 px-4 py-1"
          onClick={() => handleNavigation('testimonials')}
        >
          Testimonios
        </li>
        <li>
          <button
            className="bg-pumpkin text-liliac-dark font-extrabold cursor-pointer rounded-xl px-5 py-1 hover:scale-110 transition duration-300"
            onClick={() => navigate('/buy-tickets')}
          >
            Compra tus tickets
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar