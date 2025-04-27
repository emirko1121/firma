import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Djelatnosti | Geosonda d.o.o. Zenica",
  description:
    "Saznajte više o uslugama koje pruža Geosonda d.o.o. Zenica - specijalni građevinski radovi i geotehnička istraživanja.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Naše Djelatnosti"
        description="Specijalni građevinski radovi i geotehnička istraživanja"
        backgroundImage="/services-header.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Osnovna djelatnost preduzeća</h2>
            <p className="text-gray-600">
              Osnovna djelatnost preduzeća je izvođenje specijalnih građevinskih radova i geotehničkih istraživanja. Naš
              tim stručnjaka pruža visokokvalitetne usluge uz primjenu savremenih tehnologija i opreme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Specijalni radovi iz oblasti niskogradnje",
                description:
                  "Izvođenje specijalnih radova u oblasti niskogradnje, uključujući tunele, mostove i druge infrastrukturne objekte. Naš tim stručnjaka ima dugogodišnje iskustvo u izvođenju najzahtjevnijih radova u oblasti niskogradnje.",
                icon: "/icons/construction-icon.png",
              },
              {
                title: "Geotehnička istraživanja",
                description:
                  "Provođenje geotehničkih istraživanja terena za potrebe projektovanja i izgradnje objekata. Koristimo savremenu opremu i metode za dobijanje preciznih podataka o karakteristikama tla i stijena.",
                icon: "/icons/geotechnical-icon.png",
              },
              {
                title: "Bušenje i injektiranje",
                description:
                  "Specijalizirani smo za bušenje i injektiranje u različitim geološkim formacijama i građevinskim projektima. Naša oprema omogućava nam izvođenje bušenja i injektiranja u najzahtjevnijim uslovima.",
                icon: "/icons/drilling-icon.png",
              },
              {
                title: "Sanacioni radovi",
                description:
                  "Sanacioni radovi na objektima niskogradnje, uključujući tunele, mostove i druge infrastrukturne objekte. Naš tim stručnjaka ima iskustvo u sanaciji najsloženijih objekata.",
                icon: "/icons/repair-icon.png",
              },
              {
                title: "Projektovanje",
                description:
                  "Izrada projektne dokumentacije za specijalne građevinske radove i geotehnička istraživanja. Naš tim inženjera pruža usluge projektovanja u skladu sa najnovijim standardima i propisima.",
                icon: "/icons/design-icon.png",
              },
              {
                title: "Nadzor",
                description:
                  "Stručni nadzor nad izvođenjem specijalnih građevinskih radova i geotehničkih istraživanja. Naši stručnjaci pružaju usluge nadzora kako bi osigurali kvalitet izvedenih radova.",
                icon: "/icons/supervision-icon.png",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                      <Image src={service.icon || "/placeholder.svg"} alt={service.title} width={40} height={40} />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Button asChild variant="outline" className="w-full mt-auto">
                    <Link href="/kontakt">Zatražite ponudu</Link>
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
            <div>
              <h2 className="text-3xl font-bold mb-6">Zašto odabrati nas?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Dugogodišnje iskustvo</span> - Više od 30 godina iskustva u
                    izvođenju specijalnih građevinskih radova i geotehničkih istraživanja.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Stručni tim</span> - Naš tim čine visokokvalifikovani inženjeri i
                    tehničari sa bogatim iskustvom u oblasti građevinarstva i geotehnike.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Savremena oprema</span> - Posjedujemo najsavremeniju opremu za
                    izvođenje specijalnih građevinskih radova i geotehničkih istraživanja.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Kvalitet</span> - Posvećeni smo pružanju usluga najvišeg kvaliteta,
                    u skladu sa međunarodnim standardima i propisima.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-700 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Pouzdanost</span> - Naši klijenti mogu računati na nas da ćemo
                    projekte završiti u dogovorenom roku i u skladu sa specifikacijama.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/why-choose-us.jpg"
                alt="Zašto odabrati Geosonda d.o.o."
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
