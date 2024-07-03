import {
  BloodGlucose,
  BloodPressure,
  ConnectDeviceBanner,
  ConsultDoctors,
  HealthInformations,
  PendingTasks,
} from "@/components"

export default function Dashboard() {
  return (
    <div className="mb-8">
      <div>
        <h2 className="text-xl font-bold">Hey, Walter</h2>
        <span className="text-sm font-semibold opacity-90">
          How are you feeling today?
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
        <PendingTasks />
        <HealthInformations />
        <ConsultDoctors />
        <ConnectDeviceBanner />
        <BloodGlucose />
        <BloodPressure />
      </div>
    </div>
  )
}
