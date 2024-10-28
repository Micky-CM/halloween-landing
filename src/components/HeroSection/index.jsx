import { useNavigate } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = ()=> {
  const navigate = useNavigate()
  return (
    <section className="w-full h-[36rem] flex justify-evenly bg-gradient-to-b from-night via-night to-liliac-dark">
      <figure className="w-3/6">
        <img
          className="w-full h-full object-cover hero"
          src="../../../public/skeleton-rocker.png"
          alt="skeleton rocker"
        />
      </figure>
      <div className="flex flex-col items-center justify-center px-24">
        <p className="font-title text-xl text-frosted mb-3">30 y 31 de octubre</p>
        <h2 className="font-title text-pumpkin text-5xl mb-6">Trick or Treat Fest 2024</h2>
        <p className="font-body text-frosted text-2xl italic text-center mb-8">Vive Halloween como nunca antes. Prepárate para dos días con lo mejor del heavy y power metal, disfraces y pura adrenalina.</p>
        <button
          className="font-title bg-pumpkin text-dark-purple text-2xl font-bold cursor-pointer rounded-xl px-7 py-3 hover:scale-110 transition duration-300"
          onClick={() => navigate('/buy-tickets')}
        >
          Consigue tus Tickets
        </button>
      </div>
    </section>
  )
}

export default HeroSection
