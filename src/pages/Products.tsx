import type React from 'react'
import {useState} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ViewToggle from '../components/ViewToggle'
import {products} from '../products'

const Products: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className='container mx-auto px-4 py-8'
    >
      <h1 className='text-4xl mt-16 font-bold mb-6 text-gray-800 dark:text-gray-200'>Our Products</h1>
      <ViewToggle view={view} setView={setView} />
      <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'space-y-6'}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
          >
            {view === 'grid' ? (
              <ProductCard {...product} />
            ) : (
              <div className='relative flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden group'>
                <img
                  src={product.image || '/placeholder.svg'}
                  alt={product.title}
                  className='w-24 h-24 object-cover rounded-md'
                />
                <div className='flex-grow'>
                  <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                    {product.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400'>{product.description}</p>
                </div>
                <div className='rounded-md inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <Link to={`/products/${product.id}`}>
                    <motion.button
                      whileHover={{scale: 1.05}}
                      whileTap={{scale: 0.95}}
                      className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
                    >
                      View Product
                    </motion.button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Products
