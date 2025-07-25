import Card from '../components/Card'
import Modal from '../components/Modal'
import DatasService from '../services/DatasService'
function Home({auteur}) {
  const realisations = DatasService()
  return (
    <div className="w-2/3 p-4 m-auto">
      <h1 className="text-2xl font-bold mb-4">Bienvenue sur cette démonstration</h1>
      <h2>Développé par {auteur}</h2>
      <section className='flex flex-row flex-wrap justify-center gap-8 my-8'>
        {realisations.projects.map((project) => (
          <Card real={project} />
        ))}
      </section>
      <Modal />
      {/* <Card title="Carte de test" description="Carte stylisée avec Tailwind CSS" /> */}
    </div>
  )
}

export default Home
