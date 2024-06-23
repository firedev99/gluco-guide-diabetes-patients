import { BloodGlucose, HealthInformations, Recommendations } from "@/components"

export default function Dashboard() {
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold">Hey, Walter</h2>
        <span className="text-sm font-semibold opacity-90">
          How are you feeling today?
        </span>
      </div>

      {/* min-h-[800px] */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
        {/* Recommendations & Medications */}
        <Recommendations />

        <HealthInformations />

        {/* Consult Doctors */}
        <div className="bg-gradient-to-tr from-orange-200 to-yellow-300 lg:col-span-1 lg:row-span-2 lg:order-4 center">
          <h4>Consult Doctors</h4>
        </div>

        {/* Connect Device */}
        <div className="bg-gradient-to-tl from-teal-500 center to-teal-200 center lg:col-span-1 lg:order-6">
          <h4>Connect Device</h4>
        </div>

        <BloodGlucose />

        {/* Blood Pressure */}
        <div className="bg-gradient-to-tr from-pink-200 to-rose-400 col-span-2 center lg:order-5 lg:row-span-2">
          <h4>Blood Pressure</h4>
        </div>
      </div>
    </div>
  )
}
