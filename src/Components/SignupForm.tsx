import { ChangeEvent } from "react";
import Inputbox from "./Inputbox";

interface FormData {
  name: string;
  state: string;
  email: string;
  password: string;
}

interface FormProps {
  formData: FormData;
  onInputChange: (event: ChangeEvent<HTMLInputElement>, name: string) => void;
  onSignUp: () => void;
}

const SignupForm: React.FC<FormProps> = ({
  formData,
  onInputChange,
  onSignUp,
}) => {
  return (
    <>
      <form
        className="form flex flex-col justify-center self-center gap-y-2"
        onSubmit={onSignUp}
      >
        <h1
          className="heading self-center text-5xl my-2 font-bold text-[#38B593]"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          CREATE ACCOUNT
        </h1>
        <Inputbox
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(event) => onInputChange(event, "name")}
        />
        <Inputbox
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) => onInputChange(event, "email")}
        />
        <Inputbox
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(event) => onInputChange(event, "password")}
        />
        <button className="w-[200px] self-center bg-[#38B593] hover:bg-[#38D593] text-white font-bold py-2 px-4 my-3 rounded-full h-12">
          Register
        </button>
      </form>
    </>
  );
};

export default SignupForm;
