"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden -mt-32">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-geosonda.png" alt="Geosonda gradilište" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container mx-auto px-4 z-10 py-36 md:py-48 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Specijalni građevinski radovi i geotehnička istraživanja
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Geosonda d.o.o. Zenica je specijalizirana za izvođenje geoloških, specijalnih građevinskih radova i
              građevinsko-zanatskih radova.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white min-w-[180px] h-12 text-lg">
                <Link href="/djelatnosti">Naše Usluge</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 min-w-[180px] h-12 text-lg"
              >
                <Link href="/kontakt">Kontaktirajte Nas</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section id="o-nama-preview" ref={aboutRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
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
                  <h2 className="text-2xl font-bold text-gray-800">O nama</h2>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  "Geosonda" d.o.o. Zenica osnovano je 1992. godine kao privatno preduzeće i registrovana je za
                  izvođenje geoloških, specijalnih građevinskih radova i građevinsko-zanatskih radova.
                </p>
                <div className="text-right">
                  <Button asChild variant="link" className="text-blue-700">
                    <Link href="/o-preduzecu">Saznajte više</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
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
                  kvalifikovanom i kompetentnom radnom snagom.
                </p>
                <div className="text-right">
                  <Button asChild variant="link" className="text-blue-700">
                    <Link href="/o-preduzecu">Saznajte više</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
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
                  saradnju sa renomiranim sveučilišnim profesorima i institucijama.
                </p>
                <div className="text-right">
                  <Button asChild variant="link" className="text-blue-700">
                    <Link href="/o-preduzecu">Saznajte više</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section id="djelatnosti-preview" ref={servicesRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše Djelatnosti</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Osnovna djelatnost preduzeća je izvođenje specijalnih građevinskih radova i geotehničkih istraživanja.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Specijalni radovi iz oblasti niskogradnje",
                description:
                  "Izvođenje specijalnih radova u oblasti niskogradnje, uključujući tunele, mostove i druge infrastrukturne objekte.",
                icon: "/icons/construction-icon.png",
              },
              {
                title: "Geotehnička istraživanja",
                description:
                  "Provođenje geotehničkih istraživanja terena za potrebe projektovanja i izgradnje objekata.",
                icon: "/icons/geotechnical-icon.png",
              },
              {
                title: "Bušenje i injektiranje",
                description:
                  "Specijalizirani smo za bušenje i injektiranje u različitim geološkim formacijama i građevinskim projektima.",
                icon: "/icons/drilling-icon.png",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="h-16 w-16"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white">
              <Link href="/djelatnosti">Pogledajte sve usluge</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section Preview */}
      <section id="reference-preview" ref={projectsRef} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naši Projekti</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pogledajte neke od naših najznačajnijih projekata koje smo uspješno realizovali.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Sanacioni radovi u dovodnom tunelu za HE Dubrovnik",
                category: "Sanacioni radovi",
                image: "/projects/tunnel-project.jpg",
              },
              {
                title: "Geotehnička istraživanja za autocestu Koridor Vc",
                category: "Geotehnička istraživanja",
                image: "/projects/highway-project.png",
              },
              {
                title: "Bušenje i injektiranje za branu Gorica",
                category: "Bušenje i injektiranje",
                image: "/projects/dam-project.png",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 font-medium mb-1">{project.category}</span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <Button asChild variant="link" className="text-white p-0 mt-2 w-fit">
                    <Link href="/reference">Više detalja</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white">
              <Link href="/reference">Pogledajte sve projekte</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Spremni ste za saradnju?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas danas za više informacija o našim uslugama ili za besplatnu ponudu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-blue-700 hover:bg-gray-100 min-w-[180px] h-12 text-lg">
              <Link href="/kontakt">Kontaktirajte Nas</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-black hover:bg-blue-800 min-w-[180px] h-12 text-lg"
            >
              <Link href="/katalog-opreme">Katalog Opreme</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
