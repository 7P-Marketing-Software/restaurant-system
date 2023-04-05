import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ display: false, text: "none" });

  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();

    const stored_password = localStorage.getItem(email);

    if (email === "" || password === "") {
      setToast({
        display: true,
        text: "email or password cannot be empty",
      });
    } else if (stored_password !== password) {
      setToast({
        display: true,
        text: "wrong email or password",
      });
    } else if (stored_password === password) {
      setToast({ display: false, text: "none" });
      navigate("/home");
    }
  }

  return (
    <>
      <div className=" flex h-[100vh] flex-col items-center justify-center">
        <div className="rounded-lg bg-base-300 px-8 py-16">
          <div className="mb-10 text-center text-5xl font-bold">
            <p>Goovii</p>
            <p>POS</p>
          </div>
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Type here"
                className="input-bordered input w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Type here"
                className="input-bordered input w-full max-w-xs"
              />
            </div>
            <button
              onClick={loginUser}
              type="submit"
              className="btn-wide btn mt-4"
            >
              Login
            </button>
            <Link to="/signup" className="mt-4 block underline">
              Signup instead ?
            </Link>
            <Link to="/home" className="mt-4 block text-xs underline">
              skip
            </Link>
            {toast.display && (
              <div className="toast-center toast w-3/4 sm:w-2/4">
                <div className="alert alert-error">
                  <span>{toast.text}</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
