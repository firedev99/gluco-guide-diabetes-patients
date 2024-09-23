import { DateHeading, HealthMonitoring, Icon, Medications } from "@/components"

export default function PatientMonitoringPage() {
  return (
    <div className="relative overflow-hidden">
      <DateHeading />
      <HealthMonitoring />
      <Medications />
    </div>
  )
}
