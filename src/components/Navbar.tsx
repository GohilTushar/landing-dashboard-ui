import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'
import {FaSun, FaMoon, FaBars, FaTimes} from 'react-icons/fa'
import {useTheme} from '../contexts/ThemeContext'

const Navbar: React.FC = () => {
  const {theme, toggleTheme} = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = (path: string, elementId?: string) => {
    if (elementId) {
      const targetElement = document.getElementById(elementId)
      if (targetElement) {
        targetElement.scrollIntoView({behavior: 'smooth'})
        return
      }
    }
    navigate(path)
    if (!elementId) {
      setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 50)
    }
  }

  const navItems = [
    {name: 'Home', action: () => handleNavigation('/')},
    {name: 'About Us', action: () => handleNavigation('/')},
    {name: 'Our Products', action: () => handleNavigation('/products', 'featured-products')},
    {name: 'Conatact Us', action: () => handleNavigation('/')},
  ]

  const handleMobileNavClick = (action: () => void) => {
    setIsOpen(false) // Close menu first
    setTimeout(action, 300) // Wait for menu animation to complete
  }

  const renderNavItems = (isMobile: boolean) =>
    navItems.map((item) => (
      <button
        key={item.name}
        onClick={() => (isMobile ? handleMobileNavClick(item.action) : item.action())}
        className='relative text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 
                   transition-colors px-3 py-2 group'
      >
        {item.name}
        <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
      </button>
    ))

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <Link
            to='/'
            className='text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors'
          >
            <img className='w-[150px] h-[150px]' src='../public/logos/logo2.png' />
          </Link>
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6'>
            {renderNavItems(false)}
            <button
              onClick={toggleTheme}
              className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors'
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
          {/* Hamburger Menu and Theme Toggle */}
          <div className='md:hidden flex items-center space-x-4'>
            <button
              onClick={toggleTheme}
              className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors'
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3}}
            className='md:hidden bg-white dark:bg-gray-800 shadow-md'
          >
            <div className='container mx-auto px-4 py-2 flex flex-col space-y-2'>
              {renderNavItems(true)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
