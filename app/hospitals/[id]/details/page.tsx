import {
  ContactInformation,
  Icon,
  Map,
  NoData,
  SuggestedDoctors,
} from "@/components"
import { HOSPITALS } from "@/lib/dummy/hospitals"
import Image from "next/image"
import React from "react"

type Props = {
  params: {
    id: string
  }
  searchParams: {
    type: string
  }
}

export default async function HospitalPage({
  params: { id },
  searchParams: { type },
}: Props) {
  const details = HOSPITALS.find((item) => item.id === id)

  if (!details) return <NoData />

  return (
    <div className="py-4">
      {/* details */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl leading-[60px] md:leading-[74px] max-w-[778px] tracking-tighter font-extrabold fancy">
          {details.name}
        </h1>
        <div className="mt-5 size-56 min-w-56 md:size-80 md:min-w-80 relative rounded-2xl">
          <Image
            fill
            src={details.imgSrc}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="doctor.png"
            style={{ objectFit: "cover", filter: "contrast(0.9)" }}
            priority
            className="rounded-2xl"
          />
        </div>
        <p className="mt-4 text-sm lg:text-base max-w-[556px] font-semibold opacity-80 line-clamp-4">
          {details.description}
        </p>
        <div className="mt-3 flex items-center -ml-1 opacity-80">
          <Icon name="pin" className="size-5" />
          <h5 className="ml-1 text-sm font-semibold line-clamp-1">
            {details.city}
          </h5>
        </div>
        <p className="mt-1 text-sm font-semibold opacity-70 line-clamp-2">
          {details.address}
        </p>

        {/* contact informations */}
        <ContactInformation
          contactNumbers={details.contactNumbers}
          emails={details.emails}
        />
      </div>

      {/* hospital map */}
      <div className="mt-6">
        <Map hospitals={[details]} coordinates={details.geometry.coordinates} />
      </div>

      {/* doctors from same hospital */}
      <div className="mt-6">
        <SuggestedDoctors hospitalID={details.id}>
          <h3 className="text-2xl text-center lg:text-4xl max-w-[778px] leading-tight font-bold opacity-90 ml-2 mt-5 mb-4 lg:mx-auto lg:font-extrabold lg:mb-6 lg:mt-10">
            Doctors from {details.name}
          </h3>
        </SuggestedDoctors>
      </div>
    </div>
  )
}
