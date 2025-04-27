import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"

// Define gallery categories and images
const categories = [
  {
    id: "busenje-mikropilota",
    title: "Bušenje i izrada mikropilota",
    images: [
      {
        id: 1,
        title: "Klizište Husino na putu Sarajevo-Tuzla-izgradnja mikropilota",
        image: "/gallery/busenje-mikropilota/kliziste-husino.png",
        description:
          "Radovi na sanaciji klizišta Husino na putu Sarajevo-Tuzla. Projekat je uključivao izgradnju mikropilota za stabilizaciju terena.",
      },
      {
        id: 2,
        title: "Mittal Steel Zenica-bušenje za mikrošipove",
        image: "/gallery/busenje-mikropilota/mittal-steel-zenica-1.png",
        description:
          "Izvođenje radova bušenja za mikrošipove u Mittal Steel Zenica. Radovi su dio projekta stabilizacije temelja industrijskih objekata.",
      },
      {
        id: 3,
        title: "Mittal Steel Zenica-bušenje za mikrošipove",
        image: "/gallery/busenje-mikropilota/mittal-steel-zenica-2.png",
        description:
          "Nastavak radova bušenja za mikrošipove u Mittal Steel Zenica. Korištena je specijalizirana oprema za bušenje u industrijskim uslovima.",
      },
      {
        id: 4,
        title: "Mittal Steel-bušenje kosog mikropilota u hali",
        image: "/gallery/busenje-mikropilota/mittal-steel-busenje.png",
        description:
          "Bušenje kosog mikropilota u proizvodnoj hali Mittal Steel. Radovi su izvođeni u ograničenim prostornim uslovima.",
      },
      {
        id: 5,
        title: "Mittal Steel-izrada temelja na mikropilotima",
        image: "/gallery/busenje-mikropilota/mittal-steel-izrada.png",
        description:
          "Izrada temelja na mikropilotima u Mittal Steel. Nakon bušenja i ugradnje mikropilota, pristupilo se izradi armiranobetonskih temelja.",
      },
      {
        id: 6,
        title: "Piramida Mjeseca-bušenje i postavljanje mikropilota",
        image: "/gallery/busenje-mikropilota/piramida-mjeseca.png",
        description:
          "Radovi na bušenju i postavljanju mikropilota na lokalitetu Piramida Mjeseca. Projekat je uključivao stabilizaciju terena i pripremu za arheološka istraživanja.",
      },
    ],
  },
  {
    id: "busenje-ankera",
    title: "Bušenje i ugradnja ankera i sidara",
    images: [
      {
        id: 1,
        title: "Ankersko polje na HE Grančarevo",
        image: "/gallery/busenje-ankera/ankersko-polje-he-grancarevo.png",
        description:
          "Ankersko polje na hidroelektrani Grančarevo. Projekat je uključivao izradu sistema ankera za stabilizaciju kosina.",
      },
      {
        id: 2,
        title: "Bušenje za ugradnju sidra na HE Grančarevo",
        image: "/gallery/busenje-ankera/busenje-ugradnja-sidra-he-grancarevo.png",
        description:
          "Bušenje za ugradnju sidra na hidroelektrani Grančarevo. Radovi su dio projekta sanacije i stabilizacije kosina.",
      },
      {
        id: 3,
        title: "Bušenje kosih bušotina za ugradnju geotehničkih sidara na HE Grančarevo",
        image: "/gallery/busenje-ankera/busenje-kosih-busotina.png",
        description:
          "Bušenje kosih bušotina za ugradnju geotehničkih sidara na hidroelektrani Grančarevo. Radovi su izvođeni na strmim kosinama.",
      },
      {
        id: 4,
        title: "Naprezanje geotehničkih sidara na HE Grančarevo",
        image: "/gallery/busenje-ankera/naprezanje-geotehnickih-sidara.png",
        description:
          "Naprezanje geotehničkih sidara na hidroelektrani Grančarevo. Nakon ugradnje sidara, pristupilo se njihovom naprezanju do projektovanih vrijednosti.",
      },
      {
        id: 5,
        title: "Dalmatinska ulica, Sarajevo-bušenje i injektiranje mikropilota u garažama",
        image: "/gallery/busenje-ankera/dalmatinska-ulica-sarajevo.png",
        description:
          "Bušenje i injektiranje mikropilota u garažama u Dalmatinskoj ulici, Sarajevo. Radovi su izvođeni u ograničenim prostornim uslovima.",
      },
      {
        id: 6,
        title: "Dalmatinska ulica, Sarajevo-bušenje i injektiranje mikropilota u garažama",
        image: "/gallery/busenje-ankera/dalmatinska-ulica-sarajevo-2.png",
        description:
          "Nastavak radova bušenja i injektiranja mikropilota u garažama u Dalmatinskoj ulici, Sarajevo. Projekat je uključivao stabilizaciju temelja postojećeg objekta.",
      },
    ],
  },
  {
    id: "geofizicka-ispitivanja",
    title: "Geofizička ispitivanja",
    images: [
      {
        id: 1,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-1.png",
        description:
          "Geofizička ispitivanja terena za potrebe projektovanja građevinskih objekata. Korištene su savremene metode za određivanje karakteristika tla.",
      },
      {
        id: 2,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-2.png",
        description:
          "Nastavak geofizičkih ispitivanja terena. Radovi su uključivali mjerenje brzine prostiranja seizmičkih talasa kroz tlo.",
      },
      {
        id: 3,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-3.png",
        description:
          "Geofizička ispitivanja terena za potrebe projektovanja infrastrukturnih objekata. Korištena je oprema za geoelektrična ispitivanja.",
      },
      {
        id: 4,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-4.png",
        description:
          "Geofizička ispitivanja terena za potrebe projektovanja mostova. Radovi su uključivali određivanje dubine do čvrste stijenske podloge.",
      },
      {
        id: 5,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-5.png",
        description:
          "Geofizička ispitivanja terena za potrebe projektovanja tunela. Korištene su metode za određivanje karakteristika stijenske mase.",
      },
      {
        id: 6,
        title: "Geofizička ispitivanja terena",
        image: "/gallery/geofizicka-ispitivanja/geofizicka-ispitivanja-6.png",
        description:
          "Geofizička ispitivanja terena za potrebe projektovanja brana. Radovi su uključivali određivanje karakteristika tla i stijenske mase.",
      },
    ],
  },
  {
    id: "injektiranje",
    title: "Injektiranje",
    images: [
      {
        id: 1,
        title: "Injektiranje brane Jablanica",
        image: "/gallery/injektiranje/injektiranje-brane-jablanica-1.png",
        description:
          "Radovi na injektiranju brane Jablanica. Projekat je uključivao injektiranje cementne smjese pod pritiskom za poboljšanje vodonepropusnosti brane.",
      },
      {
        id: 2,
        title: "Injektiranje brane Jablanica",
        image: "/gallery/injektiranje/injektiranje-brane-jablanica-2.png",
        description:
          "Nastavak radova na injektiranju brane Jablanica. Korištena je specijalizirana oprema za injektiranje u teškim uslovima.",
      },
      {
        id: 3,
        title: "Injektiranje tunela",
        image: "/gallery/injektiranje/injektiranje-tunela-1.png",
        description:
          "Radovi na injektiranju tunela. Projekat je uključivao injektiranje cementne smjese za poboljšanje vodonepropusnosti tunelske obloge.",
      },
      {
        id: 4,
        title: "Injektiranje tunela",
        image: "/gallery/injektiranje/injektiranje-tunela-2.png",
        description:
          "Nastavak radova na injektiranju tunela. Korištena je specijalizirana oprema za injektiranje u tunelskim uslovima.",
      },
      {
        id: 5,
        title: "Injektiranje temelja",
        image: "/gallery/injektiranje/injektiranje-temelja-1.png",
        description:
          "Radovi na injektiranju temelja. Projekat je uključivao injektiranje cementne smjese za poboljšanje nosivosti tla ispod temelja.",
      },
      {
        id: 6,
        title: "Injektiranje temelja",
        image: "/gallery/injektiranje/injektiranje-temelja-2.png",
        description:
          "Nastavak radova na injektiranju temelja. Korištena je specijalizirana oprema za injektiranje u ograničenim prostornim uslovima.",
      },
    ],
  },
  {
    id: "sanacioni-radovi",
    title: "Sanacioni radovi",
    images: [
      {
        id: 1,
        title: "Sanacija klizišta",
        image: "/gallery/sanacioni-radovi/sanacija-klizista-1.png",
        description:
          "Radovi na sanaciji klizišta. Projekat je uključivao izradu potpornih konstrukcija, drenažnih sistema i drugih mjera za stabilizaciju terena.",
      },
      {
        id: 2,
        title: "Sanacija klizišta",
        image: "/gallery/sanacioni-radovi/sanacija-klizista-2.png",
        description: "Nastavak radova na sanaciji klizišta. Korištene su savremene metode za stabilizaciju terena.",
      },
      {
        id: 3,
        title: "Sanacija tunela",
        image: "/gallery/sanacioni-radovi/sanacija-tunela-1.png",
        description:
          "Radovi na sanaciji tunela. Projekat je uključivao sanaciju oštećenja tunelske obloge i poboljšanje vodonepropusnosti.",
      },
      {
        id: 4,
        title: "Sanacija tunela",
        image: "/gallery/sanacioni-radovi/sanacija-tunela-2.png",
        description:
          "Nastavak radova na sanaciji tunela. Korištene su specijalizirane metode za sanaciju u tunelskim uslovima.",
      },
      {
        id: 5,
        title: "Sanacija mosta",
        image: "/gallery/sanacioni-radovi/sanacija-mosta-1.png",
        description:
          "Radovi na sanaciji mosta. Projekat je uključivao sanaciju oštećenja betonske konstrukcije i poboljšanje nosivosti.",
      },
      {
        id: 6,
        title: "Sanacija mosta",
        image: "/gallery/sanacioni-radovi/sanacija-mosta-2.png",
        description:
          "Nastavak radova na sanaciji mosta. Korištene su specijalizirane metode za sanaciju mostovskih konstrukcija.",
      },
    ],
  },
]

export function generateMetadata({ params }: { params: { category: string; id: string } }) {
  const categoryId = params.category
  const imageId = Number.parseInt(params.id)

  const category = categories.find((c) => c.id === categoryId)
  if (!category) return { title: "Slika nije pronađena" }

  const image = category.images.find((img) => img.id === imageId)
  if (!image) return { title: "Slika nije pronađena" }

  return {
    title: `${image.title} | Geosonda d.o.o. Zenica`,
    description: image.description,
  }
}

export default function GalleryImagePage({ params }: { params: { category: string; id: string } }) {
  const categoryId = params.category
  const imageId = Number.parseInt(params.id)

  const category = categories.find((c) => c.id === categoryId)
  if (!category) return notFound()

  const imageIndex = category.images.findIndex((img) => img.id === imageId)
  if (imageIndex === -1) return notFound()

  const image = category.images[imageIndex]
  const prevImage = imageIndex > 0 ? category.images[imageIndex - 1] : null
  const nextImage = imageIndex < category.images.length - 1 ? category.images[imageIndex + 1] : null

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/foto-galerija" className="text-blue-700 hover:underline flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Povratak na galeriju
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative aspect-video">
          <Image src={image.image || "/placeholder.svg"} alt={image.title} fill className="object-contain" priority />
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{image.title}</h1>
          <p className="text-gray-600 mb-6">{image.description}</p>

          <div className="flex justify-between">
            {prevImage ? (
              <Button asChild variant="outline">
                <Link href={`/foto-galerija/${categoryId}/${prevImage.id}`} className="flex items-center">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Prethodna slika
                </Link>
              </Button>
            ) : (
              <div></div>
            )}

            {nextImage ? (
              <Button asChild variant="outline">
                <Link href={`/foto-galerija/${categoryId}/${nextImage.id}`} className="flex items-center">
                  Sljedeća slika
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Više iz kategorije: {category.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {category.images.map((item) => (
            <Link
              key={item.id}
              href={`/foto-galerija/${categoryId}/${item.id}`}
              className={`relative aspect-square overflow-hidden rounded-lg ${item.id === imageId ? "ring-4 ring-blue-700" : ""}`}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
