import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="PixiePop - Turn your thoughts into NFTs"
        content="PixiePop uses the stable diffusion model to turn your written ideas into beautiful and unique digital art pieces, which you can easily mint as NFTs on the Mantle chain. Create your personalized NFTs and unleash your creativity with PixiePop."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
