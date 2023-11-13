import Logoimg from "../../../Assets/logo.png"



export const NavBar = () => {
  return (
    <div className="flex justify-between relative items-center px-32 pt-3 pb-3">
        <img className=" w-fit max-h-20" src={Logoimg} alt="" />

        <button className="btn-primary"> Sing in </button>
    </div>
  )
}
