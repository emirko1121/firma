import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "O Preduzeću | Geosonda d.o.o. Zenica",
  description: "Saznajte više o kompaniji Geosonda d.o.o. Zenica, našoj historiji, misiji i viziji.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="O Preduzeću"
        description="Saznajte više o kompaniji Geosonda d.o.o. Zenica"
        backgroundImage="/about-header.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">O nama</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  "Geosonda" d.o.o. Zenica osnovano je 1992. godine kao privatno preduzeće i registrovana je za
                  izvođenje geoloških, specijalnih građevinskih radova i građevinsko-zanatskih radova.
                </p>
                <p className="text-gray-600">
                  Za djelokrug radova kojima se bavimo imamo odgovarajući broj savremenih strojeva, potrebnu količinu
                  rezervnih dijelova, opremu i mehanizaciju kao i kvalifikovane i iskusne majstore i iskusan inženjarski
                  i tehnički kadar.
                </p>
                <p className="text-gray-600">
                  Naša kompanija je postala prepoznatljiva po kvalitetu izvedenih radova, poštovanju rokova i
                  profesionalnom odnosu prema klijentima. Kroz godine poslovanja, izgradili smo reputaciju pouzdanog
                  partnera u oblasti specijalnih građevinskih radova i geotehničkih istraživanja.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about-company.jpg"
                alt="Geosonda d.o.o. Zenica"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-lg font-bold">30+ godina iskustva</p>
                <p className="mt-2">Pružamo kvalitetne usluge od 1992. godine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col h-full">
                <div className="mb-4 flex items-center">
                  <div className="bg-blue-700 rounded-full p-3 mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Naša Misija</h2>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  Naša misija je pružanje visokokvalitetnih usluga u oblasti specijalnih građevinskih radova i
                  geotehničkih istraživanja, uz primjenu savremenih tehnologija i stručnog znanja, kako bismo
                  zadovoljili potrebe naših klijenata i doprinijeli razvoju infrastrukture u Bosni i Hercegovini i
                  regiji.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col h-full">
                <div className="mb-4 flex items-center">
                  <div className="bg-blue-700 rounded-full p-3 mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Mi gradimo kvalitet!</h2>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  Stručno obavljanje posla jamči naš izuzetno iskusni inženjersko-tehnički tim zajedno sa visoko
                  kvalifikovanom i kompetentnom radnom snagom. Kada tome dodate da posjedujemo savremenu opremu koja
                  služi za visoko kvalitetnu u domenu navedenih radova imaju za rezultat pouzdanu, učinkovitu i
                  ekonomičnu izvedbu visoke kvalitete.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col h-full">
                <div className="mb-4 flex items-center">
                  <div className="bg-blue-700 rounded-full p-3 mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Stalno usavršavanje</h2>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  Da bi održali korak s tehnološko-tehničkim i naučnim dostignućima, a tako i naše zasluženo
                  respektabilno mjesto na zahtjevnom bosansko-hercegovačkom tržištu, preduzeće održava intenzivnu
                  saradnju sa renomiranim sveučilišnim profesorima i institucijama, relevantnim za naše poslovanje, kako
                  u zemlji tako i u inozemstvu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Naš Tim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ime Prezime",
                position: "Direktor",
                image: "/team/team-1.jpg",
              },
              {
                name: "Ime Prezime",
                position: "Tehnički direktor",
                image: "/team/team-2.jpg",
              },
              {
                name: "Ime Prezime",
                position: "Glavni inženjer",
                image: "/team/team-3.jpg",
              },
              {
                name: "Ime Prezime",
                position: "Voditelj projekata",
                image: "/team/team-4.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
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
