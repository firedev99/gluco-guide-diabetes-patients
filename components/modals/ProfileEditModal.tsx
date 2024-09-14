"use client"

import {
  BasicSelect,
  Button,
  Checkbox,
  DatePicker,
  Icon,
  Modal,
  TextInput,
} from "@/components"
import { useForm } from "@/hooks/useForm"
import {
  bloodGroups,
  diabetesTypes,
  familyHistoryStatuses,
  physicalActivities,
  smokingStatuses,
} from "@/lib/dummy/lifestyles"
import { firey } from "@/utils"
import { validations } from "@/utils/validations"
import Image from "next/image"
import React, { useRef, useState } from "react"

const initialValues = {
  name: "Walter White",
  dateOfBirth: "05/05/1999",
  gender: "male",
  address: "31/23F, Gulshan 2",
  imgSrc:
    "https://res.cloudinary.com/dwhlynqj3/image/upload/v1726258434/walter-white-fmooxtbbf8n.jpg",
  profession: "Lord",
  contactNumber: "+8801867814789",
  emergencyContact: "+8801733694367",
  emailAddress: "walter@gmail.com",
  bloodGroup: "A+",
  weight: 154,
  height: 5.3,
  diabetesStatus: ["Gestational", "Type 1"],
  familyHistoryStatus: ["None"],
  smokingStatus: "None Smoker",
  physicalActivity: "Moderate",
}

export default function ProfileEditModal() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedImgSrc, setSelectedImgSrc] = useState<string | null>(null)
  const [imgUploadSrc, setImgUploadSrc] = useState<File | null>()

  const {
    errors,
    isSubmitting,
    setIsSubmitting,
    values,
    setValues,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm({
    formValues: initialValues,
    onSubmit: (val) => {
      console.log(val)
      setIsSubmitting(false)
    },
    validationFunc: validations.profile_edit,
  })

  const disableBtn = Object.keys(errors).some(
    (key) => errors.hasOwnProperty(key) && errors[key] !== null
  )

  function errStatus(key: string) {
    return errors.hasOwnProperty(key) && errors[key] !== null
  }

  function handleImgOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    // handle if the file uploader is cancelled
    if (!e.target.files || e.target.files.length === 0) return

    try {
      const blob = new Blob([e.target.files[0]])
      const blobURL = URL.createObjectURL(blob)
      setSelectedImgSrc(blobURL)
      setImgUploadSrc(e.target.files[0])
    } catch (err) {
      console.log("something went wrong!")
    }
  }

  // handle image upload to users folder on cloudinary
  async function handleImgSubmission() {
    if (!imgUploadSrc) return

    const newFileName = `${values.name
      .split(" ")
      .join("-")
      .toLowerCase()}-${firey.getID()}`

    const formData = new FormData()
    formData.append("file", imgUploadSrc)
    formData.append("upload_preset", "gluco-guide-users")
    formData.append("public_id", newFileName)

    const data = await fetch(
      `https://api.cloudinary.com/v1_1/dwhlynqj3/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )

    const result = await data.json()
    console.log(result)
  }

  // handle date selection
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value.split("-").reverse().join("/")
    setValues((prev) => ({ ...prev, dateOfBirth: newDate }))
  }

  // handle physical activities changes
  function handlePhysicalActivity(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({
      ...prev,
      physicalActivity: e.target.value,
    }))
  }

  // handle smoking stutus changes
  function handleSmokingStatus(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({
      ...prev,
      smokingStatus: e.target.value,
    }))
  }

  function handleDiabetesStatus(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exists = prev.diabetesStatus.includes(value)
      const newStatus = exists
        ? prev.diabetesStatus.filter((item) => item !== value)
        : prev.diabetesStatus.concat(value)
      return { ...prev, diabetesStatus: newStatus }
    })
  }

  function handleFamilyHistoryStatus(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exists = prev.familyHistoryStatus.includes(value)
      const newStatus = exists
        ? prev.familyHistoryStatus.filter((item) => item !== value)
        : prev.familyHistoryStatus.concat(value)
      return { ...prev, familyHistoryStatus: newStatus }
    })
  }

  return (
    <React.Fragment>
      <button
        className="rounded-full flex items-center gap-2 border border-gray-300 py-1 px-2.5"
        onClick={() => setOpenModal(true)}
      >
        <Icon
          name="settings"
          className="size-4"
          pathClassName="stroke-neutral-600 dark:stroke-neutral-400"
        />
        <span className="text-sm font-semibold opacity-90">Edit</span>
      </button>
      <Modal
        open={openModal}
        handler={() => setOpenModal(false)}
        direction="center"
        secondaryBtn={
          <Button disabled={isSubmitting || disableBtn} onClick={handleSubmit}>
            Save change
          </Button>
        }
        className="h-full sm:h-3/4 w-full max-w-[720px]"
      >
        <div className="flex flex-col gap-2 divide-y dark:divide-neutral-500 p-4 overflow-x-hidden overflow-y-auto custom-scroll">
          {/* profile picture */}
          <div className="py-3 flex mx-auto">
            <div className="relative size-24 min-w-24 rounded-full ring-2 ring-sky-500 ring-offset-4 group">
              <Image
                fill
                src={selectedImgSrc ? selectedImgSrc : values.imgSrc}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`${values.name.toLowerCase().trim()}.jpg`}
                style={{ objectFit: "cover" }}
                priority
                className="rounded-full"
              />
              {/* overlay */}
              <div className="min-h-full min-w-full bg-black/25 absolute top-0 right-0 bottom-0 left-0 rounded-full" />
              <button className="opacity-0 group-hover:opacity-100 transition absolute bottom-0 right-0 size-7 center rounded-full bg-neutral-800/25 contrast-75 backdrop-blur-sm ">
                <Icon
                  name="settings"
                  className="size-5"
                  pathClassName="stroke-neutral-100 dark:stroke-neutral-300"
                />
                <input
                  type="file"
                  name="profile_picture_file_reader"
                  className="absolute left-0 opacity-0 w-7"
                  onChange={handleImgOnChange}
                />
              </button>
            </div>
          </div>

          {/* basic informations */}
          <div className="py-4">
            <h1 className="text-lg font-bold opacity-75 dark:text-neutral-200 mb-2">
              Basic information
            </h1>
            <div className="grid sm:grid-cols-2 gap-3">
              <TextInput
                name="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errStatus("name")}
              />
              <DatePicker
                name="DOB"
                value={values.dateOfBirth}
                onChange={handleDateChange}
              />
              <BasicSelect
                name="Gender"
                values={["Male", "Female", "Others"]}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    gender: e.target.value.toLowerCase(),
                  }))
                }
              />
              <TextInput
                name="Profession"
                value={values.profession}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errStatus("profession")}
              />
              <TextInput
                name="Contact"
                customName="Contact Number"
                value={values.contactNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errStatus("contactNumber")}
              />
              <TextInput
                name="Emergency Contact"
                value={values.emergencyContact}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errStatus("emergencyContact")}
              />
              <TextInput
                name="Email"
                customName="Email Address"
                value={values.emailAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errStatus("emailAddress")}
              />
              <TextInput
                name="Address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errStatus("address")}
              />
            </div>
          </div>
          <div className="py-4">
            <h1 className="text-lg font-bold opacity-75 dark:text-neutral-200 mb-2">
              Medical history
            </h1>
            <div className="grid sm:grid-cols-2 gap-3">
              <TextInput
                name="Weight (lb)"
                type="number"
                customName="Weight"
                value={values.weight}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errStatus("weight")}
              />
              <TextInput
                name="Height (ft)"
                customName="Height"
                type="number"
                value={values.height}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errStatus("height")}
              />
              <BasicSelect
                name="Blood Group"
                values={bloodGroups}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, bloodGroup: e.target.value }))
                }
              />
            </div>

            {/* physical activity preferences options */}
            <fieldset className="mt-4">
              <legend className="text-sm font-semibold opacity-90">
                Physical Activities
              </legend>

              <div className="flex flex-wrap mt-2 gap-2">
                {physicalActivities.map((value, idx) => (
                  <Checkbox
                    key={`dietaryPreOpt-${idx}`}
                    name={firey.camelize(value)}
                    value={value}
                    active={values.physicalActivity === value}
                    onChange={handlePhysicalActivity}
                  />
                ))}
              </div>
            </fieldset>

            {/* smoking status options */}
            <fieldset className="mt-4">
              <legend className="text-sm font-semibold opacity-90">
                Smoking Status
              </legend>

              <div className="flex flex-wrap mt-2 gap-2">
                {smokingStatuses.map((value, idx) => (
                  <Checkbox
                    key={`dietaryPreOpt-${idx}`}
                    name={firey.camelize(value)}
                    value={value}
                    active={values.smokingStatus === value}
                    onChange={handleSmokingStatus}
                  />
                ))}
              </div>
            </fieldset>

            {/* physical activity preferences options */}
            <fieldset className="mt-4">
              <legend className="text-sm font-semibold opacity-90">
                Type of Diabetes
              </legend>

              <div className="flex flex-wrap mt-2 gap-2">
                {diabetesTypes.map((value, idx) => (
                  <Checkbox
                    key={`dietaryPreOpt-${idx}`}
                    name={firey.camelize(value)}
                    value={value}
                    active={values.diabetesStatus.includes(value)}
                    onChange={handleDiabetesStatus}
                  />
                ))}
              </div>
            </fieldset>

            {/* family history related to diabetes */}
            <fieldset className="mt-4">
              <legend className="text-sm font-semibold opacity-90">
                Family History Related to Diabetes
              </legend>

              <div className="flex flex-wrap mt-2 gap-2">
                {familyHistoryStatuses.map((value, idx) => (
                  <Checkbox
                    key={`dietaryPreOpt-${idx}`}
                    name={firey.camelize(value)}
                    value={value}
                    active={values.familyHistoryStatus.includes(value)}
                    onChange={handleFamilyHistoryStatus}
                  />
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  )
}
