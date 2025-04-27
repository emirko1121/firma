import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Kontakt | Geosonda d.o.o. Zenica",
  description: "Kontaktirajte Geosonda d.o.o. Zenica za više informacija o našim uslugama ili za besplatnu ponudu.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Kontaktirajte Nas"
        description="Kontaktirajte nas za više informacija o našim uslugama"
        backgroundImage="/contact-header.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pošaljite Upit</h2>
              <p className="text-gray-600 mb-8">
                Popunite obrazac ispod i naš tim će vas kontaktirati u najkraćem mogućem roku. Također nas možete
                kontaktirati direktno putem telefona ili e-maila.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ime i prezime
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Vaše ime i prezime"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Vaš email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Predmet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Predmet upita"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Vaša poruka"
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">Pošaljite Poruku</Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Kontakt Informacije</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-700 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Adresa</h4>
                    <p className="text-gray-600">
                      Masarykova 66a
                      <br />
                      72000 Zenica
                      <br />
                      Bosna i Hercegovina
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-700 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Telefon</h4>
                    <p className="text-gray-600">+387 32 243-400</p>
                    <p className="text-gray-600">Fax: +387 32 249-142</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-700 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">geosonda@bih.net.ba</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-700 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Radno vrijeme</h4>
                    <p className="text-gray-600">
                      Ponedjeljak - Petak: 8:00 - 16:00
                      <br />
                      Subota: Zatvoreno
                      <br />
                      Nedjelja: Zatvoreno
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden h-80 relative">
                <Image src="/map.png" alt="Lokacija Geosonda d.o.o." fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Često Postavljana Pitanja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Koje usluge pružate?</h3>
              <p className="text-gray-600">
                Pružamo širok spektar usluga iz oblasti specijalnih građevinskih radova i geotehničkih istraživanja,
                uključujući bušenje, injektiranje, sanacione radove, projektovanje i nadzor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Kako mogu dobiti ponudu?</h3>
              <p className="text-gray-600">
                Možete nas kontaktirati putem telefona, e-maila ili kontakt forme na našoj web stranici. Naš tim će vas
                kontaktirati u najkraćem mogućem roku kako bismo razgovarali o vašim potrebama i pripremili ponudu.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Koliko dugo traje realizacija projekta?</h3>
              <p className="text-gray-600">
                Trajanje projekta zavisi od njegove složenosti i obima radova. Nakon detaljne analize vaših potreba,
                možemo vam dati procjenu trajanja projekta.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Da li radite na području cijele BiH?</h3>
              <p className="text-gray-600">
                Da, radimo na području cijele Bosne i Hercegovine, kao i u susjednim zemljama. Naš tim je mobilan i
                spreman za rad na različitim lokacijama.
              </p>
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
