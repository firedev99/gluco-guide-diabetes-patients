import Icon from "../icons"

export default function HealthInformations() {
  return (
    <div className="bg-[#f0f0f0] rounded-xl row-span-2 lg:col-span-1 lg:order-2 p-1.5 md:p-3 flex flex-col gap-2">
      {/* body temperature */}
      <div className="bg-[--primary-white] rounded-lg">
        <div className="flex justify-between py-2 px-1 md:p-3 border-b-2 border-b-[#f0f0f0]">
          <div className="flex items-center 3xl:ml-3">
            <div>
              <Icon name="fire" className="w-7 h-7" />
            </div>
            <span className="text-xs md:text-sm 2xl:text-base font-semibold ml-1 2xl:ml-2 mt-1 md:mt-0.5">
              Body Temperature
            </span>
          </div>
          <div className="hidden w-8 h-8 bg-neutral-200 center rounded-full transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
            <Icon name="rotated-arrow" className="w-8 h-8" />
          </div>
        </div>
        <h3 className="text-center py-4 text-2xl font-bold text-[--primary-red]">
          37°C
        </h3>
      </div>

      {/* blood oxygen */}
      <div className="bg-[--primary-white] rounded-lg">
        <div className="flex justify-between py-2 px-1 md:p-3 border-b-2 border-b-[#f0f0f0]">
          <div className="flex items-center ml-1 3xl:ml-4">
            <Icon name="heart-organ" className="w-7 h-7" />
            <span className="text-xs md:text-sm 2xl:text-base font-semibold ml-2 2xl:ml-3 mt-0.5">
              Blood Oxygen
            </span>
          </div>
          <div className="hidden w-8 h-8 bg-neutral-200 center rounded-full transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
            <Icon name="rotated-arrow" className="w-8 h-8" />
          </div>
        </div>

        <div className="py-3 center flex-col">
          <span className="opacity-70 font-semibold">latest</span>
          <h3 className="text-2xl font-bold">100%</h3>
        </div>
      </div>

      {/* weight */}
      <div className="bg-[--primary-white] rounded-lg">
        <div className="flex justify-between py-2 px-1 md:p-3 border-b-2 border-b-[#f0f0f0]">
          <div className="flex items-center ml-1 3xl:ml-3">
            <Icon name="human" className="w-[22px] h-[22px]" />
            <span className="text-xs md:text-sm 2xl:text-base font-semibold ml-1.5 2xl:ml-2 mt-0.5">
              Weight
            </span>
          </div>
          <div className="hidden w-8 h-8 bg-neutral-200 center rounded-full transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
            <Icon name="rotated-arrow" className="w-8 h-8" />
          </div>
        </div>

        <div className="p-2 xxs:p-3 md:px-4 flex items-center justify-between flex-row-reverse xxs:flex-row">
          <div>
            <span className="text-xs xs:text-sm lg:text-base opacity-70 font-bold xs:font-semibold hidden xxs:block">
              Status
            </span>
            <div className="flex items-center">
              <span className="text-xs xs:text-sm md:text-base text-[--primary-red] font-semibold">
                +1kg
              </span>
              <Icon name="up-arrow" className="w-5 h-5" />
            </div>
          </div>
          <div className="flex self-end">
            <h3 className="font-bold text-2xl xxs:text-3xl xs:text-4xl">154</h3>
            <span className="self-end ml-0.5 xs:ml-1 text-base xs:text-lg font-bold opacity-80">
              lb
            </span>
          </div>
        </div>
      </div>

      {/* BMI */}
      <div className="bg-[--primary-white] rounded-lg h-full">
        <div className="flex justify-between  py-2 px-1 md:p-3 border-b-2 border-b-[#f0f0f0]">
          <div className="flex items-center ml-1 3xl:ml-3">
            <Icon name="weight-machine" className="w-5 h-5" />
            <span className="text-xs md:text-sm 2xl:text-base font-semibold ml-2 2xl:ml-3 mt-0.5">
              BMI
            </span>
          </div>
          <div className="hidden w-8 h-8 bg-neutral-200 center rounded-full transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
            <Icon name="rotated-arrow" className="w-8 h-8" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-4 mt-4 md:mt-6 justify-end">
          <h3 className="text-4xl font-bold">22.3</h3>
          <span className="self-end ml-3 text-[#355A38] font-bold text-xs xs:text-sm bg-[#B6D87F] px-3 xs:px-4 mt-2 md:mt-0 mb-1 py-1 rounded-md">
            Normal
          </span>
        </div>
      </div>
    </div>
  )
}
