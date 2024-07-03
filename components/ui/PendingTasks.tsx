import React from "react"
import Icon from "../icons"
import { dates, days, upcomingAppointments } from "@/lib/dummy/appointments"
import { recommendations } from "@/lib/dummy/recommendations"
import WalkingDog from "../fancy/WalkingDog"

export default function PendingTasks() {
  return (
    <div className="bg-[#F0F0F0] rounded-xl col-span-2 lg:order-3 lg:col-span-1 lg:row-span-3 pt-6 pb-4">
      {/* upcoming appointments */}
      <div className="flex flex-col">
        <div className="flex flex-col px-3">
          {/* date header for selected day */}
          <div className="flex items-center">
            <h3 className="text-6xl font-bold">19</h3>
            <div className="flex flex-col ml-2 mb-1">
              <span className="text-2xl lg:text-xl xl:text-2xl font-bold">
                Wednesday
              </span>
              <span className="opacity-65 font-semibold leading-4 lg:leading-5 xl:leading-4">
                June
              </span>
            </div>
          </div>

          {/* ongoing week  */}
          <div className="flex gap-3 lg:gap-[14px] 2xl:gap-5 items-center justify-start lg:justify-center mt-2 lg:mt-4 ml-2 lg:ml-0">
            {days.map((day, idx) => (
              <div
                key={`p-d-date-${idx}`}
                className={`flex flex-col rounded-2xl items-center justify-center relative ${
                  idx === 3 &&
                  `before:hidden lg:before:block before:absolute before:contents[''] before:w-9 before:h-16 before:bg-[--primary-blue] before:rounded-[18px]`
                }`}
              >
                <span
                  className={`hidden lg:block text-xs 2xl:text-sm font-bold z-[5] opacity-80 mb-2 ${
                    idx === 3 && `opacity-100 text-[--primary-white]`
                  }`}
                >
                  {day.split("")[0]}
                </span>
                <div
                  className={`text-xs 2xl:text-sm font-bold z-[5] cursor-pointer ${
                    idx === 3 &&
                    `lg:bg-white bg-[--primary-blue] w-7 h-7 center rounded-full text-[--primary-white] lg:text-[--primary-black]`
                  }`}
                >
                  {dates[idx].split("-")[0]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* upcoming appointment details */}
        <div className="px-3 flex flex-col gap-2 md:gap-4 mt-5 md:mt-7 2xl:mt-8">
          <h5 className="opacity-90 text-sm md:text-base font-bold">
            Appointments
          </h5>
          {upcomingAppointments.map(
            ({ start, end, location, type, name }, idx) => (
              <div
                key={`appointment_dets_${idx}`}
                className="flex items-center justify-between"
              >
                <div className="flex items-center relative w-1/2 after:absolute after:contents[''] after:w-[3px] after:rounded-sm after:h-10 after:bg-neutral-300 after:right-0 after:hidden xl:after:block after:-mr-5 3xl:after:-mr-8">
                  <div className="h-6 min-w-6 rounded-full center mr-3 relative before:absolute before:contents[''] before:w-1 before:h-10 before:bg-gradient-to-b before:border-dotted before:border-r-2 before:opacity-50 before:top-full before:left-1/2 before:-ml-0.5 bg-white">
                    <Icon
                      name={type === "appointment" ? "doctor" : "beat-graphics"}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold line-clamp-1">{`${start}-${end}`}</span>
                    <span className="text-xs line-clamp-1 font-bold opacity-80">
                      {location}
                    </span>
                  </div>
                </div>
                <div
                  className={`text-center w-1/4 min-w-28 lg:min-w-20 lg:w-2/5 xl:w-1/3 font-bold opacity-100 lg:opacity-80 text-xs 2xl:text-sm lg:bg-transparent py-2 px-1.5 lg:p-0  rounded-md ${
                    type === "appointment" ? `bg-blue-200` : `bg-green-200`
                  }`}
                >
                  {name}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* recommendations for today */}
      <div className="flex flex-col mt-8 overflow-y-auto overflow-x-hidden max-h-72 lg:max-h-[472px] blue-scroll">
        {/* no recommendation available */}
        {recommendations.length === 0 ? (
          <div className="center flex-col mb-4">
            <WalkingDog className="w-full h-full max-w-80" />
            <span className="text-sm xxs:text-base font-semibold lg:font-bold text-center opacity-70 -mt-4">
              no recommendations for today!
            </span>
          </div>
        ) : (
          <React.Fragment>
            <h5 className="opacity-90 text-sm md:text-base font-bold pl-3">
              Today
            </h5>
            <div>
              {recommendations.map(
                ({ name, start, end, info, logo, recommended, type }, idx) => (
                  <div
                    key={`daily_recommendations_${idx}`}
                    className="flex items-center justify-between min-h-[52px] xs:min-h-16"
                  >
                    <div className="pl-3 flex items-center relative w-1/2 after:absolute after:contents[''] after:w-[3px] after:rounded-sm after:h-10 after:bg-neutral-300 after:right-0 after:hidden xl:after:block after:-mr-6 3xl:after:-mr-9">
                      <div
                        className={`h-6 min-w-6 rounded-full center mr-3 relative before:absolute before:contents[''] before:w-1 before:h-10 before:bg-gradient-to-b before:border-dotted before:border-r-2 before:opacity-50 before:top-full before:left-1/2 before:-ml-0.5 bg-white ${
                          idx === recommendations.length - 1 && `before:hidden`
                        } ${
                          type === "medicine" &&
                          `before:border-[--primary-blue]`
                        } ${
                          type === "exercise" &&
                          name === "Yoga" &&
                          `before:border-[#881337]`
                        } ${
                          type === "exercise" &&
                          name === "Cycling" &&
                          `before:border-[#CB4AF8]`
                        } ${
                          type === "exercise" &&
                          name === "Jogging" &&
                          `before:border-[#FF881A]`
                        } ${
                          type === "recommendation" && `before:border-[#FF7F7F]`
                        }`}
                      >
                        {logo && <Icon name={logo} />}
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm line-clamp-1 font-bold">
                          {`${start}-${end}`}
                        </span>
                        <span className="text-xs line-clamp-1 font-bold opacity-80 ">
                          {info}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`text-center w-1/4 lg:w-2/5 xl:w-1/3 font-bold opacity-80 text-xs 2xl:text-sm mr-2 xxs:mr-0.5 md:mr-0`}
                    >
                      <span
                        className={`${type === "medicine" && `text-[#001459]`}`}
                      >
                        {type === "recommendation"
                          ? `${recommended?.amount || 0}kcal`
                          : name}
                      </span>
                      {recommended && (
                        <div className="flex items-center justify-center">
                          <span
                            className={`text-xs 2xl:text-sm py-0 xs:py-1 px-1.5 lg:bg-transparent lg:p-0 rounded-md ${
                              type === "medicine" &&
                              `bg-blue-200 ml-1 min-h-6 center`
                            }`}
                          >
                            {type === "medicine" && recommended.quantity}{" "}
                            {recommended.type}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}
