import { useState } from 'react'
import ArtCard from '../../components/ui/ArtCard'
import MotionContainer from '../../components/ui/MotionContainer'
import PrimaryButton from '../../components/ui/PrimaryButton'
import SectionHeader from '../../components/ui/SectionHeader'
import { arts, tabItems } from '../../utils/data/collectionData'

function Collection() {
  const [selected, setSelected] = useState('Sport')

  return (
    <div id="collections" className="space-y-4">
      <SectionHeader
        title="Collection"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div className="justify-between text-white sm:flex">
        {tabItems.map((singleItem) => (
          selected === singleItem
            ? (
              <PrimaryButton
                key={singleItem}
                text={singleItem}
                className="w-full m-2"
              />
            )
            : (
              <button key={singleItem} type="button" onClick={() => setSelected(singleItem)} className="w-full py-2 m-2 rounded-lg bg-white/20">
                {singleItem}
              </button>
            )
        ))}
      </div>
      <MotionContainer
        className="grid grid-cols-1 gap-4 lg:grid-cols-3"
      >
        {arts.map((art) => (
          <ArtCard
            key={art.img}
            img={art.img}
            author={art.author}
            price={art.price}
            name={art.name}
          />
        ))}
      </MotionContainer>
    </div>
  )
}

export default Collection
