import { Link } from "react-router-dom";
import Logoimg from "../../../Assets/logo.png"
import { NETFLIX_LINKS } from "../../constants";
import { useState } from "react";
import { LogOutBtn } from "./LogOutBtn";


interface Props {
    isScrolled: boolean;
}

export const NetflixPageNB:React.FC<Props> = ({isScrolled}) => {
   
    const [showSearch, setShowSearch] = useState(false)

    


    return (
        <div className= {`${isScrolled ? "bg-transparent" : "bg-black"} flex justify-between items-center px-6 py-1 fixed w-screen duration-500  `}>
            <img className=" w-fit max-h-14 " src={Logoimg} alt="" />

            <ul className="flex flex-auto gap-5 text-white ml-5">
                {NETFLIX_LINKS.map(({ name, link }) => {
                    return (
                        <li key={name} className="hover:text-gray-300 transition-colors">
                            <Link to={link}>{name}</Link>
                        </li>
                    )
                }

                )}
            </ul>


            <button onClick={() => setShowSearch(!showSearch)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
            {showSearch ? (<input type="text" name="search" className="rounded-full" />) : null}

            <LogOutBtn/>



        </div>
    )

}
