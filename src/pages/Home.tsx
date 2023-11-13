import { useState } from "react"
import { BackgroundIMG } from "../components/header/BackgroundIMG"
import { NavBar } from "../components/header/NavBar"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase.config"
import { useNavigate } from "react-router-dom"



export const Home = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" })

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.currentTarget.name]: e.currentTarget.value })

  }

  const navigate = useNavigate()


  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir la recarga de la página

    const { email, password } = formValue;

    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(()=> {
          console.log('Usuario creado exitosamente');
          setFormValue({ email: "", password: "" })
          navigate(`/login`)
        })
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Por favor, ingrese un correo electrónico y una contraseña válidos.');
    }
  }



  return (
    <div className="relative w-full justify-center">
      <BackgroundIMG />
      <div className="w-full absolute top-0 left-0 max-h-20 justify-center">
        <NavBar />
      </div>
      <div className="grid gap-y-8  absolute top-20 left-0 text-cyan-50 h-auto w-full text-center mt-20 px-32">
        <div className="m-auto" >
          <h1 className="font-bold text-7xl">
            Unlimited movies, TV shows and more
          </h1>
          <h3 className="font-semibold text-3xl mt-2">Anywhere and Anytime</h3>
        </div>

        <form className="justify-center grid" onSubmit={handleSignIn}>
          <h5 className="text-lg font-medium bg-black bg-opacity-50 rounded-full px-2">
            Ready to start? SignUp to create your User
          </h5>
          <hr />
          <input
            type="email"
            placeholder="enter your email address"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            className="mt-2 home-input"
          />
          <input
            type="password"
            placeholder="create your password"
            name="password"
            value={formValue.password}
            onChange={handleChange}
            className="mt-2 home-input"
          />
          <button className="mt-2 btn-primary" type="submit">
            Get started ▶
          </button>
        </form>

        <div>
          <h5 className="font-medium"> Already Registered ? </h5>
          <button className="mt-2 btn-primary" onClick={()=>navigate(`/login`)}> Login </button>
        </div>
      </div>
    </div>
  )
}
