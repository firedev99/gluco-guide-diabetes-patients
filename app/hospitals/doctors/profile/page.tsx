import { DoctorDets, NoData } from "@/components"
import { doctors } from "@/lib/dummy/doctors"

type Props = {
  searchParams: {
    id: string
    type: string
  }
}

export default async function ProfilePage({ searchParams: { id } }: Props) {
  const doctor = doctors.find((item) => item.id === id)

  if (!doctor) return <NoData />
  return (
    <div className="pb-10 lg:pb-12">
      <DoctorDets doctor={doctor} />
    </div>
  )
}
