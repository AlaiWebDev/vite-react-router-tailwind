function Card({ real }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">{real.title}</h2>
      <p className="text-gray-700">{real.description}</p>
    </div>
  )
}

export default Card
