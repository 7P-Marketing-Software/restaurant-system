import {Link} from "react-router-dom"

export default function Login() {

  return <>
    <div className=" h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-base-300 px-8 py-16 rounded-lg">

      <div className="text-5xl text-center font-bold mb-10">
        <p>Goovii</p>
        <p>POS</p>
      </div>
      <form >
        <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <button type="submit" className="mt-4 btn btn-wide">Login</button>
        <Link to="/signup" className="block underline mt-4">Signup instead ?</Link>
        <Link to="/home" className="block text-xs underline mt-4">skip</Link>

      </form>
      </div>
    </div>
  </>
}