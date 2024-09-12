import React from "react"

type Props = {
  name: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  active: boolean
  className?: string
  inputClass?: string
  labelClass?: string
}

export default function RadioInput({
  name,
  value,
  onChange,
  active,
  className,
  inputClass,
  labelClass,
}: Props) {
  return (
    <div className={`flex ${className}`}>
      <input
        type="radio"
        id={`${name}__id__f`}
        name={name}
        value={value}
        checked={active}
        onChange={onChange}
        className={`peer/active ${inputClass} cursor-pointer appearance-none before:inline-block size-2.5 rounded-full bg-neutral-50 dark:bg-transparent border border-neutral-500 mt-1.5 checked:bg-blue-600 checked:ring-1 ring-offset-2 ring-blue-700`}
      />
      <label
        htmlFor={`${name}__id__f`}
        className={`ml-2 cursor-pointer font-semibold opacity-80 peer-checked/active:opacity-100 ${labelClass}`}
      >
        {value}
      </label>
    </div>
  )
}
