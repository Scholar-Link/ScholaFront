import Navbar from "../../Components/Navbar";

const Grievance = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center">
        <form className="bg-[rgb(94,213,183)] shadow-md px-8 pt-6 pb-8 mb-6 rounded-2xl text-center">
          <span className="text-2xl text-green-700 font-bold text-center mt-3">
            Grievance Report
          </span>

          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name of College/Institute/University
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
              Date of Application
            </label>
            <input
              className="shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="twelvedid"
              type="date"
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div className="flex flex-col items-center justify-between ">
            <button
              className="bg-[rgb(6,166,126)] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl  focus:outline-none focus:shadow-outline"
              type="button"
            >
              Report Now!!
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Grievance;
