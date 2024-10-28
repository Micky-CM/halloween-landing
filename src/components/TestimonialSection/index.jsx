const testimonialsData = [
  {
    id: 1,
    name: 'Ana Gómez',
    text: '¡Increíble! La mejor experiencia de Halloween, nunca había visto algo así.',
  },
  {
    id: 2,
    name: 'Luis Torres',
    text: 'El ambiente fue espeluznante y genial, ¡ya quiero volver el próximo año!',
  },
  {
    id: 3,
    name: 'Valeria Ruiz',
    text: 'Los artistas fueron impresionantes, definitivamente lo recomiendo.',
  },
  {
    id: 4,
    name: 'Carlos Pérez',
    text: 'Todo fue organizado perfectamente, valió cada centavo.',
  },
  {
    id: 5,
    name: 'María López',
    text: 'Disfruté cada momento. Desde los paquetes VIP hasta la decoración, todo estuvo perfecto.',
  },
  {
    id: 6,
    name: 'José Morales',
    text: 'Un festival increíble, ¡con un ambiente que realmente te pone los pelos de punta!',
  },
]

const TestimonialsSection = ()=> {
  return (
    <section id="testimonials" className="w-full py-20 bg-gradient-to-t from-night to-liliac-dark flex flex-col items-center">
      <h2 className="font-title text-5xl text-pumpkin mb-10 drop-shadow-lg">Testimonios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl">
        {testimonialsData.map((testimonial)=> (
          <div
            key={testimonial.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col items-center"
          >
            <p className="italic text-center mb-4">{testimonial.text}</p>
            <p className="text-amber-400 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
