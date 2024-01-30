import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Dashboard = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    const navLinks = <>

        <li><NavLink to="/dashboard/home">Home</NavLink></li>
        <li><NavLink to="/dashboard/assets">My Assets</NavLink></li>
        <li><NavLink to="/dashboard/team">My Team</NavLink></li>
        <li><NavLink to="/dashboard/requestAsset">Request for an Asset</NavLink></li>
        <li><NavLink to="/dashboard/customRequest">Make a custom Request </NavLink></li>
        <li><NavLink to="/dashboard/profile">Profile </NavLink></li>

    </>
    const navLinks2 = <>

        <li><NavLink to="/dashboard/adminHome">Home</NavLink></li>


    </>
    return (
        <div >


            <div>
                <div className="navbar bg-base-100">
                    {
                        user.email === 'admin@gmail.com' ?
                            <div>
                                <div className="navbar-start">
                                    <img src="https://i.ibb.co/tLmr944/letter-a-PNG32.png" alt="" className="w-10 h-10 bg-blue-300 rounded-full" />
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            {navLinks}
                                        </ul>
                                    </div>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">
                                        {navLinks}
                                    </ul>
                                </div>
                            </div> :
                            <div>Nothing to show</div>
                    }
                    <div className="navbar-end">
                        {
                            user ?
                                <div className="flex flex-row gap-4 items-center">
                                    <p>{user.displayName}</p>
                                    <img src={user.photoURL} alt="" className="rounded-full w-10 h-10" />
                                    <button className="btn btn-primary" onClick={() => handleLogOut()}>LogOut</button></div>
                                : <div className="flex gap-2">
                                    <Link to="/login"><button className="btn btn-primary" >Login</button></Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;