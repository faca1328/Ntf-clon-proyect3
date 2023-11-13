import { useNavigate } from "react-router-dom";
import Logoimg from "../../../Assets/logo.png"



export const NavBar = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between relative items-center px-32 pt-3 pb-3">
        <img className=" w-fit max-h-20 cursor-pointer" src={Logoimg} alt="" onClick={()=>navigate(`/`)}/>

        <button className="btn-primary" onClick={()=>navigate(`/login`)}> Log in </button>
    </div>
  )
}
