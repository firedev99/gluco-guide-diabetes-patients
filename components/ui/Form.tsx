export default function Form() {
  return (
    <div className="w-[550px] h-4/5 flex flex-col justify-between items-center bg-white rounded-lg">
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
            stroke-width="1.5"
            stroke="currentColor"
            className="stroke-sky-300 ml-60 mt-8 size-6 items-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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

        <button className="ml-96 mr-auto mt-8 w-28 h-10 pb-2 pt-2 border-none bg-indigo-600 rounded-lg text-center text-white text-sm">
          Next
        </button>

        <div className=" flex justify-center gap-1">
          <div className=" h-2 w-2 border-2 border-slate-400 border-solid rounded-full">
            {" "}
          </div>
          <div className=" h-2 w-2 border-2 border-slate-400 border-solid rounded-full">
            {" "}
          </div>
        </div>
      </form>
    </div>
  );
}
