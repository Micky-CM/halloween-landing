import HeroSection from '../../components/HeroSection'
import Layout from '../../components/Layout'
import ArtistsSection from '../../components/ArtistsSection'
import GallerySection from '../../components/GallerySection'
import TicketsSection from '../../components/TicketsSection'
import TestimonialsSection from '../../components/TestimonialSection'

const Home = ()=> {
  return (
    <>
      <Layout>
        <HeroSection />
        <TicketsSection />
        <ArtistsSection />
        <GallerySection />
        <TestimonialsSection />
      </Layout>
    </>
  )
}

export default Home