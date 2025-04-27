"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MainNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="hidden md:flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <Link
          href="/o-preduzecu"
          className={`text-white hover:text-blue-200 py-4 font-medium transition-colors ${isActive("/o-preduzecu") ? "border-b-2 border-white" : ""}`}
        >
          O PREDUZEĆU
        </Link>
        <Link
          href="/djelatnosti"
          className={`text-white hover:text-blue-200 py-4 font-medium transition-colors ${isActive("/djelatnosti") ? "border-b-2 border-white" : ""}`}
        >
          DJELATNOSTI
        </Link>
        <Link
          href="/reference"
          className={`text-white hover:text-blue-200 py-4 font-medium transition-colors ${isActive("/reference") ? "border-b-2 border-white" : ""}`}
        >
          REFERENCE
        </Link>
        <Link
          href="/katalog-opreme"
          className={`text-white hover:text-blue-200 py-4 font-medium transition-colors ${isActive("/katalog-opreme") ? "border-b-2 border-white" : ""}`}
        >
          KATALOG OPREME
        </Link>
        <Link
          href="/foto-galerija"
          className={`text-white hover:text-blue-200 py-4 font-medium transition-colors ${isActive("/foto-galerija") ? "border-b-2 border-white" : ""}`}
        >
          FOTO GALERIJA
        </Link>
        <Link
          href="/kontakt"
          className={`text-white hover:text-blue-200 py-4 font-medium transition-colors ${isActive("/kontakt") ? "border-b-2 border-white" : ""}`}
        >
          KONTAKT
        </Link>
      </div>
    </nav>
  )
}
