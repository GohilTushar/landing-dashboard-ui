import type React from 'react'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import ImageSlider from '../components/ImageSlider'
import ProductCard from '../components/ProductCard'

interface Product {
  id: string
  title: string
  image: string
  description: string
}

const products: Product[] = [
  {
    id: '1',
    title: 'Product 1',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Description for Product 1',
  },
  {
    id: '2',
    title: 'Product 2',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Description for Product 2',
  },
  {
    id: '3',
    title: 'Product 3',
    image:
      'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Description for Product 3',
  },
]

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleViewAllProducts = () => {
    navigate('/products')
  }

  return (
    <>
      <ImageSlider />
      <motion.div
        id='featured-products'
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className='container mx-auto px-4 py-8'
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className='mt-8 text-center'>
          <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className='bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold'
            onClick={handleViewAllProducts}
          >
            View All Products
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}

export default Home
