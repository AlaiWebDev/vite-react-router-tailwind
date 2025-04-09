import Card from '../components/Card'

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenue sur cette démonstration</h1>
      <Card title="Carte de test" description="Carte stylisée avec Tailwind CSS" />
    </div>
  )
}

export default Home
