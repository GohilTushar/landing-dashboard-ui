import type React from 'react'
import {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {FaArrowUp} from 'react-icons/fa'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 20}}
          onClick={scrollToTop}
          className='fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg'
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <FaArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
