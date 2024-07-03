import Image from "next/image"
import imgSrc from "@/public/device.png"
import { ShinnyEfBtn } from ".."

export default function ConnectDevice() {
  return (
    <div className="bg-gradient-to-tl relative to-[#9bdcc1] center from-[#00AB59] lg:col-span-1 lg:order-6 h-64 rounded-xl overflow-hidden">
      <div className="absolute w-full h-full bg-black/10 z-[5]" />
      <div className="relative xs:w-4/5 left-0 xs:left-20 2xl:left-16 md:left-28 w-full h-full -scale-x-100">
        <Image
          fill
          src={imgSrc}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="device.png"
          style={{ objectFit: "cover", filter: "contrast(0.9)" }}
        />
      </div>
      <ShinnyEfBtn className="absolute 2xl:left-12 bottom-6 xxs:bottom-10 md:bottom-14 text-xs xxs:text-sm px-5 xs:px-8 py-3 xs:text-lg  gradient-border-green rounded-3xl z-10 backdrop-blur-[20px]">
        connect device
      </ShinnyEfBtn>
    </div>
  )
}
