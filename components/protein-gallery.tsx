"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations } from "@/lib/translations"

export function ProteinGallery({ language = "en" }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayRef = useRef(null)

  const t = translations[language]

  // Updated protein structures with new high-resolution images
  const proteinStructures = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01%20GaleryFully%20disordered%20Structure-NhpZwEGmdGB6WzvJ3shvCBp7C05bg2.png",
      title: language === "en" ? "Fully Disordered Structure" : "Estructura Completamente Desordenada",
      description:
        language === "en"
          ? "A yellow elongated protein structure showing a disordered conformation with a transparent molecular surface."
          : "Una estructura proteica amarilla alargada que muestra una conformación desordenada con una superficie molecular transparente.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02%20Galery%20Fully%20alpha%20helix%20Structure-wkZbzHbWR301OhsJ8oRVwusLBqcXLM.png",
      title: language === "en" ? "Alpha Helix Structure" : "Estructura de Hélice Alfa",
      description:
        language === "en"
          ? "A red and green protein structure showing alpha helical domains with distinct surface regions."
          : "Una estructura proteica roja y verde que muestra dominios helicoidales alfa con regiones superficiales distintas.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03%20Galery%20Mixed%20alpha%20helix%20disorder%20Structure-H0qiBegvMySet7KVwCgLs6oLhvBTJI.png",
      title: language === "en" ? "Mixed Alpha Helix-Disorder Structure" : "Estructura Mixta de Hélice Alfa-Desorden",
      description:
        language === "en"
          ? "A green and pink protein structure showing both alpha helical regions and disordered segments."
          : "Una estructura proteica verde y rosa que muestra tanto regiones helicoidales alfa como segmentos desordenados.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04%20Galery%20Mixed%20disorder%20and%20Alpha%20helix%20Structure-BWMbChizEEfyoNTZ6TNfyWSe6d0obR.png",
      title: language === "en" ? "Mixed Disorder-Alpha Helix Structure" : "Estructura Mixta de Desorden-Hélice Alfa",
      description:
        language === "en"
          ? "A blue-green protein structure with alpha helical domains and disordered regions."
          : "Una estructura proteica azul-verde con dominios helicoidales alfa y regiones desordenadas.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05%20Galery%20%20alpha%20helix%20disorder%20hydrophobic%20Structure-sJ5TAU7S1deMOrUqe16kT99BuT590X.png",
      title: language === "en" ? "Alpha Helix with Hydrophobic Core" : "Hélice Alfa con Núcleo Hidrofóbico",
      description:
        language === "en"
          ? "A purple protein structure showing alpha helical domains with a hydrophobic core region."
          : "Una estructura proteica púrpura que muestra dominios helicoidales alfa con una región de núcleo hidrofóbico.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06%20Galery%20Mixed%20disorder%20disorder%20Structure-CIKHnzzVxDwP6TppmapDxGBp7oyyxt.png",
      title: language === "en" ? "Mixed Disorder Structure" : "Estructura de Desorden Mixto",
      description:
        language === "en"
          ? "A yellow-orange protein structure showing different types of disordered regions."
          : "Una estructura proteica amarillo-naranja que muestra diferentes tipos de regiones desordenadas.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07%20Galery%20alpha%20alpha%20Structure-TKsEVXnfoRxhmC01xr3bnqCExNgIWw.png",
      title: language === "en" ? "Alpha-Alpha Interface Structure" : "Estructura de Interfaz Alfa-Alfa",
      description:
        language === "en"
          ? "A green protein structure showing the interface between two alpha helical domains."
          : "Una estructura proteica verde que muestra la interfaz entre dos dominios helicoidales alfa.",
    },
  ]

  // Auto-rotate the gallery
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % proteinStructures.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [proteinStructures.length])

  const handlePrevious = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + proteinStructures.length) % proteinStructures.length)
      setIsAnimating(false)
    }, 300)
  }

  const handleNext = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % proteinStructures.length)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <Card className="bg-black/30 border-purple-500/20 overflow-hidden">
      <CardContent className="p-0 relative">
        <div className="relative h-[400px] w-full">
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src={proteinStructures[currentIndex].image || "/placeholder.svg"}
                  alt={proteinStructures[currentIndex].title}
                  layout="fill"
                  objectFit="contain"
                  className="transform hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white">{proteinStructures[currentIndex].title}</h3>
            <p className="text-sm text-purple-200">{proteinStructures[currentIndex].description}</p>
          </div>

          {/* Pagination dots */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-1.5">
            {proteinStructures.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-purple-500 w-4" : "bg-purple-500/30"
                }`}
                onClick={() => {
                  if (autoplayRef.current) {
                    clearInterval(autoplayRef.current)
                  }
                  setIsAnimating(true)
                  setTimeout(() => {
                    setCurrentIndex(index)
                    setIsAnimating(false)
                  }, 300)
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            className="bg-black/50 text-white hover:bg-black/70 rounded-full h-10 w-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="bg-black/50 text-white hover:bg-black/70 rounded-full h-10 w-10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

