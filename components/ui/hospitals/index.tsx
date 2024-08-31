"use client"

import { Icon, Swiper } from "@/components"
import { HOSPITALS, HospitalType } from "@/lib/dummy/hospitals"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

export default function index() {
  return (
    <Swiper>
      {HOSPITALS.map((hospital, idx) => (
        <div
          key={`carousel-${idx}`}
          className="w-80 h-96 2xl:size-96 min-w-80 2xl:min-w-96"
        >
          <Component hospital={hospital} />
        </div>
      ))}
    </Swiper>
  )
}

function Component({ hospital }: { hospital: HospitalType }) {
  const [wishlisted, setWishlisted] = useState<boolean>(false)

  const toggleWishlist = () => setWishlisted(!wishlisted)

  return (
    <motion.div
      className={`size-full p-2`}
      whileTap={{ scale: 0.988 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative size-full rounded-lg hover:cursor-pointer active:cursor-grabbing">
        <Image
          fill
          src={hospital.properties.img_src}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="doctor.png"
          style={{ objectFit: "cover", filter: "contrast(0.9)" }}
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
          <h3 className="font-bold line-clamp-1">{hospital.properties.name}</h3>
          <div className="flex items-center -ml-1">
            <Icon name="pin" className="size-5" />
            <h5 className="ml-1 text-sm font-semibold">
              {hospital.properties.city}
            </h5>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
