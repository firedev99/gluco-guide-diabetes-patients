import Icon from "../icons"
import { dates, days, upcomingAppointments } from "@/lib/dummy/appointments"
import { recommendations } from "@/lib/dummy/recommendations"

export default function Recommendations() {
  return (
    // bg-gradient-to-l from-purple-500 to-red-300
    <div className="bg-[#F0F0F0] rounded-xl col-span-2 lg:order-3 lg:col-span-1 lg:row-span-3 py-4">
      {/* upcoming appointments */}
      <div className="flex flex-col">
        {/* upcoming appointment headers */}
        <div className="flex items-center justify-between border-b-2  px-4 pb-3">
          <div className="flex items-center">
            <Icon name="calender" className="w-7 h-7 mr-2 opacity-90" />
            <span className="font-bold opacity-80">Nearest Appointments</span>
          </div>
          <div className="w-9 h-9 rounded-full center transition duration-200 cursor-pointer bg-neutral-200 hover:bg-neutral-300">
            <Icon name="right-arrow" className="w-6 h-6" />
          </div>
        </div>

        {/* upcoming appointment dates */}
        <div className="flex gap-3 lg:gap-4 xl:gap-5 items-center justify-center mt-4">
          {days.map((day, idx) => (
            <div
              key={`p-d-date-${idx}`}
              className={`flex flex-col rounded-2xl items-center justify-center relative ${
                idx === 3 &&
                `before:absolute before:contents[''] before:w-9 before:h-16 before:bg-[--primary-blue] before:rounded-[18px]`
              }`}
            >
              <span
                className={`text-sm font-bold z-[5] opacity-80 mb-2 ${
                  idx === 3 && `opacity-100 text-[--primary-white]`
                }`}
              >
                {day.split("")[0]}
              </span>
              <div
                className={`text-sm font-bold z-[5] cursor-pointer ${
                  idx === 3 && `bg-white w-7 h-7 center rounded-full`
                }`}
              >
                {dates[idx].split("-")[0]}
              </div>
            </div>
          ))}
        </div>

        {/* upcoming appointment details */}
        <div className="px-4 flex flex-col gap-4 mt-8">
          {upcomingAppointments.map(({ name, time, location }, idx) => (
            <div
              key={`appointment_dets_${idx}`}
              className="flex items-center justify-between"
            >
              <div className="flex items-center relative w-1/2 after:absolute after:contents[''] after:w-[3px] after:rounded-sm after:h-9 after:bg-neutral-300 after:right-0 after:-mr-7">
                <div
                  className={`w-5 h-5 min-w-5 rounded-full relative bg-transparent border-2 mr-3 ${
                    idx === 0 ? `border-[#FF881A]` : `border-[#355A38]`
                  } ${
                    idx === 0 &&
                    `before:absolute before:contents[''] before:w-1 before:h-9 before:bg-gradient-to-b before:border-dotted before:border-2 before:opacity-50 before:from-[#FF881A] before:to-[#355A38] before:top-full before:left-1/2 before:-ml-0.5`
                  }`}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold">{time}</span>
                  <span className="text-xs min-w-36 line-clamp-1 font-bold opacity-80">
                    {location}
                  </span>
                </div>
              </div>
              <div className="text-center w-1/3 font-bold opacity-80 text-sm 2xl:text-base">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* recommendations for today */}
      <div className="px-4 flex flex-col mt-8 overflow-y-auto max-h-[486px] blue-scroll">
        <h3 className="opacity-90 font-bold">Today</h3>
        <div>
          {recommendations.map(
            ({ name, time, info, logo, recommended, type }, idx) => (
              <div
                key={`daily_recommendations_${idx}`}
                className="flex items-center justify-between min-h-16"
              >
                <div className="flex items-center relative w-1/2 after:absolute after:contents[''] after:w-[3px] after:rounded-sm after:h-10 after:bg-neutral-300 after:right-0 after:-mr-8">
                  <div
                    className={`h-6 min-w-6 rounded-full center mr-3 relative before:absolute before:contents[''] before:w-1 before:h-10 before:bg-gradient-to-b before:border-dotted before:border-r-2 before:opacity-50 before:top-full before:left-1/2 before:-ml-0.5 ${
                      logo
                        ? `bg-white before:border-[#FF881A]`
                        : `bg-transparent border-2`
                    } ${
                      idx === recommendations.length - 1 && `before:hidden`
                    } ${
                      type === "medicine" &&
                      `border-[--primary-blue] before:border-[--primary-blue]`
                    } ${
                      type === "exercise"
                        ? name === "Yoga"
                          ? `before:border-[#881337]`
                          : `before:border-[#CB4AF8]`
                        : ``
                    }`}
                  >
                    {logo && <Icon name={logo} />}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-bold">{time}</span>
                    <span className="text-xs min-w-36 line-clamp-1 font-bold opacity-80 ">
                      {info}
                    </span>
                  </div>
                </div>
                <div
                  className={`text-center w-1/3 font-bold opacity-80 text-sm 2xl:text-base `}
                >
                  <span
                    className={`${type === "medicine" && `text-[#001459]`}`}
                  >
                    {type === "recommendation"
                      ? `${recommended?.amount || 0}kcal`
                      : name}
                  </span>
                  {recommended && recommended.logo && (
                    <div className="flex items-center justify-center -ml-1">
                      <Icon
                        name={recommended.logo}
                        className={`${type === "medicine" && `mr-1`}`}
                        pathClassName="stroke-[1.5px]"
                      />
                      <span className="text-sm">
                        {type === "medicine" && recommended.amount}{" "}
                        {recommended.type}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="text-right mt-1 mr-5 font-bold opacity-70 hover:underline hover:cursor-pointer">
        see all
      </div>
    </div>
  )
}
