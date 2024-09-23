import { format, startOfToday } from "date-fns"

type Props = {}

const today = startOfToday()

export default function DateHeading({}: Props) {
  return (
    <div className="flex flex-col absolute left-1/2 -translate-x-1/2 3xl:left-[40%] 3xl:-translate-x-[40%] top-1/4">
      <span className="inline-block ml-3 text-xl md:text-2xl font-bold opacity-80">
        {format(today, "iiii")}
      </span>
      <span className="inline-block text-9xl [line-height:0.9] font-extrabold">
        {format(today, "dd.MM")}
      </span>
      <span className="inline-block text-9xl [line-height:0.9] font-extrabold uppercase">
        {format(today, "MMM")}
      </span>
    </div>
  )
}
