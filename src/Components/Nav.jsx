const Nav = () => {
    return (
        <div>
            <div className="navbar bg-black px-5">
                <div className="flex-1">
                    <a className=" text-xl">SociiNet</a>
                </div>
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
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;