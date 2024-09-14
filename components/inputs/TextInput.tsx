import { firey } from "@/utils"
import React from "react"

type Props = {
  name: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  placeHolder?: string
  customName?: string
  type?: React.HTMLInputTypeAttribute
  valid?: boolean
}

export default function Input({
  name,
  value,
  onChange,
  onBlur,
  placeHolder,
  customName,
  type = "text",
  valid,
}: Props) {
  const newName = customName ? firey.camelize(customName) : firey.camelize(name)
  return (
    <div className="flex flex-col">
      <label
        htmlFor={newName}
        className="text-sm font-semibold opacity-90 mb-0.5"
      >
        {name}
      </label>
      <input
        type={type}
        min={type === "number" ? 0 : undefined}
        id={newName}
        name={newName}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeHolder ? placeHolder : `Type ${name}`}
        spellCheck={false}
        className={`text-sm font-medium border border-neutral-300 dark:border-neutral-600 ${
          valid && `outline outline-1 outline-offset-1 outline-red-600`
        } text-neutral-600 dark:text-neutral-400/80 bg-gray-200 dark:bg-neutral-700 placeholder:text-sm indent-1.5 py-1.5 rounded-[4px] -ml-0.5 autofill:shadow-[inset_0_0_0px_1000px_rgba(229,231,235,1)] dark:autofill:shadow-[inset_0_0_0px_1000px_rgba(64,64,64,1)] autofill:[-webkit-text-fill-color:rgba(82,82,82,1)] dark:autofill:[-webkit-text-fill-color:rgba(163,163,163,0.8)] autofill:caret-neutral-600`}
      />
    </div>
  )
}
