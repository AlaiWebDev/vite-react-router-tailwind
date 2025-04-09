import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mon application React</h1>
      <nav className="flex gap-4">
        <Link to="/" className="hover:bg-green-800 inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white">Accueil</Link>
        <Link to="/about" className="hover:bg-green-800 inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white">À propos</Link>
      </nav>
    </header>
  )
}

export default Header
