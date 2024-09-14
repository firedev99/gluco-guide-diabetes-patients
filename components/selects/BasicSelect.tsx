import React from "react"

type Props = {
  name: string
  values: string[]
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function BasicSelection({ name, values, onChange }: Props) {
  return (
    <div className="-ml-0.5">
      <h4 className="text-sm font-semibold opacity-90 mb-0.5">{name}</h4>
      <select
        onChange={onChange}
        className="py-1.5 px-1.5 pe-9 block w-full bg-gray-200 border border-neutral-300 dark:border-neutral-600 text-sm font-medium rounded-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:text-neutral-400"
      >
        {values.map((item, idx) => (
          <option
            key={`selection-${name.toLowerCase().trim()}-${idx}`}
            value={item}
            // selected={item === selected}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
