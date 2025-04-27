import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"
import PageHeader from "@/components/page-header"

// Define gallery categories and images
const categories = [
  {
    id: "busenje-mikropilota",
    title: "Bušenje i izrada mikropilota",
    description: "Fotografije radova na bušenju i izradi mikropilota na različitim lokacijama i projektima.",
    images: [
      {
        id: 1,
        title: "Klizište Husino na putu Sarajevo-Tuzla-izgradnja mikropilota",
        image: "/gallery/busenje-mikropilota/kliziste-husino.png",
      },
      {
        id: 2,
        title: "Mittal Steel Zenica-bušenje za mikrošipove",
        image: "/gallery/busenje-mikropilota/mittal-steel-zenica-1.png",
      },
      {
        id: 3,
        title: "Mittal Steel Zenica-bušenje za mikrošipove",
        image: "/gallery/busenje-mikropilota/mittal-steel-zenica-2.png",
      },
      {
        id: 4,
        title: "Mittal Steel-bušenje kosog mikropilota u hali",
        image: "/gallery/busenje-mikropilota/mittal-steel-busenje.png",
      },
      {
        id: 5,
        title: "Mittal Steel-izrada temelja na mikropilotima",
        image: "/gallery/busenje-mikropilota/mittal-steel-izrada.png",
      },
      {
        id: 6,
        title: "Piramida Mjeseca-bušenje i postavljanje mikropilota",
        image: "/gallery/busenje-mikropilota/piramida-mjeseca.png",
      },
    ],
  },
  {
    id: "busenje-ankera",
    title: "Bušenje i ugradnja ankera i sidara",
    description: "Fotografije radova na bušenju i ugradnji ankera i sidara na različitim lokacijama i projektima.",
    images: [
      {
        id: 1,
        title: "Ankersko polje na HE Grančarevo",
        image: "/gallery/busenje-ankera/ankersko-polje-he-grancarevo.png",
      },
      {
        id: 2,
        title: "Bušenje za ugradnju sidra na HE Grančarevo",
        image: "/gallery/busenje-ankera/busenje-ugradnja-sidra-he-grancarevo.png",
      },
      {
        id: 3,
        title: "Bušenje kosih bušotina za ugradnju geotehničkih sidara na HE Grančarevo",
        image: "/gallery/busenje-ankera/busenje-kosih-busotina.png",
      },
      {
        id: 4,
        title: "Naprezanje geotehničkih sidara na HE Grančarevo",
        image: "/gallery/busenje-ankera/naprezanje-geotehnickih-sidara.png",
      },
      {
        id: 5,
        title: "Dalmatinska ulica, Sarajevo-bušenje i injektiranje mikropilota u garažama",
        image: "/gallery/busenje-ankera/dalmatinska-ulica-sarajevo.png",
      },
      {
        id: 6,
        title: "Dalmatinska ulica, Sarajevo-bušenje i injektiranje mikropilota u garažama",
        image: "/gallery/busenje-ankera/dalmatinska-ulica-sarajevo-2.png",
      },
    ],
  },
  {
    id: "geofizicka-ispitivanja",
    title: "Geofizička ispitivanja",
    description: "Fotografije radova na geofizičkim ispitivanjima terena na različitim lokacijama i projektima.",
    images: [
      {
        id: 1,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-1.png",
      },
      {
        id: 2,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-2.png",
      },
      {
        id: 3,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-3.png",
      },
      {
        id: 4,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-4.png",
      },
      {
        id: 5,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-5.png",
      },
      {
        id: 6,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-6.png",
      },
    ],
  },
  {
    id: "injektiranje",
    title: "Injektiranje",
    description: "Fotografije radova na injektiranju na različitim lokacijama i projektima.",
    images: [
      {
        id: 1,
        title: "Injektiranje brane Jablanica",
        image: "/gallery/injektiranje/injektiranje-brane-jablanica-1.png",
      },
      {
        id: 2,
        title: "Injektiranje brane Jablanica",
        image: "/gallery/injektiranje/injektiranje-brane-jablanica-2.png",
      },
      {
        id: 3,
        title: "Injektiranje tunela",
        image: "/gallery/injektiranje/injektiranje-tunela-1.png",
      },
      {
        id: 4,
        title: "Injektiranje tunela",
        image: "/gallery/injektiranje/injektiranje-tunela-2.png",
      },
      {
        id: 5,
        title: "Injektiranje temelja",
        image: "/gallery/injektiranje/injektiranje-temelja-1.png",
      },
      {
        id: 6,
        title: "Injektiranje temelja",
        image: "/gallery/injektiranje/injektiranje-temelja-2.png",
      },
    ],
  },
  {
    id: "sanacioni-radovi",
    title: "Sanacioni radovi",
    description: "Fotografije sanacionih radova na različitim lokacijama i projektima.",
    images: [
      {
        id: 1,
        title: "Sanacija klizišta",
        image: "/gallery/sanacioni-radovi/sanacija-klizista-1.png",
      },
      {
        id: 2,
        title: "Sanacija klizišta",
        image: "/gallery/sanacioni-radovi/sanacija-klizista-2.png",
      },
      {
        id: 3,
        title: "Sanacija tunela",
        image: "/gallery/sanacioni-radovi/sanacija-tunela-1.png",
      },
      {
        id: 4,
        title: "Sanacija tunela",
        image: "/gallery/sanacioni-radovi/sanacija-tunela-2.png",
      },
      {
        id: 5,
        title: "Sanacija mosta",
        image: "/gallery/sanacioni-radovi/sanacija-mosta-1.png",
      },
      {
        id: 6,
        title: "Sanacija mosta",
        image: "/gallery/sanacioni-radovi/sanacija-mosta-2.png",
      },
    ],
  },
]

export function generateMetadata({ params }: { params: { category: string } }) {
  const categoryId = params.category
  const category = categories.find((c) => c.id === categoryId)

  if (!category) return { title: "Kategorija nije pronađena" }

  return {
    title: `${category.title} | Geosonda d.o.o. Zenica`,
    description: category.description,
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryId = params.category
  const category = categories.find((c) => c.id === categoryId)

  if (!category) return notFound()

  return (
    <>
      <PageHeader title={category.title} description={category.description} backgroundImage="/gallery-header.jpg" />

      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/foto-galerija" className="text-blue-700 hover:underline flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Povratak na galeriju
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.images.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <Button asChild variant="link" className="text-white p-0 mt-2 w-fit">
                  <Link href={`/foto-galerija/${categoryId}/${item.id}`}>Pogledaj veću sliku</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

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
