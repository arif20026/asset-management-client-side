import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    // const { signIn, signInWithGoogle } = useAuth();
    const { signIn ,signInWithGoogle} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    // const [loginError, setLoginError] = useState('')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        // setLoginError('')

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // navigate(location?.state ? location.state : "/")
                navigate('/dashboard')
            })
            .catch(error => {
                console.log(error)
                // setLoginError('password is not correct')
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: "Password is not correct",
                    showConfirmButton: false,
                    timer: 1500
                  });
            });
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                navigate(location?.state ? location.state : ("/"))
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered required" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered required" />

                        </div>

                        <input className="btn btn-primary w-full mt-3" type="submit" value="Login" />
                       
                    </form>

                    <div className="form-control mt-2 gap-4 w-full">
                          
                            <div >
                                <button className='btn btn-primary w-56' ><span className='flex gap-2' onClick={handleSignInWithGoogle}>Sign in With Google<FaGoogle /></span></button>

                            </div>
                        </div>
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