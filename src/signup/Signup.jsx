import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import {Link} from "react-router-dom"

export default function Signup() {

  return <>
    <div className=" h-full my-4 flex flex-col justify-center items-center">
      <div className="bg-base-300 md:w-2/3 px-8 py-16 rounded-lg">
        <div className="text-5xl text-center font-bold mb-10">
          <p>Goovii</p>
          <p>POS</p>
        </div>
        <form className="flex flex-col justify-center items-center">
          <div className="form-control w-full max-w-xs md:max-w-md">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="example@example.com" className="input input-bordered w-full max-w-xs md:max-w-md" />
          </div>
          <div className="form-control w-full max-w-xs md:max-w-md">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="*********" className="input input-bordered w-full max-w-xs md:max-w-md" />
            </div>
            
          <div className="form-control w-full max-w-xs md:max-w-md">
          <label className="label">
            <span className="label-text">Restaurant Name</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered w-full max-w-xs md:max-w-md" />
            </div>
          <div className="form-control w-full max-w-xs md:max-w-md">
          <label className="label">
            <span className="label-text">Owner Name</span>
          </label>
          <input type="text" placeholder="" className="input  input-bordered w-full max-w-xs md:max-w-md" />
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
          <input type="text" placeholder="" className="input  input-bordered w-full max-w-xs md:max-w-md" />
            </div>
            <div className="form-control w-full max-w-xs md:max-w-md">
            <label className="label">
              <span className="label-text">Regesteration Papers</span>
            </label>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs md:max-w-md" />
          </div>
        <Link to="/" className="block underline mt-4">Login instead ?</Link>
        <Link to="/home" className="block text-xs underline mt-4">skip</Link>

        </form>
      </div>
    </div>
  </>
}