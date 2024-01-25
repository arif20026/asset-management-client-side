import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6  gap-4 w-full">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <div >
                                <button className='btn btn-primary w-56' ><span className='flex gap-2'>Sign in With Google<FaGoogle /></span></button>

                            </div>
                        </div>
                    </form>
                    <p className='my-4 text-center'>No Account? Please <Link className='text-blue-600 font-bold' to="/register">Register</Link> </p>

                    {/* {
                        loginError && <p className="text-red-700 font-bold text-3xl"> {loginError}</p>
                    } */}
                </div>
            </div>
        </div>
    </div>
);
                    
};

export default Login;