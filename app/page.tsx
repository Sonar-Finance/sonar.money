import Navigation from "@/components/Navigation"
import MainBody from "@/components/MainBody"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <MainBody />
      <Footer />
    </div>
  )
}
