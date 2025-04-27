import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Katalog Opreme | Geosonda d.o.o. Zenica",
  description:
    "Pogledajte našu savremenu opremu za izvođenje specijalnih građevinskih radova i geotehničkih istraživanja.",
}

export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        title="Katalog Opreme"
        description="Savremena oprema za izvođenje specijalnih građevinskih radova"
        backgroundImage="/equipment-header.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Naša Oprema</h2>
            <p className="text-gray-600">
              Posjedujemo savremenu opremu koja nam omogućava izvođenje najzahtjevnijih radova iz oblasti specijalnih
              građevinskih radova i geotehničkih istraživanja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Bušaća garnitura Fraste",
                category: "Bušenje",
                description:
                  "Savremena bušaća garnitura za izvođenje istražnih bušotina i bušotina za injektiranje. Omogućava bušenje u različitim geološkim formacijama.",
                image: "/equipment/drilling-machine-1.png",
              },
              {
                name: "Injektirna stanica IBO",
                category: "Injektiranje",
                description:
                  "Visokokvalitetna injektirna stanica za injektiranje cementne smjese pod pritiskom. Omogućava precizno doziranje i kontrolu pritiska.",
                image: "/equipment/injection-equipment.png",
              },
              {
                name: "Kompresor Atlas Copco",
                category: "Kompresori",
                description:
                  "Snažan kompresor za napajanje pneumatskih alata i opreme. Osigurava stabilan pritisak i protok zraka.",
                image: "/equipment/compressor.png",
              },
              {
                name: "Pumpa za beton Schwing",
                category: "Betoniranje",
                description:
                  "Visokokvalitetna pumpa za beton koja omogućava pumpanje betona na velike udaljenosti i visine. Idealna za zahtjevne građevinske projekte.",
                image: "/equipment/concrete-pump.png",
              },
              {
                name: "Bager Caterpillar",
                category: "Zemljani radovi",
                description:
                  "Snažan bager za izvođenje zemljanih radova. Opremljen različitim nastavcima za različite vrste radova.",
                image: "/equipment/excavator.png",
              },
              {
                name: "Kamion MAN",
                category: "Transport",
                description:
                  "Pouzdan kamion za transport materijala i opreme. Omogućava efikasan transport na gradilištu i između gradilišta.",
                image: "/equipment/transport-vehicle.png",
              },
              {
                name: "Laboratorijska oprema",
                category: "Ispitivanja",
                description:
                  "Savremena laboratorijska oprema za ispitivanje uzoraka tla i stijena. Omogućava precizno određivanje karakteristika materijala.",
                image: "/equipment/laboratory-equipment.png",
              },
              {
                name: "Geodetska oprema",
                category: "Mjerenja",
                description:
                  "Precizna geodetska oprema za mjerenje i praćenje deformacija. Omogućava precizno pozicioniranje i praćenje promjena.",
                image: "/equipment/measurement-tools.png",
              },
            ].map((equipment, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={equipment.image || "/placeholder.svg"}
                    alt={equipment.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm">
                    {equipment.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{equipment.name}</h3>
                  <p className="text-gray-600 mb-4">{equipment.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/katalog-opreme/${index + 1}`}>Više detalja</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Prednosti naše opreme</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Savremena tehnologija</span> - Naša oprema koristi najnovije
                    tehnologije koje omogućavaju efikasno i kvalitetno izvođenje radova.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Visoka pouzdanost</span> - Redovno održavanje i servisiranje
                    osigurava visoku pouzdanost naše opreme i minimalne zastoje u radu.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Visoka produktivnost</span> - Naša oprema omogućava visoku
                    produktivnost i efikasnost u izvođenju radova.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Prilagodljivost</span> - Naša oprema je prilagodljiva različitim
                    uslovima rada i različitim vrstama projekata.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Sigurnost</span> - Naša oprema je opremljena najnovijim sigurnosnim
                    sistemima koji osiguravaju sigurnost radnika i okoline.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/equipment-advantages.jpg"
                alt="Prednosti naše opreme"
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
