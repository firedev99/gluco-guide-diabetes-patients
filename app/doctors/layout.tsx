import { Navigation } from "@/components"

export default function DoctorsLayout({
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
