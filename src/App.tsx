import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import DevikaSadarBazaar from './pages/DevikaSadarBazaar'
import DevikaVibe110 from './pages/DevikaVibe110'
import Reviews from './pages/Reviews'
import News from './pages/News'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devika-sadar-bazaar" element={<DevikaSadarBazaar />} />
            <Route path="/devika-vibe-110" element={<DevikaVibe110 />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App