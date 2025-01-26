import type React from 'react'
import {motion} from 'framer-motion'
import {FaThLarge, FaList} from 'react-icons/fa'

interface ViewToggleProps {
  view: 'grid' | 'list'
  setView: (view: 'grid' | 'list') => void
}

const ViewToggle: React.FC<ViewToggleProps> = ({view, setView}) => {
  return (
    <div className='flex space-x-2 mb-4'>
      <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        onClick={() => setView('grid')}
        className={`px-4 py-2 rounded-md ${
          view === 'grid'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
        }`}
      >
        <FaThLarge className='inline-block mr-2' /> Grid
      </motion.button>
      <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        onClick={() => setView('list')}
        className={`px-4 py-2 rounded-md ${
          view === 'list'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
        }`}
      >
        <FaList className='inline-block mr-2' /> List
      </motion.button>
    </div>
  )
}

export default ViewToggle
