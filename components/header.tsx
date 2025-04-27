"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LanguageSwitcher from "@/components/language-switcher"
import MainNav from "@/components/main-nav"
import MobileNav from "@/components/mobile-nav"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Geosonda Logo" width={250} height={80} className="h-16 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-blue-700" />
              <a href="mailto:geosonda@bih.net.ba" className="text-gray-700 hover:text-blue-700">
                geosonda@bih.net.ba
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-700" />
              <a href="tel:+38732243400" className="text-gray-700 hover:text-blue-700">
                +387 32 243-400
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-blue-700" />
              <span className="text-gray-700">Masarykova 66a, 72000 Zenica, Bosna i Hercegovina</span>
            </div>
            <LanguageSwitcher />
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Otvori meni</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="bg-blue-700 mt-4">
        <div className="container mx-auto px-4">
          <MainNav />
        </div>
      </div>
    </header>
  )
}
