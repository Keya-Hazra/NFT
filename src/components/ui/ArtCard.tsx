import { motion } from 'framer-motion'
import { item } from '../../utils/animation'
import ImageContainer from './ImageContainer'
import PrimaryButton from './PrimaryButton'

interface props{
  img:string;
  author:string;
  price:string;
  name:string;
}

function ArtCard({
  img, author, price, name,
}:props) {
  return (
    <motion.li
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      variants={item}
      className="transition duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.90 }}
    >
      <div className="p-4 space-y-4 transition rounded-lg shadow-lg bg-white/10 group-hover:bg-white/50">
        <ImageContainer src={img} alt={img} className="object-scale-down w-full xs:object-fill" />
        <div className="flex flex-wrap justify-between">
          <div className="space-y-2">
            <p>
              @
              {author}
            </p>
            <h4 className="text-xl font-semibold">{name}</h4>
          </div>
          <div className="text-right not-prose">
            <p className="text-sm font-normal">
              Current Bid
            </p>
            <h4 className="text-xl font-semibold text-white">
              {price}
            </h4>
          </div>
        </div>
        <PrimaryButton
          text="Place a bid"
          className="w-full border border-transparent group-hover:border-primaryDark group-hover:bg-none group-hover:text-primaryDark"
        />
      </div>
    </motion.li>
  )
}

export default ArtCard
