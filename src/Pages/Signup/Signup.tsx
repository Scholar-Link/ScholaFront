// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// interface FormData {
//   name: string;
//   email: string;
//   password: string;
// }

interface SignupProps {
  setIsSignedUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup: React.FC<SignupProps> = ({ setIsSignedUp }) => {
  const navigate = useNavigate();
  //   const [formData, setFormData] = useState<FormData>({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });

  //TODO:Write a function to set the form data whenever a corresponsing field changes

  const handleSignUp = () => {
    //TODO:integrate with backend
    setIsSignedUp(true);
    navigate("/signup/aadhaar");
  };

  return (
    <div className="w-screen h-screen flex justify-center bg-[#F0F9F3]">
      <div className="container flex flex-row h-[80%] self-center shadow-lg rounded-md">
        <div className="Lcontainer flex justify-center w-[60%] h-full self-center bg-[#06A67E] rounded-md">
          <div className="w-[60%] self-center ">
            <h1 className="text-center text-blue-100 font-black text-3xl font-montserrat py-4">
              Holllaaaaa!!!!!!!!!!!
            </h1>

            <h2 className="text-center text-blue-100 font-light text-1xl font-montserrat">
              To keep connected with us please login with your personal info
            </h2>
          </div>
        </div>
        <div className="Rcontainer flex justify-center w-full rounded-md bg-[#F0F4F3]">
          <div className="form flex flex-col justify-center self-center gap-y-2">
            <h1
              className="heading self-center text-5xl my-2 font-bold text-[#38B593]"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              CREATE ACCOUNT
            </h1>
            <input
              className="self-center w-[400px] h-[60px] placeholder:p-3"
              type="string"
              placeholder="Name"
            />
            <input
              className="self-center w-[400px] h-[60px] placeholder:p-3"
              type="email"
              placeholder="Email"
            />
            <input
              className="self-center w-[400px] h-[60px] placeholder:p-3"
              type="password"
              placeholder="Password"
            />
            <button
              onClick={handleSignUp}
              className=" w-[200px] self-center bg-[#38B593] hover:bg-[#38D593] text-white font-bold py-2 px-4 my-3 rounded-full h-12"
            >
              Register
            </button>
            <h2 className="self-center">
              Already have an Account?
              <Link to="/login">
                <span className="text-blue-700 cursor-pointer">Login</span>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
