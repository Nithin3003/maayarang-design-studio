import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Difference } from '@/components/difference'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { MobileCallButton } from '@/components/mobile-call-button'

export default function Page() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Services />
        <Difference />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  )
}
