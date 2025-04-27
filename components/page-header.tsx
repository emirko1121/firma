import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  backgroundImage: string
}

export default function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  )
}
