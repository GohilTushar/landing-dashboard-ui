import type React from 'react'
import {useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const images = [
  'image/20241212_113155.jpg',
  'image/IMG20240516111828.jpg',
  'image/20240709_151002.jpg',
  'image/436919668.jpg',
  'image/20240717_163607.jpg',
  'image/20240717_163917.jpg',
]

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalTime = 3000

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [])

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
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className='absolute w-full h-full'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
        />
      </AnimatePresence>
      <button
        className='absolute top-1/2 left-4 transform bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-2 rounded-full'
        onClick={goToPrevSlide}
      >
        &#8249;
      </button>
      <button
        className='absolute top-1/2 right-4 transform bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-2 rounded-full'
        onClick={goToNextSlide}
      >
        &#8250;
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
