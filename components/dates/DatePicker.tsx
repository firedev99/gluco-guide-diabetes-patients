import React from "react"

type Props = {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function DatePicker({ name, value, onChange }: Props) {
  const newValue = value.split("/").reverse().join("-")
  return (
    <div>
      <h4 className="text-sm font-semibold opacity-90 mb-0.5">{name}</h4>
      <input
        type="date"
        id={name.toLowerCase()}
        name={name.toLowerCase()}
        value={newValue}
        className="w-full text-sm font-medium py-[5px] px-1 rounded-[3px] border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400/80 bg-gray-200 dark:bg-neutral-700"
        onChange={onChange}
      />
    </div>
  )
}
