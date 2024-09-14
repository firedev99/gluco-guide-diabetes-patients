import React from "react"

type Props = {
  name: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  active: boolean
  roundedInput?: boolean
  className?: string
  inputClass?: string
  labelClass?: string
  direction?: "left" | "right"
}

export default function CheckInput({
  name,
  value,
  onChange,
  active,
  className,
  inputClass,
  labelClass,
  roundedInput = false,
  direction = "right",
}: Props) {
  return (
    <div
      className={`border-2 has-[input:checked]:border-blue-500 dark:border-neutral-500 has-[input:checked]:bg-blue-50 dark:has-[input:checked]:bg-blue-600/20 px-4 py-2 rounded-full ${className}`}
    >
      <label
        className={`cursor-pointer group flex items-center text-sm font-semibold select-none ${
          direction === "left" && `flex-row-reverse justify-end`
        }`}
      >
        <input
          type="checkbox"
          id={`${name}__id__f`}
          name={name}
          checked={active}
          value={value}
          onChange={onChange}
          className={`${inputClass} appearance-none`}
        />
        {value}
        {roundedInput && (
          <div
            className={`ml-2.5 size-2.5 rounded-full group-has-[input:checked]:bg-blue-600 ring-1 ring-gray-400 group-has-[input:checked]:ring-offset-2 group-has-[input:checked]:ring-blue-700 dark:group-has-[input:checked]:bg-blue-700 dark:group-has-[input:checked]:ring-blue-800 ${
              direction === "left" && `mr-2`
            }`}
          />
        )}
      </label>
    </div>
  )
}
