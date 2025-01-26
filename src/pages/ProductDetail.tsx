import type React from 'react'
import {useParams} from 'react-router-dom'
import {motion} from 'framer-motion'
import {products} from '../products'

const ProductDetail: React.FC = () => {
  const {id} = useParams<{id: string}>()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <div className='container mx-auto px-4 py-8'>Product not found</div>
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className='container mx-auto px-4 py-8'
    >
      <div className='bg-white mt-16 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <img
              className='h-48 w-full object-cover md:w-48'
              src={product.image || '/placeholder.svg'}
              alt={product.title}
            />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              {product.id}
            </div>
            <h2 className='block mt-1 text-lg leading-tight font-medium text-black dark:text-white'>
              {product.title}
            </h2>
            <p className='mt-2 text-gray-500 dark:text-gray-300'>{product.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductDetail
