import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './layout/Header.js'
import Footer from './layout/Footer.js'

import Home from './pages/Home'
import Error from './pages/Error.js'
import About from './pages/About.js'

import './App.css'

export default function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    )
}
