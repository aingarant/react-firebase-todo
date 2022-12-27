import { useRef } from "react";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div>
      <form className="mx-auto flex flex-col p-2 text-center">
        <h2 className="text-3xl font-bold">Login</h2>
        <input
          type="email"
          id="email"
          ref={emailRef}
          placeholder="email"
          className="bg-red-50 p-2 my-2"
        />
        <input
          type="password"
          id="password"
          ref={passwordRef}
          placeholder="password"
          className="bg-red-50 p-2 my-2"
        />
        <button className="p-2 my-2 bg-red-500 text-white rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
