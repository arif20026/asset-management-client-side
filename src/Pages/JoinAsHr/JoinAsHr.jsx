import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const JoinAsHr = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext);

    // const [registerError,setRegisterError] = useState('')
    // const[success,setSuccess] =useState(false)

    const handleSignUp = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget)
        const displayName = form.get('name')
        // const photoURL = form.get('photoURL')
        const email = form.get('email')
        const password = form.get('password')
        const birthDate = form.get('birthDate')
        const selectPackage = form.get('selectPackage')
        const companyLogo = form.get('companyLogo') 
        const companyName = form.get('companyName') 
        console.log(email, password, displayName, birthDate, selectPackage,companyName,companyLogo)


        // setRegisterError('')
        // setSuccess('')



        if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/.test(password)) {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password should be at least 6 characters and  contain a capital letter, a numeric character and a special character !",
                allowOutsideClick: false, // Prevent clicking outside the modal to close it
                confirmButtonText: 'OK', // Customize the text of the confirm button
                confirmButtonColor: '#3085d6', // Customize the color of the confirm button
                showCancelButton: false, // Remove the cancel button
                showCloseButton: false, // Remove the close button
            }).then((result) => {
                // The result value will be true when the "OK" button is clicked
                if (result.isConfirmed) {
                    // Handle the user clicking "OK"
                    console.log('User clicked OK');
                }
            });

            // setRegisterError('Password should be at least 6 characters and contain an uppercase letter, a numeric character, and a special character!');
            return;
        }



        createUser(email, password, displayName, birthDate)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
                // setSuccess(true)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "User has been created",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(error => {
                console.log(error)
                // setRegisterError(error.message)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    allowOutsideClick: false, // Prevent clicking outside the modal to close it
                    confirmButtonText: 'OK', // Customize the text of the confirm button
                    confirmButtonColor: '#3085d6', // Customize the color of the confirm button
                    showCancelButton: false, // Remove the cancel button
                    showCloseButton: false, // Remove the close button
                }).then((result) => {
                    // The result value will be true when the "OK" button is clicked
                    if (result.isConfirmed) {
                        // Handle the user clicking "OK"
                        console.log('User clicked OK');
                    }
                });

            })

    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                Navigate(location?.state ? location.state : ("/"))
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name</span>
                                </label>
                                <input type="text" name='companyName' placeholder="Company Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Logo</span>
                                </label>
                                <input type="text" name='companyLogo' placeholder="Company Logo" className="input input-bordered" required/>
                            </div>
                            

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Date of Birth</span>
                                </label>
                                <input type="date" name='birthDate' placeholder=" Date of Birth" className="input input-bordered" required/>

                            </div>
                            <div className="form-control my-4 border border-black rounded-sm " >
                                <select name="selectPackage" id="selectPackage" defaultValue="selectPackage" required >
                                    <option value="selectPackage" disabled>Select A Package</option>
                                    <option value="5">5 Members for $5</option>
                                    <option value="10">10 Members for $8</option>
                                    <option value="15">20 Members for $15</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center">or</p>

                        <div className="form-control mt-2  gap-4 w-full">
                            <div >
                                <button className='btn btn-primary w-56' ><span className='flex gap-2' onClick={handleSignInWithGoogle}>Sign in With Google<FaGoogle /></span></button>

                            </div>
                        </div>


                        {/* {
                    loginError && <p className="text-red-700 font-bold text-3xl"> {loginError}</p>
                } */}

                        {/* {
                    registerError && <p className="text-red-500  font-bold text-3xl">{registerError}</p>
                }

                {
                    success && <p className="text-green-800 font-bold text-3xl">Congratulation! User Created</p>
                } */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default JoinAsHr;