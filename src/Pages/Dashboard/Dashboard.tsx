import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";

const Dashboard = () => {
  const [Schemes, SetSchemes] = useState([
    { name: "empty" },
  ]);

  useEffect(() => {
    SetSchemes([{ name: "SAMPLE TEXT" }]);
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-[20rem]">
        <div className="mx-40 my-20">
          <img
            src="vite.svg"
            width={400}
            height={400}
            alt="hello"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="bg-black min-w-[200px] text-white min-h-[300px] py-20 color-white">
            {Schemes.map((element) => {
              return (
                <option
                  value={element.name}
                  className="size-6xl px-60"
                >
                  {element.name}
                </option>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
