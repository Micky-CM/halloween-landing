import Layout from '../../components/Layout'
import PaymentForm from '../../components/PaymentForm'

const TicketsPage = ()=> {
  return (
    <Layout>
      <div className='w-full flex flex-col justify-center items-center bg-gradient-to-br from-night via-liliac-dark to-liliac-soft py-20'>
        <h2 className='font-title text-pumpkin text-4xl mb-8'>Compra tus tickets</h2>
        <PaymentForm />
      </div>
    </Layout>
  )
}

export default TicketsPage