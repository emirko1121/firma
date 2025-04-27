"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Mail, Phone, MapPin } from "lucide-react"

export default function MobileNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between py-4 border-b">
        <Image src="/logo.png" alt="Geosonda Logo" width={150} height={45} className="h-10 w-auto" />
      </div>
      <nav className="flex flex-col space-y-4 py-8">
        <Link
          href="/o-preduzecu"
          className={`text-lg font-medium transition-colors ${isActive("/o-preduzecu") ? "text-blue-700" : "hover:text-blue-700"}`}
        >
          O Preduzeću
        </Link>
        <Link
          href="/djelatnosti"
          className={`text-lg font-medium transition-colors ${isActive("/djelatnosti") ? "text-blue-700" : "hover:text-blue-700"}`}
        >
          Djelatnosti
        </Link>
        <Link
          href="/reference"
          className={`text-lg font-medium transition-colors ${isActive("/reference") ? "text-blue-700" : "hover:text-blue-700"}`}
        >
          Reference
        </Link>
        <Link
          href="/katalog-opreme"
          className={`text-lg font-medium transition-colors ${isActive("/katalog-opreme") ? "text-blue-700" : "hover:text-blue-700"}`}
        >
          Katalog Opreme
        </Link>
        <Link
          href="/foto-galerija"
          className={`text-lg font-medium transition-colors ${isActive("/foto-galerija") ? "text-blue-700" : "hover:text-blue-700"}`}
        >
          Foto Galerija
        </Link>
        <Link
          href="/kontakt"
          className={`text-lg font-medium transition-colors ${isActive("/kontakt") ? "text-blue-700" : "hover:text-blue-700"}`}
        >
          Kontakt
        </Link>
      </nav>
      <div className="mt-auto pb-8">
        <div className="flex flex-col space-y-3 mt-6">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-blue-700" />
            <span>geosonda@bih.net.ba</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-blue-700" />
            <span>+387 32 243-400</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-blue-700" />
            <span className="text-sm">Masarykova 66a, 72000 Zenica</span>
          </div>
        </div>
      </div>
    </div>
  )
}
