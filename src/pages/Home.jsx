import Card from '../components/Card'

function Home({auteur}) {
  const realisations = [
    { title: "FreshFood",
      description: "Site de vente…",
      techno: "Site réalisé avec PHP et mySQL"
    },
    { title: "Restaurant Akira",
      description: "Site de vente…",
      techno: "Site réalisé avec WordPress"
    },
    { title: "Restaurant Akira",
      description: "Site de vente…",
      techno: "Site réalisé avec WordPress"
    }

]
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenue sur cette démonstration</h1>
      <h2>Développé par {auteur}</h2>
      {realisations.map((realisation, index) => (
          <Card key={index} real={realisation}/>
        ))}
      {/* <Card title="Carte de test" description="Carte stylisée avec Tailwind CSS" /> */}
    </div>
  )
}

export default Home
