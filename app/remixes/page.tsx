import { CollectionSection } from "@/components/collection-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Remixes - Plataforma Interativa",
  description: "Aproveite nossos remixes originais de músicas",
}

export default function RemixesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <CollectionSection />
      <Footer />
    </main>
  )
}
