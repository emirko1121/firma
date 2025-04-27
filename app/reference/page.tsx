import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Reference | Geosonda d.o.o. Zenica",
  description: "Pogledajte naše reference i projekte koje smo uspješno realizovali - Geosonda d.o.o. Zenica.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Naše Reference"
        description="Pogledajte projekte koje smo uspješno realizovali"
        backgroundImage="/projects-header.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Naši Projekti</h2>
            <p className="text-gray-600">
              Kroz dugogodišnje poslovanje, uspješno smo realizovali brojne projekte iz oblasti specijalnih građevinskih
              radova i geotehničkih istraživanja. Pogledajte neke od naših najznačajnijih projekata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sanacioni radovi u dovodnom tunelu za HE Dubrovnik",
                category: "Sanacioni radovi",
                description:
                  "Izvođenje sanacionih radova u dovodnom tunelu za hidroelektranu Dubrovnik. Radovi su uključivali injektiranje, ugradnju sidara i druge specijalne radove.",
                image: "/projects/tunnel-project.jpg",
              },
              {
                title: "Geotehnička istraživanja za autocestu Koridor Vc",
                category: "Geotehnička istraživanja",
                description:
                  "Provođenje geotehničkih istraživanja za potrebe projektovanja autoceste Koridor Vc. Istraživanja su uključivala bušenje, uzimanje uzoraka i laboratorijska ispitivanja.",
                image: "/projects/highway-project.png",
              },
              {
                title: "Bušenje i injektiranje za branu Gorica",
                category: "Bušenje i injektiranje",
                description:
                  "Izvođenje radova bušenja i injektiranja za branu Gorica. Radovi su uključivali bušenje kroz stijene i injektiranje cementne smjese pod pritiskom.",
                image: "/projects/dam-project.png",
              },
              {
                title: "Sanacija klizišta Bogatići",
                category: "Sanacioni radovi",
                description:
                  "Sanacija klizišta Bogatići koja je uključivala izradu potpornih konstrukcija, drenažnih sistema i drugih mjera za stabilizaciju terena.",
                image: "/projects/landslide-project.png",
              },
              {
                title: "Geotehnička istraživanja za most preko rijeke Bosne",
                category: "Geotehnička istraživanja",
                description:
                  "Provođenje geotehničkih istraživanja za potrebe projektovanja mosta preko rijeke Bosne. Istraživanja su uključivala bušenje, uzimanje uzoraka i laboratorijska ispitivanja.",
                image: "/projects/bridge-research.png",
              },
              {
                title: "Injektiranje brane Jablanica",
                category: "Bušenje i injektiranje",
                description:
                  "Izvođenje radova injektiranja za branu Jablanica. Radovi su uključivali bušenje kroz stijene i injektiranje cementne smjese pod pritiskom.",
                image: "/projects/dam-injection.png",
              },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/reference/${index + 1}`}>Više detalja</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Naši Klijenti</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Klijent 1", image: "/clients/client-1.png" },
              { name: "Klijent 2", image: "/clients/client-2.png" },
              { name: "Klijent 3", image: "/clients/client-3.png" },
              { name: "Klijent 4", image: "/clients/client-4.png" },
              { name: "Klijent 5", image: "/clients/client-5.png" },
              { name: "Klijent 6", image: "/clients/client-6.png" },
            ].map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Naša Metodologija</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">1. Analiza i planiranje</h3>
                  <p className="text-gray-600">
                    Detaljno analiziramo zahtjeve projekta i razvijamo plan izvođenja radova koji osigurava efikasnost i
                    kvalitet.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">2. Izvođenje radova</h3>
                  <p className="text-gray-600">
                    Koristimo savremenu opremu i tehnologije za izvođenje radova, uz stalni nadzor stručnog tima.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">3. Kontrola kvaliteta</h3>
                  <p className="text-gray-600">
                    Redovno provodimo kontrolu kvaliteta izvedenih radova kako bismo osigurali usklađenost sa
                    standardima i zahtjevima projekta.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">4. Dokumentacija i izvještavanje</h3>
                  <p className="text-gray-600">
                    Pripremamo detaljnu dokumentaciju i izvještaje o izvedenim radovima, koji služe kao osnova za
                    tehničke preglede i primopredaju objekta.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/methodology.jpg"
                alt="Naša metodologija"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Spremni ste za saradnju?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas danas za više informacija o našim uslugama ili za besplatnu ponudu.
          </p>
          <Button asChild className="bg-white text-blue-700 hover:bg-gray-100 min-w-[180px] h-12 text-lg">
            <Link href="/kontakt">Kontaktirajte Nas</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
