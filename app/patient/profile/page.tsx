import { NoData } from "@/components"

type Props = {
  searchParams: {
    id: string
  }
}

export default function PatientProfilePage({ searchParams: { id } }: Props) {
  if (!id) return <NoData content="profile not found 🤐" />

  return (
    <div className="flex items-center justify-center">
      <h2 className="text-5xl font-bold">Patient Profile Page {id}</h2>
    </div>
  )
}
