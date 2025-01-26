import type React from 'react'
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=80',
    text: 'Discover Amazing Products',
  },
  {
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=80',
    text: 'Unbeatable Deals Await',
  },
  {
    url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=80',
    text: 'Shop the Latest Trends',
  },
  {
    url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=80',
    text: 'Quality You Can Trust',
  },
  {
    url: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&q=80',
    text: 'Experience the Difference',
  },
]

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          className='absolute w-full h-full object-cover'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
        />
      </AnimatePresence>
      <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
        <h2 className='text-white text-4xl font-bold text-center px-4'>
          {images[currentIndex].text}
        </h2>
      </div>
      <button
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-2 rounded-full'
        onClick={goToPrevSlide}
      >
        &#10094;
      </button>
      <button
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-2 rounded-full'
        onClick={goToNextSlide}
      >
        &#10095;
      </button>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
