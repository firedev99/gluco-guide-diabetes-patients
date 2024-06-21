export default function Form() {
  return (
    <div className="w-[510px] h-4/5 flex flex-col justify-between items-center bg-white rounded-lg">
      <form className="m-7">
        <h2 className="pt-4 text-align: center text-1xl font-bold">
          Welcome,Walter!
        </h2>
        <p className="text-sm pr-5 pl-10 text-align: center  text-wrap: wrap">
          To make meaningful connections with this web app,
        </p>
        <p className="text-sm pr-5 pl-10 text-align: center  text-wrap: wrap">
          complete your profile.
        </p>
        <input
          type="image"
          src=""
          alt=""
          className="mt-5 w-full h-28 border-2 border-sky-300 border-dashed rounded-xl"
        />

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
      </form>
      <br />
      <button className="ms-96 mr-12 mb-14 w-28 h-10 pb-2 pt-2 border-none bg-indigo-600 rounded-lg text-center text-white text-sm">
        Next
      </button>
    </div>
  );
}
