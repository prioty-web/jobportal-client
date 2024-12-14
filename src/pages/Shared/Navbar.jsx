import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";



const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);

  // signout handle
  const handleSignOut = () =>{
    signOutUser()
    .then(()=>{
      console.log('signout success');
    })
    .catch(error =>{
      console.log(error, 'failed');
    })
  }
    const  links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/'>Home</NavLink></li>
       
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
   <div className="flex"> 
   
   <img className="w-11" src="/src/assets/icons8-job-application-64.png"  />
   <a className="btn btn-ghost text-xl">Job Portal</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?
       <><button onClick={handleSignOut}  className="btn">Sign Out</button></> 
      : 
      <><Link to='/register'>Register</Link>
    <Link to='/signin'><button className="btn">Sign In</button></Link></>
    }
    

  </div>
</div>
    );
};

export default Navbar;