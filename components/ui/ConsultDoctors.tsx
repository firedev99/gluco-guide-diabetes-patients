import Image from "next/image"
import imgSrc from "@/public/doctor.png"

export default function ConsultDoctors() {
  return (
    <div className="bg-gradient-to-tr from-[#38567e] to-[#4c8bde] lg:col-span-1 lg:row-span-2 lg:order-4 rounded-xl relative">
      <div className="w-72 h-72 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[rgb(255,255,255)]/10 to-transparent" />
      <div className="mt-24 ml-12  flex flex-col text-[--primary-white]">
        <h3 className="text-2xl  font-extrabold">Consult Doctors</h3>
        <span className="opacity-90 text-sm font-bold">
          get expert advice from
        </span>
        <span className="opacity-90 text-sm font-bold">
          specialist Endocrinologists.
        </span>
      </div>
      <div className="absolute top-full -translate-y-full left-1/2 -translate-x-1/2">
        <div className="relative w-80 h-80">
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
      <button className="font-extrabold text-lg absolute z-10 bottom-8 left-14 px-12 py-4 backdrop-blur-[20px] bg-white/5 rounded-[32px] gradient-border-black">
        consult a doctor now
      </button>
    </div>
  )
}
