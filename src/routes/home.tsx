import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="PixiePop - Unlock the potential of AI-generated NFTs."
        content="PixiePop lets you generate unique, AI-generated images from your thoughts and mint them as NFTs on the Mantle Chain. Buy, sell, and resell your NFTs on our marketplace and earn royalties."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
