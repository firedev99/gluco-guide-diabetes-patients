import { AlignContent, NoData, ProfileEditModal } from "@/components"
import { USERS } from "@/lib/dummy/users"
import { firey } from "@/utils"
import Image from "next/image"

type Props = {
  searchParams: {
    id: string
  }
}

export default function PatientProfilePage({ searchParams: { id } }: Props) {
  // if (!id) return <NoData content="profile not found 🤐" />
  return (
    <div className="flex flex-col max-w-4xl mx-auto divide-y dark:divide-neutral-500">
      <div className="flex items-center justify-between p-4">
        {/* picture */}
        <div className="relative size-24 min-w-24 rounded-full ring-2 ring-sky-500 ring-offset-4">
          <Image
            fill
            src={USERS[0].imgSrc}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={`${USERS[0].name.toLowerCase().trim()}.jpg`}
            style={{ objectFit: "cover" }}
            priority
            className="rounded-full"
          />
          {/* overlay */}
          <div className="min-h-full min-w-full bg-black/25 absolute top-0 right-0 bottom-0 left-0 rounded-full" />
        </div>

        {/* profession and address */}
        <div className="w-full ml-5">
          <h4 className="font-bold opacity-90 leading-4">
            {USERS[0].profession}
          </h4>
          <h4 className="text-sm font-semibold opacity-80">
            {USERS[0].address}
          </h4>
        </div>

        {/* edit option */}
        <ProfileEditModal />
      </div>

      {/* basic informations */}
      <div className="mt-2 flex flex-col p-4 gap-2">
        <h1 className="text-lg font-bold opacity-75 dark:text-neutral-200">
          Basic information
        </h1>
        <AlignContent
          keys={["Name", "DOB"]}
          values={[USERS[0].name, USERS[0].dateOfBirth]}
        />
        <AlignContent
          keys={["Gender", "Profession"]}
          values={[USERS[0].gender, USERS[0].profession]}
        />
        <AlignContent
          keys={["Contact Number", "Emegency Contact"]}
          values={[USERS[0].contactNumber, USERS[0].emergencyContact]}
        />
        <AlignContent
          keys={["Email", "Address"]}
          values={[USERS[0].emailAddress, USERS[0].address]}
        />
      </div>
      <div className="mt-5 flex flex-col p-4 gap-2">
        <h1 className="text-lg font-bold opacity-75 dark:text-neutral-200">
          Medical History
        </h1>
        <AlignContent
          keys={["Weight", "Height"]}
          values={[`${USERS[0].weight}lb`, `${USERS[0].height}ft`]}
        />
        <AlignContent
          keys={["Blood Group", "Smoking Status"]}
          values={[USERS[0].bloodGroup, USERS[0].smokingStatus]}
        />
        <AlignContent
          keys={["Physical Activity", "Previous Diabetes Record"]}
          values={[
            USERS[0].physicalActivity,
            firey.makeString(USERS[0].diabetesStatus),
          ]}
        />
        <AlignContent
          keys={["Family History Related to Diabetes"]}
          values={[firey.makeString(USERS[0].familyHistoryStatus)]}
        />
      </div>
    </div>
  )
}
