import type React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

interface ProductCardProps {
  id: string
  title: string
  image: string
  description: string
}

const ProductCard: React.FC<ProductCardProps> = ({id, title, image, description}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className='relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{scale: 1.05}}
      transition={{type: 'spring', stiffness: 300}}
    >
      <img src={image || '/placeholder.svg'} alt={title} className='w-full h-64 object-cover' />
      <motion.div
        className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'
        initial={{opacity: 0}}
        animate={{opacity: isHovered ? 1 : 0}}
        transition={{duration: 0.3}}
      >
        <Link to={`/products/${id}`}>
          <motion.button
            className='bg-blue-600 text-white px-4 py-2 rounded-md'
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
          >
            View Product
          </motion.button>
        </Link>
      </motion.div>
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200'>{title}</h3>
        <p className='text-gray-600 dark:text-gray-400'>{description}</p>
      </div>
    </motion.div>
  )
}

export default ProductCard
