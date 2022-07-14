import MotionSectionReveal from '../../components/ui/MotionSectionReveal'
import AboutUs from './AboutUs'
import CallToAction from './CallToAction'
import Collection from './Collection'
import FAQ from './FAQ'
import FeaturedArts from './FeaturedArts'
import Footer from './Footer'
import Home from './Home'
import Sponsored from './Sponsored'
import TopCreator from './TopCreator'

function Landing() {
  return (
    <div className="space-y-20 lg:space-y-32">
      <MotionSectionReveal>
        <Home />
      </MotionSectionReveal>

      <MotionSectionReveal>
        <Sponsored />
      </MotionSectionReveal>

      <MotionSectionReveal>
        <AboutUs />
      </MotionSectionReveal>

      <MotionSectionReveal>
        <Collection />
      </MotionSectionReveal>

      <MotionSectionReveal>
        <FeaturedArts />
      </MotionSectionReveal>

      <MotionSectionReveal>
        <TopCreator />
      </MotionSectionReveal>

      <MotionSectionReveal>
        <FAQ />
      </MotionSectionReveal>

      <MotionSectionReveal>
        <CallToAction />
      </MotionSectionReveal>

      <MotionSectionReveal>
        <Footer />
      </MotionSectionReveal>

    </div>
  )
}

export default Landing
