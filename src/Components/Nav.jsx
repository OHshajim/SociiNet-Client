import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Nav = () => {
    const { user, logout, loginUser, createUser } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }
    const login = (e) => {
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset()
            })
    }
    const register = (e) => {
        const email = e.target.email.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset()
            })
    }
    return (
        <div>
            <div className="navbar bg-black px-5 py-3">
                <div className="flex-1">
                    <h3 className=" text-2xl text-white font-semibold">SociiNet</h3>
                </div>
                {
                    user ?
                        <div className="flex-none gap-5">
                            <div className="form-control bg-black">
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto  bg-black" />
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li onClick={handleLogout} className="p-2 hover:text-red-600">Logout</li>
                                </ul>
                            </div>
                        </div> :
                        <button className="btn mx-4 btn-outline" onClick={() => document.getElementById('my_modal_5').showModal()}> login</button>
                }
            </div>
            {/* login */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl">Login</h3>
                    <p className="py-4">Welcome to our Platform !!! </p>
                    <div className="modal-action flex-col">
                        <form method="dialog" className="space-y-3" onSubmit={login}>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" className="grow" placeholder="Email" name="email" required />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow " placeholder="Password" name="password" required />
                            </label>
                            <div>
                                <button className="btn w-full btn-outline mt-3">Login</button>
                            </div>
                        </form>

                        <div className="modal-action justify-center">
                            <form method="dialog">
                                <p >Haven't any account
                                    <button className="link text-blue-700 hover:text-blue-500 ml-2" onClick={() => {
                                        document.getElementById('my_modal_4').showModal();
                                    }}> Register Now</button></p>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>

            {/* register */}
            <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl">Register Now</h3>
                    <p className="py-4">Welcome to our Platform !!! </p>
                    <div className="modal-action flex-col">
                        <form method="dialog" className="space-y-3" onSubmit={register}>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" className="grow" placeholder="Email" name="email" required/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" placeholder="Username" name="username" required/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow " placeholder="Password" name="password" required/>
                            </label>
                            <div>
                                <button className="btn w-full btn-outline mt-3">Register</button>
                            </div>
                        </form>
                        <div className="modal-action justify-center">
                            <form method="dialog">
                                <p >Already have an any account
                                    <button className="link text-blue-700 hover:text-blue-500 ml-2" onClick={() => {
                                        document.getElementById('my_modal_5').showModal();
                                    }}> Login Now</button></p>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div >
    );
};

export default Nav;