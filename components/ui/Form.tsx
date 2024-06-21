export default function Form() {
  return (
    <div className="w-[510px] h-4/5 flex flex-col justify-between items-center bg-white rounded-lg">
      <form className="mt-4">
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
        <br />
        <div>
          <input type="text" placeholder="First Name" />
        </div>
      </form>

      <input
        className="border-style: dashed border-2 border-sky-500 "
        type="image"
        src=""
        alt=""
      />
    </div>
  );
}
//border-color: rgb(163 230 53) border-style: solid h-3/5 width: 20% background-color: rgb(14 165 233)
