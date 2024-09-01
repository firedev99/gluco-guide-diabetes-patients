import { Map, Hospitals, SuggestedDoctors } from "@/components"
import { HOSPITALS } from "@/lib/dummy/hospitals"
import { firey } from "@/utils"

const locations = firey.getSpecificArr(HOSPITALS.map((item) => item.city))

export default function HospitalsPage() {
  return (
    <div className="flex flex-col gap-3 pb-6">
      <h1 className="text-center text-5xl md:text-6xl leading-[60px] md:leading-[74px] max-w-[778px] tracking-tighter font-extrabold fancy mx-auto mb-1 lg:mb-2">
        We are now located at {locations.length} cities in Dhaka.
      </h1>
      <Map hospitals={HOSPITALS} />
      <h3 className="ml-2 font-extrabold text-2xl lg:text-3xl mt-3 lg:mt-6 -mb-2">
        Nearby Hospitals
      </h3>
      <Hospitals />
      <h3 className="ml-2 font-extrabold text-2xl lg:text-3xl mt-4 lg:mt-6 -mb-2">
        Recommended Doctors
      </h3>
      <SuggestedDoctors experience={6} />
    </div>
  )
}
