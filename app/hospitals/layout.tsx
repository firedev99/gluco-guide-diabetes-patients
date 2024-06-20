import { Navigation } from "@/components"

export default function HospitalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
