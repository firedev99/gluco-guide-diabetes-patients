import Icon from "../icons"

export default function HealthInformations() {
  return (
    // "bg-gradient-to-tl from-blue-200 to-purple-200
    <div className="bg-[#f0f0f0] rounded-xl row-span-2 lg:col-span-1 lg:order-2 p-3 flex flex-col gap-2">
      {/* body temperature */}
      <div className="bg-[--primary-white] rounded-lg">
        <div className="flex justify-between p-3 border-b-2 border-b-[#f0f0f0]">
          <div className="flex items-center ml-3">
            <Icon name="fire" className="w-7 h-7" />
            <span className="text-sm xl:text-base font-semibold ml-2 mt-0.5">
              Body Temperature
            </span>
          </div>
          <div className="w-8 h-8 bg-neutral-200 center rounded-full transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
            <Icon name="rotated-arrow" className="w-8 h-8" />
          </div>
        </div>
        <h3 className="text-center py-4 text-2xl font-bold text-[--primary-red]">
          37°C
        </h3>
      </div>

      {/* blood glucose */}
      <div className="bg-[--primary-white] rounded-lg">
        <div className="flex justify-between p-3 border-b-2 border-b-[#f0f0f0]">
          <div className="flex items-center ml-3">
            <Icon name="heart-organ" className="w-7 h-7" />
            <span className="text-sm xl:text-base font-semibold ml-2 mt-0.5">
              Blood Oxygen
            </span>
          </div>
          <div className="w-8 h-8 bg-neutral-200 center rounded-full transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
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
        <div className="flex justify-between p-3 border-b-2 border-b-[#f0f0f0]">
          <div className="flex items-center ml-3">
            <Icon name="human" className="w-6 h-6" />
            <span className="text-sm xl:text-base font-semibold ml-2 mt-0.5">
              Weight
            </span>
          </div>
          <div className="w-8 h-8 bg-neutral-200 center rounded-full transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
            <Icon name="rotated-arrow" className="w-8 h-8" />
          </div>
        </div>

        <div className="py-3 flex items-center justify-between px-6">
          <div>
            <span className="opacity-70 font-semibold">Status</span>
            <div className="flex items-center">
              <span className="text-[--primary-red] font-semibold">+1kg</span>
              <Icon name="up-arrow" className="w-5 h-5" />
            </div>
          </div>
          <div className="flex">
            <h3 className="font-bold text-4xl">154</h3>
            <span className="self-end ml-1 text-lg font-bold opacity-80">
              lb
            </span>
          </div>
        </div>
      </div>

      {/* BMI */}
      <div className="bg-[--primary-white] rounded-lg h-full">
        <div className="flex justify-between p-3">
          <div className="flex items-center ml-3">
            <Icon name="weight-machine" className="w-5 h-5" />
            <span className="text-sm xl:text-base font-semibold ml-2 mt-0.5">
              BMI
            </span>
          </div>
          <div className="w-8 h-8 bg-neutral-200 center rounded-full transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
            <Icon name="rotated-arrow" className="w-8 h-8" />
          </div>
        </div>

        <div className="ml-6 flex">
          <h3 className="text-4xl font-bold">22.3</h3>
          <span className="self-end ml-3 text-[#355A38] font-bold text-sm bg-[#B6D87F] px-4 mb-1 py-1 rounded-md">
            Normal
          </span>
        </div>
      </div>
    </div>
  )
}
