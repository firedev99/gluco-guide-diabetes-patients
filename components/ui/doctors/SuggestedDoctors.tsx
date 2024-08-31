"use client"

import { Icon, Swiper } from "@/components"
import { doctors, DoctorType } from "@/lib/dummy/doctors"
import Image from "next/image"
import React, { useState } from "react"
import { motion } from "framer-motion"

type Props = {
  experience?: number
  limit?: number
  hospitalID?: string
  nID?: string
  children?: React.ReactNode
}

export default function SuggestedDoctors({
  experience,
  hospitalID,
  limit = 10,
  nID,
  children,
}: Props) {
  const modDoctors = hospitalID
    ? doctors
        .filter((item) => item.hospital.id === hospitalID && item.id !== nID)
        .slice(0, limit)
    : experience
    ? doctors.filter((item) => item.experience >= experience).slice(0, limit)
    : doctors.slice(0, limit)

  return (
    <React.Fragment>
      {modDoctors.length !== 0 && children}
      <Swiper>
        {modDoctors.map((doctor, idx) => (
          <div
            key={`carousel-${idx}`}
            className="w-80 h-96 2xl:size-96 min-w-80 2xl:min-w-96"
          >
            <Component doctor={doctor} />
          </div>
        ))}
      </Swiper>
    </React.Fragment>
  )
}

function Component({ doctor }: { doctor: DoctorType }) {
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
          src={doctor.imgSrc}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="doctor.png"
          style={{ objectFit: "cover", filter: "contrast(0.9)" }}
          priority
          className="rounded-lg"
        />
        {/* overlay */}
        <div className="min-h-full min-w-full bg-black/35 absolute top-0 right-0 bottom-0 left-0 rounded-lg" />
        {/* wishlist button */}
        <motion.button
          className="size-8 absolute top-2 right-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm center"
          onClick={toggleWishlist}
          whileTap={{ scale: 0.95 }}
        >
          <Icon
            name="heart"
            className={`size-5 ${wishlisted && `fill-red-300/50`}`}
          />
        </motion.button>
        {/* doctor details */}
        <div className="w-11/12 text-[--primary-white] bg-white/20 backdrop-blur-lg p-4 absolute bottom-3 2xl:bottom-4 left-1/2 -translate-x-1/2 rounded-lg">
          <h3 className="font-bold line-clamp-1">{doctor.name}</h3>
          <div className="flex items-center -ml-1">
            <Icon name="pin" className="size-5" />
            <h5 className="ml-1 text-sm font-semibold line-clamp-1">
              {doctor.hospital.name}
            </h5>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
