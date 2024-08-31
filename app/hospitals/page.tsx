import { Map, Hospitals, SuggestedDoctors } from "@/components"
import { HOSPITALS } from "@/lib/dummy/hospitals"

export default function HospitalsPage() {
  return (
    <div className="flex flex-col gap-3 pb-6">
      <Map />
      <h3 className="ml-2 font-extrabold text-2xl lg:text-3xl mt-3 lg:mt-4 -mb-3 lg:-mb-2">
        Nearby Hospitals
      </h3>
      <Hospitals />
      <h3 className="ml-2 font-extrabold text-2xl lg:text-3xl mt-4 lg:mt-6 -mb-3 lg:-mb-2">
        Recommended Doctors
      </h3>
      <SuggestedDoctors />
    </div>
  )
}
