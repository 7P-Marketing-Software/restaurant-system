import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function signUpUser(e) {
    e.preventDefault();

    localStorage.setItem(email, password);
    navigate("/")
  }

  return (
    <>
      <div className=" my-4 flex h-full flex-col items-center justify-center">
        <div className="rounded-lg bg-base-300 px-8 py-16 md:w-2/3">
          <div className="mb-10 text-center text-5xl font-bold">
            <p>Goovii</p>
            <p>POS</p>
          </div>
          <form className="flex flex-col items-center justify-center">
            <div className="form-control w-full max-w-xs md:max-w-md">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                className="input-bordered input w-full max-w-xs md:max-w-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-xs md:max-w-md">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="*********"
                className="input-bordered input w-full max-w-xs md:max-w-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-control w-full max-w-xs md:max-w-md">
              <label className="label">
                <span className="label-text">Restaurant Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input-bordered input w-full max-w-xs md:max-w-md"
              />
            </div>
            <div className="form-control w-full max-w-xs md:max-w-md">
              <label className="label">
                <span className="label-text">Owner Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input-bordered  input w-full max-w-xs md:max-w-md"
              />
            </div>

            <div className="form-control w-full max-w-xs md:max-w-md">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <IntlTelInput
                containerClassName="intl-tel-input "
                inputClassName="form-control w-full input  input-bordered "
                preferredCountries={["eg"]}
              />
            </div>

            <div className="form-control w-full max-w-xs md:max-w-md">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input-bordered  input w-full max-w-xs md:max-w-md"
              />
            </div>
            <div className="form-control w-full max-w-xs md:max-w-md">
              <label className="label">
                <span className="label-text">Regesteration Papers</span>
              </label>
              <input
                type="file"
                className="file-input-bordered file-input w-full max-w-xs md:max-w-md"
              />
            </div>
            <button
              onClick={signUpUser}
              type="submit"
              className="btn-wide btn mt-4"
            >
              Signup
            </button>

            <Link to="/" className="mt-4 block underline">
              Login instead ?
            </Link>
            <Link to="/home" className="mt-4 block text-xs underline">
              skip
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
