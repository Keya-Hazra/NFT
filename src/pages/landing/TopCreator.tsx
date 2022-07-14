import { useState } from 'react'
import CreatorCard from '../../components/ui/CreatorCard'
import MotionContainer from '../../components/ui/MotionContainer'
import SectionHeader from '../../components/ui/SectionHeader'
import topCreators from '../../utils/data/creatorData'

function TopCreator() {
  const [followed, setFollowed] = useState(['2'])

  return (
    <div className="space-y-4">
      <SectionHeader
        title="Top Creator"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <MotionContainer className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {topCreators.map((creator) => (
          <CreatorCard
            key={creator.id}
            banner={creator.banner}
            img={creator.img}
            bio={creator.bio}
            name={creator.name}
            isFollowed={!!followed.includes(creator.id)}
            onFollow={() => setFollowed([...followed, creator.id])}
            onUnfollow={() => setFollowed(followed.filter((item) => item !== creator.id))}
          />
        ))}
      </MotionContainer>
    </div>
  )
}

export default TopCreator
