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
        className={`peer/active ${inputClass} cursor-pointer`}
      />
      <label
        htmlFor={`${name}__id__f`}
        className={`ml-1 cursor-pointer font-semibold opacity-80 peer-checked/active:opacity-100 ${labelClass}`}
      >
        {value}
      </label>
    </div>
  )
}
