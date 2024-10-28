const ArtistCard = ({ image, name })=> {
  return (
    <figure className="w-0 grow opacity-70 hover:w-[24rem] hover:opacity-100 hover:contrast-125 hover:text-4xl hover:shadow-2xl transition-all duration-700 ease-in-out transform hover:scale-105">
    <h2 className="font-title text-frosted text-center mb-2">{name}</h2>
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={name}
      />
    </figure>
  )
}

export default ArtistCard