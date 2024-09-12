"use client"

import React, { Dispatch, useState } from "react"
import { Button, Checkbox, Modal } from "@/components"
import { firey } from "@/utils"
import { HOSPITALS } from "@/lib/dummy/hospitals"
import { DoctorFilterProps } from "../ui/doctors"

type Props = {
  active: boolean
  handler: () => void
  values: DoctorFilterProps
  setValues: Dispatch<React.SetStateAction<DoctorFilterProps>>
}

const locations = firey.getSpecificArr(HOSPITALS.map((item) => item.city))
const hospitals = firey.getSpecificArr(HOSPITALS.map((item) => item.name))

export default function DoctorFilter({
  active,
  handler,
  values,
  setValues,
}: Props) {
  const [selected, setSelected] = useState<DoctorFilterProps>({
    locations: values.locations,
    hospitals: values.hospitals,
  })

  // handle location selection
  function handleLocations(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected((prev) => {
      const value = e.target.value
      const exist = prev.locations.includes(value)
      const newLocations = exist
        ? prev.locations.filter((item) => item !== value)
        : prev.locations.concat(value)
      return { ...prev, locations: newLocations }
    })
  }

  // handle hospital selection
  function handleHospitals(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected((prev) => {
      const value = e.target.value
      const exist = prev.hospitals.includes(value)
      const newHospitals = exist
        ? prev.hospitals.filter((item) => item !== value)
        : prev.hospitals.concat(value)
      return { ...prev, hospitals: newHospitals }
    })
  }

  // // check if the nested object containing array is empty
  // function checkIfEmpty() {
  //   return Object.values(selected).every((item) => item.length === 0)
  // }

  // close the modal n keep the previous prefered options
  function closeModal() {
    setSelected({
      locations: values.locations,
      hospitals: values.hospitals,
    })

    handler()
  }

  // confirm filter options
  function confirmFilter() {
    setValues({
      locations: selected.locations,
      hospitals: selected.hospitals,
    })

    handler()
  }

  return (
    <React.Fragment>
      <Modal
        open={active}
        handler={closeModal}
        className="h-full sm:h-3/4 w-full max-w-[720px]"
        direction="center"
        secondaryBtn={<Button onClick={confirmFilter}>Confirm</Button>}
      >
        <div className="overflow-x-hidden overflow-y-auto p-4 custom-scroll">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">
              Filter Doctors by Location or Hospital
            </h2>
            <p className="text-sm font-medium opacity-85">
              Select a city or hospital name to find doctors that match your
              preferences. This will help you narrow down your search and
              quickly connect with the right professionals.
            </p>
          </div>
          <fieldset>
            <legend className="text-base md:text-lg font-bold">
              Nearby locations
            </legend>

            {/* food allergy options */}
            <div className="flex flex-col mt-2 gap-2">
              {locations.map((name, idx) => (
                <Checkbox
                  key={`alergyOpt-${idx}`}
                  name={name.toLowerCase().trim()}
                  value={name}
                  active={selected.locations.includes(name)}
                  onChange={handleLocations}
                  direction="left"
                />
              ))}
            </div>
          </fieldset>
          <fieldset className="mt-4">
            <legend className="text-base md:text-lg font-bold">
              Glucoguide x Hospitals
            </legend>

            {/* food allergy options */}
            <div className="flex flex-col mt-2 gap-2">
              {hospitals.map((name, idx) => (
                <Checkbox
                  key={`alergyOpt-${idx}`}
                  name={name.toLowerCase().trim()}
                  value={name}
                  active={selected.hospitals.includes(name)}
                  onChange={handleHospitals}
                  direction="left"
                />
              ))}
            </div>
          </fieldset>
        </div>
      </Modal>
    </React.Fragment>
  )
}
