import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "../../Components/SignupForm";

interface FormData {
  name: string;
  email: string;
  password: string;
  state: string;
}

interface SignupProps {
  setIsSignedUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup: React.FC<SignupProps> = ({ setIsSignedUp }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    state: "",
  });

  //TODO:Write a function to set the form data whenever a corresponsing field changes
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    //TODO:check and give error message if trying to submit with empty field
    //TODO:integrate with backend
    console.log(formData);
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
            <SignupForm
              formData={formData}
              onInputChange={handleInputChange}
              onSignUp={handleSignUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
