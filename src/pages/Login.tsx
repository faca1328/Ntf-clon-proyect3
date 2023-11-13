import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase.config"
import { BackgroundIMG } from "../components/header/BackgroundIMG"
import { NavBar } from "../components/header/NavBar"
import { useNavigate } from "react-router-dom"


export const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ email: "", password: "" })
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.currentTarget.name]: e.currentTarget.value })

  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formValue;


    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            console.log('Login exitosamente');
            setFormValue({ email: "", password: "" })
            navigate(`/netflix`)
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
      <NavBar/>
      </div>
      <form className="justify-center grid absolute inset-x-0 custom-top" onSubmit={handleSignIn}>
        <h5 className="text-lg font-medium bg-black bg-opacity-50 rounded-full px-2 text-white custom-w">
          Welcome, please login
        </h5>
        <hr />
        <input
          type="email"
          placeholder="Enter your email address"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          className="mt-2 home-input text-white"
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          className="mt-2 home-input text-white"
        />
        <button className="mt-2 btn-primary" type="submit">
          Log In
        </button>
      </form>
    </div>
  )
}
