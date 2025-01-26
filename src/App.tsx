import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import {ThemeProvider} from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300'>
          <Navbar />
          <AnimatePresence mode='wait'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:id' element={<ProductDetail />} />
            </Routes>
          </AnimatePresence>
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
