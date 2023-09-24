import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center bg-[#F0F9F3]">
      <div className="container flex flex-row h-[80%] self-center shadow-lg rounded-md">
        <div className="Lcontainer flex justify-center w-[60%] h-full self-center bg-[#06A67E] rounded-xl">
          <div className="w-[60%] self-center ">
            <h1
              className="text-center text-blue-100 font-black text-3xl font-montserrat py-4"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              WELCOME BACK!
            </h1>

            <h2
              className="text-center text-blue-100 font-light text-1xl font-montserrat"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              To keep connected with us please login with your personal info
            </h2>
          </div>
        </div>
        <div className="Rcontainer flex justify-center w-full rounded-xl bg-[#F0F4F3]">
          <div className="form flex flex-col justify-center self-center gap-y-2">
            <h1
              className="heading self-center text-5xl my-2 font-bold text-[#38B593]"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              LOGIN ACCOUNT
            </h1>
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
              className=" w-[200px] self-center bg-[#38B593] hover:bg-[#38D593] text-white font-bold py-2 px-4 my-3 rounded-full h-12"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              LOGIN
            </button>
            <h2 className="self-center">
              Not a member?{" "}
              <Link to="/signup">
                <span className="text-blue-700 cursor-pointer">SignUp</span>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
