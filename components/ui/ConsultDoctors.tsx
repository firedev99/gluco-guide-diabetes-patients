import Image from "next/image"
import imgSrc from "@/public/doctor.png"
import { FlipEfButton } from ".."

export default function ConsultDoctors() {
  return (
    <div className="bg-gradient-to-tr flex flex-col from-[#38567e] to-[#4c8bde] min-h-64 lg:col-span-1 lg:row-span-2 lg:order-4 rounded-xl relative">
      <div className="w-32 h-32 xs:w-40 xs:h-40 md:w-72 md:h-72 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[rgb(255,255,255)]/10 to-transparent" />
      <div className="mt-[72px] xxs:mt-16 xs:mt-10 lg:mt-24 2xl:mt-20 mx-auto xs:ml-8 md:ml-4 2xl:ml-10 flex flex-col text-[--primary-white]">
        <h3 className="text-sm md:text-base 2xl:text-lg font-extrabold">
          Consult Doctors
        </h3>
        <span className="hidden xxs:block text-[10px] md:text-xs opacity-90 font-semibold">
          get expert advice from
        </span>
        <span className="hidden xxs:block text-[10px] md:text-xs opacity-90 font-semibold">
          specialist Endocrinologists.
        </span>
      </div>
      <div className="absolute top-full -translate-y-full left-1/2 -translate-x-1/2">
        <div className="relative w-32 h-32 xs:w-40 xs:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 3xl:w-80 3xl:h-80">
          <Image
            fill
            src={imgSrc}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="doctor.png"
            style={{ objectFit: "cover", filter: "contrast(0.9)" }}
            priority
          />
        </div>
      </div>

      <FlipEfButton
        href="/hospitals/doctors"
        className="bg-white/5 backdrop-blur-[10px] text-xs font-bold w-[116px] h-8 xxs:w-36 xxs:h-10 xs:text-sm xs:w-40 xs:h-10 md:w-44 md:h-12 2xl:w-48 2xl:h-14 rounded-3xl 2xl:rounded-[28px] mx-auto xs:ml-7 md:ml-12 lg:ml-7 2xl:ml-12 2xl:text-lg gradient-border-black mt-auto mb-6 2xl:mb-10"
      >
        consult now
      </FlipEfButton>
    </div>
  )
}
