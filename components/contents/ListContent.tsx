type TYPELISTCONTENT = {
  keys: string[]
  values: string[]
  title: string
  className?: string
}

export default function ListContent({
  keys,
  values,
  title,
  className,
}: TYPELISTCONTENT) {
  if (keys.length !== values.length) return <div />

  return (
    <div>
      <h2 className={`font-bold opacity-95 ${className}`}>{title}</h2>
      <ul className="-ml-0.5 mt-0.5">
        {values.map((_, idx) => (
          <li key={`diet-recommendation-${idx}`}>
            <div className="text-sm xxs:text-base flex font-bold opacity-90 gap-1 ">
              <p className="text-nowrap"> - {keys[idx]}</p>
              <p className="font-medium w-full"> {values[idx]}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
