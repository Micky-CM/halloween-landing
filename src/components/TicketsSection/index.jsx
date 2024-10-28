import TicketCard from '../TicketCard'

const TicketsSection = ()=> {
  const ticketPackages = [
    {
      id: 1,
      name: 'Paquete Zombi',
      price: '$120',
      features: ['Acceso al festival', '1 bebida gratis', 'Merchandising de regalo'],
    },
    {
      id: 2,
      name: 'Paquete Fantasma',
      price: '$175',
      features: ['Acceso al festival', '2 bebidas gratis', 'Meet & Greet con artistas'],
    },
    {
      id: 3,
      name: 'Paquete Vampiro VIP',
      price: '$240',
      features: ['Acceso VIP', '4 bebidas gratis', 'Meet & Greet con artistas', 'Acceso al backstage'],
    },
  ]

  return (
    <section id='tickets' className="w-full py-20 bg-gradient-to-tl from-liliac-soft via-liliac-soft to-night flex flex-col items-center">
      <h2 className="font-title text-5xl text-pumpkin mb-8 drop-shadow-lg">Paquetes de Tickets</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {ticketPackages.map((ticket)=> (
          <TicketCard
            key={ticket.id}
            name={ticket.name}
            price={ticket.price}
            features={ticket.features}
          />
        ))}
      </div>
    </section>
  )
}

export default TicketsSection
