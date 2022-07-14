import { motion } from 'framer-motion'
import { item } from '../../utils/animation'
import ImageContainer from './ImageContainer'
import PrimaryButton from './PrimaryButton'

interface props{
banner:string,
  img:string,
  name:string,
  bio:string,
  isFollowed:boolean,
  onFollow:()=>void,
  onUnfollow:()=>void
}

function CreatorCard({
  banner, img, name, bio, isFollowed, onFollow, onUnfollow,
}:props): JSX.Element {
  return (
    <motion.li
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      variants={item}
      className="transition duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.90 }}
    >
      <div className="pb-4 transition rounded-lg group-hover:bg-white/50 bg-white/10">
        <ImageContainer src={banner} alt={banner} className="object-fill w-full rounded-t" />
        <div className="flex items-center justify-center -mt-10">
          <ImageContainer src={img} alt={img} className="w-20 h-20 rounded-full" />
        </div>
        <div className="p-4 space-y-4 text-center not-prose">
          <h4 className="text-xl font-semibold text-white ">{name}</h4>
          <p className="text-sm font-normal">{bio}</p>
          {
            isFollowed
              ? (
                <PrimaryButton
                  onClick={onUnfollow}
                  text="+ Followed"
                  className="w-full border border-transparent group-hover:border-primaryDark group-hover:bg-none group-hover:text-primaryDark"
                />
              )
              : (
                <PrimaryButton
                  text="+ Follow"
                  onClick={onFollow}
                  className="w-full border border-transparent group-hover:border-primaryDark group-hover:bg-none group-hover:text-primaryDark"
                />
              )
          }
        </div>
      </div>
    </motion.li>
  )
}

export default CreatorCard
