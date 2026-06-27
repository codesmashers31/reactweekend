import { Link } from "react-router-dom"


const Navbar = () => {
  return (
   <>
    <div className="bg-blue-500 text-white p-4 mb-4 flex justify-between">
      <div className="bg-white text-black p-1 rounded w-45">
        Logo
      </div>
      <div className="flex gap-10">
        
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contect</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    </div>
   </>
  )
}

export default Navbar
