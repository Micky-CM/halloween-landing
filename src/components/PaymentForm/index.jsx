import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const PaymentForm = ()=> {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    package: 'zombie',
    quantity: 1,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/confirmation-page')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-10 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-frosted font-body text-lg italic font-bold mb-2">Nombre en la tarjeta</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
          placeholder="Ej: Juan Pérez"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-frosted font-body text-lg italic font-bold mb-2">Número de tarjeta</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
          placeholder="Ej: 1234 5678 9012 3456"
          required
        />
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-frosted font-body text-lg italic font-bold mb-2">Fecha de Expiración</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
            placeholder="MM/AA"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-frosted font-body text-lg italic font-bold mb-2">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
            placeholder="123"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-frosted font-body text-lg italic font-bold mb-2">Paquete</label>
        <select
          name="package"
          value={formData.package}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
        >
          <option value="zombie">Paquete Zombie</option>
          <option value="ghost">Paquete Fantasma</option>
          <option value="vampire">Paquete Vampiro VIP</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-frosted font-body text-lg italic font-bold mb-2">Cantidad de Tickets</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          min="1"
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pumpkin font-title text-xl text-liliac-dark font-bold py-2 rounded-lg hover:scale-110 transition duration-200"
      >
        Realizar Pago
      </button>
    </form>
  )
}

export default PaymentForm
