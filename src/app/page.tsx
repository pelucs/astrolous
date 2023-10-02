import CTASection from '@/components/CTASection'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import GetStart from '@/components/GetStart'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoClouds from '@/components/LogoClouds'

export default function Home() {
  return (
    <main className="min-h-screen px-5 md:px-10">
      <Header/>
      <Hero/>
      <LogoClouds/>
      <Features/>
      <CTASection/>
      <GetStart/>
      <Footer/>
    </main>
  )
}
