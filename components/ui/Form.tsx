import { useState } from "react";
export default function Form() {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNext = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handleSave = () => {};

  return (
    <div className="w-[550px] h-4/5 flex flex-col justify-between items-center bg-white rounded-lg">
      {currentForm === 1 && (
        <form className="p-7 ">
          <h2 className=" text-align: center text-1xl font-bold">
            Welcome,Walter!
          </h2>
          <p className="text-sm pr-5 pl-10 text-align: center  text-wrap: wrap">
            To make meaningful connections with this web app,
          </p>
          <p className="text-sm pr-5 pl-10 text-align: center  text-wrap: wrap">
            complete your profile.
          </p>

          <div className="mt-4 w-full h-28 border-2 border-sky-300 border-dashed rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="stroke-sky-300 ml-60 mt-8 size-6 items-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <p className="text-xs text-center text-slate-500 ">
              drag and drop your picture
            </p>
            <p className="text-xs pt-4 text-right text-slate-500">
              you can skip it
            </p>
            <input type="image" src="" alt=""></input>
          </div>

          <div className="pt-6 grid grid-cols-2 gap-2">
            <input
              className="p-4 text-sm w-auto h-10 border-2 hover:border-sky-500 border-slate-400 border-solid rounded-xl"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-4 text-sm w-auto h-10 border-2 hover:border-sky-500 border-slate-400 border-solid rounded-xl"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="pt-3 grid grid-cols-3 gap-2">
            <input
              className="p-4 text-sm w-auto h-10 border-2 hover:border-sky-500 border-slate-400 border-solid rounded-xl"
              type="text"
              placeholder="Age"
            />
            <input
              className="p-4 text-sm w-auto h-10 border-2 hover:border-sky-500 border-slate-400 border-solid rounded-xl"
              type="text"
              placeholder="Gender"
            />
            <input
              className="p-4 text-sm w-auto h-10 border-2 hover:border-sky-500 border-slate-400 border-solid rounded-xl"
              type="text"
              placeholder="Profession"
            />
          </div>
          <div className="pt-3 grid grid-cols-2 gap-2">
            <input
              className="p-4 text-sm w-auto h-10 border-2 hover:border-sky-500 border-slate-400 border-solid rounded-xl"
              type="text"
              placeholder="Contact Number"
            />
            <input
              className="p-4 text-sm w-auto h-10 border-2 hover:border-sky-500 border-slate-400 border-solid rounded-xl"
              type="text"
              placeholder="E-mail Address"
            />
          </div>
          <div className="pt-3 grid grid-cols-3 gap-2">
            <input
              className="p-4 text-sm w-auto h-10 border-2 hover:border-sky-500 border-slate-400 border-solid rounded-xl"
              type="text"
              placeholder="Blood Group"
            />
            <input
              className="p-4 text-sm w-auto h-10 border-2 hover:border-sky-500 border-slate-400 border-solid rounded-xl"
              type="text"
              placeholder="Weight"
            />
            <input
              className="p-4 text-sm w-auto h-10 border-2 hover:border-sky-500 border-slate-400 border-solid rounded-xl"
              type="text"
              placeholder="Height"
            />
          </div>

          <div className="flex mt-10">
            <div className="pl-52 text-inline">
              <span
                className={`h-2 w-2 mt-0 ml-2 border-none rounded-full inline-block ${
                  currentForm === 1
                    ? "bg-sky-500 opacity-100"
                    : "bg-sky-500 opacity-40"
                }`}
              ></span>
              <span className="h-2 w-2 mt-0 ml-2 border-none rounded-full inline-block bg-sky-500 opacity-40"></span>
              <span className="h-2 w-2 mt-0 ml-2 border-none rounded-full inline-block bg-sky-500 opacity-40"></span>
            </div>

            <div className="grid justify-items-end">
              <button
                type="button"
                onClick={handleNext}
                className="ml-28 w-28 h-10 pb-2 pt-2 border-none bg-indigo-600 rounded-lg text-center text-white text-sm"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      )}

      {currentForm === 2 && (
        <form className="w-full h-[600px] pb-6 m-4 pl-6 ">
          <h2 className="pt-2 text-center text-1xl font-bold">
            Tell us more about yourself!
          </h2>
          <p className="text-sm pt-1 pr-5 pl-10 text-align: center  text-wrap: wrap">
            To make all the features available and well running
          </p>
          <p className="text-sm pr-5 pl-10 text-align: center  text-wrap: wrap">
            we need to know about you more.
          </p>
          <p className=" pt-6 text-sm font-semibold ">Type of Diabetes:</p>

          <div className="pt-2 flex flex-wrap gap-2">
            <div className="text-sm pt-2 text-center w-20 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Type 1</label>
            </div>

            <div className="text-sm pt-2 text-center w-20 h-10 border-2 hover:border-sky-500 hover:bg-sky-100  border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Type 2</label>
            </div>

            <div className="text-sm pt-2 text-center w-28 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Gestational</label>
            </div>

            <div className="text-sm pt-2 text-center w-16 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">MODY</label>
            </div>

            <div className="text-sm pt-2 text-center w-32 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Wolfram Syndrome</label>
            </div>

            <div className="text-sm pt-2 text-center w-40 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Alstrom Syndrome</label>
            </div>

            <div className="text-sm pt-2 text-center w-28 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Neonatal</label>
            </div>

            <div className="text-sm pt-2 text-center w-20 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">LADA</label>
            </div>

            <div className="text-sm pt-2 text-center w-32 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Non-Diabetic</label>
            </div>

            <div className="text-sm pt-2 text-center w-32 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Pre-Diabetic</label>
            </div>

            <div className="text-sm pt-2 text-center w-24 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Type 3c</label>
            </div>
          </div>

          <p className=" pt-6 text-sm font-semibold ">
            Family history related to diabetes:
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <div className="text-sm pt-2 text-center w-20 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="checkbox" name="family" className="hidden" />
              <label className="font-semibold text-xs">Father</label>
            </div>

            <div className="text-sm pt-2 text-center w-20 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="checkbox" name="family" className="hidden" />
              <label className="font-semibold text-xs">Mother</label>
            </div>

            <div className="text-sm pt-2 text-center w-20 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="checkbox" name="family" className="hidden" />
              <label className="font-semibold text-xs">Uncle</label>
            </div>

            <div className="text-sm pt-2 text-center w-20 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="checkbox" name="family" className="hidden" />
              <label className="font-semibold text-xs">Aunt</label>
            </div>

            <div className="text-sm pt-2 text-center w-28 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="checkbox" name="family" className="hidden" />
              <label className="font-semibold text-xs">Grandfather</label>
            </div>

            <div className="text-sm pt-2 text-center w-28 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="checkbox" name="family" className="hidden" />
              <label className="font-semibold text-xs">Grandmother</label>
            </div>

            <div className="text-sm pt-2 text-center w-20 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="checkbox" name="family" className="hidden" />
              <label className="font-semibold text-xs">None</label>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="ml-56 text-inline">
              <span className="h-2 w-2 mt-0 ml-2 bg-sky-500 border-none rounded-full inline-block opacity-40"></span>
              <span
                className={`h-2 w-2 mt-0 ml-2 border-none rounded-full inline-block ${
                  currentForm === 2
                    ? "bg-sky-500 opacity-100"
                    : "bg-sky-500 opacity-40"
                }`}
              ></span>
              <span className="h-2 w-2 mt-0 ml-2 bg-sky-500 border-none rounded-full inline-block opacity-40"></span>
            </div>

            <div className="grid justify-items-end">
              <button
                type="button"
                onClick={handleNext}
                className="ml-28 w-28 h-10 pb-2 pt-2 border-none bg-indigo-600 rounded-lg text-center text-white text-sm"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      )}
      {currentForm === 3 && (
        <form className="w-full h-[600px] m-8 p-6 ">
          <h2 className="pt-10 text-center text-1xl font-bold">Your Habits!</h2>

          <p className="pt-10 text-sm font-semibold">Smoking Status:</p>

          <div className="pt-2 flex flex-wrap gap-2">
            <div className="text-sm pt-2 text-center w-24 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Light</label>
            </div>

            <div className="text-sm pt-2 text-center w-28 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Occasionally</label>
            </div>

            <div className="text-sm pt-2 text-center w-24 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Daily</label>
            </div>

            <div className="text-sm pt-2 text-center w-32 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Non-smoker</label>
            </div>
          </div>

          <p className="pt-10 text-sm font-semibold">Physical Activity:</p>

          <div className="pt-2 flex flex-wrap gap-2">
            <div className="text-sm pt-2 text-center w-24 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Light</label>
            </div>

            <div className="text-sm pt-2 text-center w-28 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Moderate</label>
            </div>

            <div className="text-sm pt-2 text-center w-24 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Active</label>
            </div>

            <div className="text-sm pt-2 text-center w-32 h-10 border-2 hover:border-sky-500 hover:bg-sky-100 border-slate-400 border-solid rounded-3xl">
              <input type="radio" name="diabetes" className="hidden" />
              <label className="font-semibold text-xs">Very Active</label>
            </div>
          </div>

          <div className="flex pt-24 mt-6">
            <div className="ml-56 text-inline">
              <span className="h-2 w-2 mt-0 ml-2 bg-sky-500 border-none rounded-full inline-block opacity-40"></span>
              <span className="h-2 w-2 mt-0 ml-2 bg-sky-500 border-none rounded-full inline-block opacity-40"></span>
              <span
                className={`h-2 w-2 mt-0 ml-2 border-none rounded-full inline-block ${
                  currentForm === 3
                    ? "bg-sky-500 opacity-100"
                    : "bg-sky-500 opacity-40"
                }`}
              ></span>
            </div>

            <div className="grid justify-items-end">
              <button
                type="button"
                onClick={handleSave}
                className="ml-28 w-28 h-10 pb-2 pt-2 border-none bg-indigo-600 rounded-lg text-center text-white text-sm"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
