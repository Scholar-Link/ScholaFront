import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";

const Application = () => {
  const [Schemes, SetSchemes] = useState([
    { name: "empty" },
  ]);
  useEffect(() => {
    SetSchemes([
      { name: "Scheme1" },
      { name: "Scheme2" },
      { name: "Scheme3" },
      { name: "Scheme4" },
      { name: "Scheme5" },
      { name: "Scheme6" },
    ]);
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center">
        <form className="bg-[rgb(94,213,183)] shadow-md px-8 pt-6 pb-8 mb-4 rounded-2xl">
          <span className="text-2xl text-green-700 font-bold text-ellipsis overflow-hidden ">
            Let's get you started with your application
          </span>
          <div className="mb-3 mt-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Schemes
              <select
                className="shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="schemes"
              >
                schemes
                {Schemes.map((element) => {
                  return (
                    <option value={element.name}>
                      {element.name}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              10th DID
            </label>
            <input
              className="shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="tendid"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              12th DID
            </label>
            <input
              className="shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="twelvedid"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              UG/Diploma DID
            </label>
            <input
              className="shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="ugdipdid"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flex flex-col items-center justify-between ">
            <button
              className="bg-[rgb(6,166,126)] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl  focus:outline-none focus:shadow-outline"
              type="button"
            >
              Verify and submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Application;
