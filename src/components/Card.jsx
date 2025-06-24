
function Card({ real }) {
  const imageUrl = new URL(`../assets/img/${real.picture}`, import.meta.url).href;
  return (
    <article className="flex flex-col items-center w-1/4 bg-white shadow-md rounded-lg border border-gray-200">
      <img src={imageUrl} alt="" />
      <h2 className="text-xl font-semibold mb-2">{real.title}</h2>
      <p className="text-gray-700 mb-2">{real.description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">Voir le site</button>
      
      <p className="w-full p-3 bg-gray-200 border border-gray-300 self-end text-center">{real.techno}</p>
    </article>
  )
}

export default Card
