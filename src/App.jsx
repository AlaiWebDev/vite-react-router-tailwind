import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Header from './components/Header'

function App() {
  const author = "Alain, mentor CEF";
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home auteur={author} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
