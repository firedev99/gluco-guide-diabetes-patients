import Link from "next/link"

type TYPEDOUBLECONTENT = {
  keys: [string] | [string, string]
  values: [string] | [string, string]
  hrefs?: [string] | [string, string]
  className?: string
}

export default function AlignContent({
  keys,
  values,
  hrefs,
  className,
}: TYPEDOUBLECONTENT) {
  if (keys.length !== values.length) return

  return (
    <div
      className={`flex justify-between ${className} ${
        keys.length === 2 && `gap-4`
      }`}
    >
      {/* fist element  */}
      <div className={keys.length === 1 ? `w-full` : `w-1/2`}>
        <h4 className="font-semibold text-xs xxs:text-sm opacity-90">
          {keys[0]}
        </h4>

        {hrefs ? (
          <Link
            href={hrefs[0]}
            className="text-sm xxs:text-base font-semibold hover:text-blue-800"
          >
            {values[0]}
          </Link>
        ) : (
          <h5 className="text-sm xxs:text-base font-semibold">{values[0]}</h5>
        )}
      </div>

      {/* second element */}
      <div className={keys.length === 1 ? `hidden` : `w-1/2`}>
        <h4 className="font-semibold text-xs xxs:text-sm opacity-90">
          {keys[1]}
        </h4>

        {hrefs && hrefs.length === 2 ? (
          <Link
            href={hrefs[1]}
            className="text-sm xxs:text-base font-semibold hover:text-blue-800"
          >
            {values[1]}
          </Link>
        ) : (
          <h5 className="text-sm xxs:text-base font-semibold">{values[1]}</h5>
        )}
      </div>
    </div>
  )
}
