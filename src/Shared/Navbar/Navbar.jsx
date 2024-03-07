import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const [isAdmin] = useAdmin();
  const { user, logOut } = useAuth();

  const menu = (
    <>
      {/* <li>
        <Link to="">Tools</Link>
      </li>
      <li>
        <Link to="">Compress</Link>
      </li>
      <li>
        <Link to="">Convert</Link>
      </li> */}
      <li>
        <Link to="/subscriptions">Subscriptions</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-teal text-white flex justify-between">
        <div className="">
          <Link to={"/"} className="btn btn-ghost text-xl">
            WeavePDF
          </Link>
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1">{menu}</ul>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex gap-3">
            {user ? (
              <div className="flex">
                <Link to={isAdmin ? '/dashboard/adminHome' : '/dashboard/user-profile'} ><button className="btn btn-circle mx-5">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </button></Link>
                <button className="btn" onClick={() => logOut()}>Logout</button>
              </div>

            ) : (

              <Link className="btn" to="/login">Login</Link>

            )}
            <Link to={'/user-subscription'} className="btn hidden md:flex">Get Premium</Link>
          </div>
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-circle btn-neutral md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side overflow-hidden z-50">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-1/2 min-h-full bg-base-200 text-base-content">
                {menu}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
