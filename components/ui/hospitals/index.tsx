"use client"

import { Icon, Swiper } from "@/components"
import { HOSPITALS } from "@/lib/dummy/hospitals"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function HospitalsSwiper() {
  const [dragging, setDragging] = useState<boolean>(false)

  const router = useRouter()

  const [wishlisted, setWishlisted] = useState<boolean>(false)

  // toggle wishlist button controls
  const toggleWishlist = () => setWishlisted(!wishlisted)

  // handle navigation based on dragging status
  function handleNavigation(id: string) {
    if (!dragging) {
      router.push(`/hospitals/${id}/details?type=view`)
    }
  }

  return (
    <Swiper
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
    >
      {HOSPITALS.map((hospital, idx) => (
        <div
          key={`carousel-${idx}`}
          className="w-80 h-96 2xl:size-96 min-w-80 2xl:min-w-96"
        >
          <div className={`size-full p-2`}>
            <motion.div
              className="relative size-full rounded-lg hover:cursor-pointer active:cursor-grabbing"
              whileTap={{ scale: 0.988 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleNavigation(hospital.id)}
            >
              <Image
                fill
                src={hospital.imgSrc}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="doctor.png"
                style={{ objectFit: "cover" }}
                priority
                className="rounded-lg"
              />
              {/* overlay */}
              <div className="min-h-full min-w-full bg-black/25 absolute top-0 right-0 bottom-0 left-0 rounded-lg" />
              {/* wishlist button */}
              <motion.button
                className="size-8 absolute top-2 right-2 rounded-full bg-white/20 backdrop-blur-sm center hover:bg-white/40"
                onClick={toggleWishlist}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  name="heart"
                  className={`size-5 ${wishlisted && `fill-red-300/50`}`}
                />
              </motion.button>
              {/* hospital details */}
              <div className="w-11/12 text-[--primary-white] bg-white/10 backdrop-blur-sm p-4 absolute bottom-3 2xl:bottom-4 left-1/2 -translate-x-1/2 rounded-lg">
                <h3 className="font-bold line-clamp-1">{hospital.name}</h3>
                <div className="flex items-center -ml-1">
                  <Icon name="pin" className="size-5" />
                  <h5 className="ml-1 text-sm font-semibold">
                    {hospital.city}
                  </h5>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </Swiper>
  )
}
