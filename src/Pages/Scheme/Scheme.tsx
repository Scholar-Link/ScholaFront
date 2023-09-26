import { useEffect, useState } from "react";
import SchemeCompo from "../../Components/SchemeCompo";
import SchemeList from "../../../public/schemes.json";
import Navbar from "../../Components/Navbar";

interface SchemeProps {
  name: string;
  about: string;
  state: string;
  certificates_required: string[];
}

const Scheme = () => {
  const [schemes, setSchemes] = useState<SchemeProps[]>([]);

  useEffect(() => {
    setSchemes(SchemeList as SchemeProps[]);
  }, []);

  return (
    <>
      <Navbar />
      <div className="ml-[250px]">
        {schemes.map((scheme, index) => {
          return <SchemeCompo key={index} {...scheme} />;
        })}
      </div>
    </>
  );
};

export default Scheme;
