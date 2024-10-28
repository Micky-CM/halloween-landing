import { useState, useEffect } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // Función para retroceder a la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  // useEffect para cambiar automáticamente de imagen
  useEffect(() => {
    const intervalId = setInterval(nextImage, interval)
    return () => clearInterval(intervalId)
  }, [interval])

  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center">
      <button
        onClick={prevImage}
        className="absolute left-4 text-white bg-gray-700 bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
      >
        <MdArrowBackIos size={24} />
      </button>

      <div className="w-full h-full flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full rounded-2xl object-cover"
          />
        ))}
      </div>

      <button
        onClick={nextImage}
        className="absolute right-4 text-white bg-gray-700 bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
      >
        <MdArrowForwardIos size={24} />
      </button>
    </div>
  )
}

export default ImageCarousel
