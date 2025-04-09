import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="p-4">
      <h1 className="text-2xl m-5 font-bold text-red-600">Oups, la page que vous avez demandé est introuvable…</h1>
      <Link to="/" className="hover:bg-green-800 inline-block border border-blue-500 rounded m-5 py-1 px-3 bg-blue-500 text-white">Retour accueil</Link>
    </div>
  )
}

export default NotFound
