import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row">
        <aside
          id="logo-sidebar"
          className=" fixed
           top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-screen px-3 py-4 overflow-y-auto bg-[#06A67E]">
            <Link to="/dashboard" className="flex items-center pl-8 pt-2 mb-5">
              <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white ">
                Scholar Link
              </span>
            </Link>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <ul className="space-y-2 font-medium flex flex-col">
              <li className="">
                <Link
                  to="/dashboard"
                  className="flex pl-12 items-center p-2 text-center  text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group underline"
                >
                  <svg
                    className="w-5 h-5 items-center text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-3 text-center">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/schemes"
                  className="flex items-center p-2 text-center text-gray-900 rounded-lg dark:text-black  hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap underline">
                    Schemes
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/status"
                  className="flex items-center p-2 text-center text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30group"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap underline">
                    Check Status
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/apply"
                  className="flex items-center p-2 text-center text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap  underline">
                    New Application
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/grievance"
                  className="flex items-center p-2 text-center text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap underline">
                    Grievance
                  </span>
                </Link>
              </li>
              <li className="item-end">
                <Link
                  to="/signout"
                  className="flex items-center p-2 text-center text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap underline content-end">
                    Sign Out
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
