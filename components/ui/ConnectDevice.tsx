import Image from "next/image"
import imgSrc from "@/public/device.png"

export default function ConnectDevice() {
  return (
    <div className="bg-gradient-to-tl relative to-[#9bdcc1] center from-[#00AB59] lg:col-span-1 lg:order-6 h-64 rounded-xl overflow-hidden">
      <div className="absolute w-full h-full bg-black/10 z-[5]" />
      <div className="relative w-4/5 left-28 h-full  -scale-x-100">
        <Image
          fill
          src={imgSrc}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="device.png"
          style={{ objectFit: "cover", filter: "contrast(0.9)" }}
        />
      </div>
      <button className="font-bold text-lg absolute z-10 bottom-8 left-14 px-12 py-4 backdrop-blur-[20px] bg-white/5 text-white/80 rounded-[32px] gradient-border">
        connect device
      </button>
    </div>
  )
}
