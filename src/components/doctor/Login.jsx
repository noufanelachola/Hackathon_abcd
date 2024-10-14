import { LockClosedIcon } from '@heroicons/react/20/solid'
import Header from '../Header'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'
import { useState } from 'react';

export default function Login() {
  localStorage.removeItem("currentPage");
  const navigate = useNavigate();
  if (localStorage.getItem("sessionKey")) {
    axios.post(process.env.REACT_APP_API + "/doctor/session", { "email": localStorage.getItem("email"), "sessionKey": localStorage.getItem("sessionKey") }).then(res => {
      if (res.data.status === "authenticated") {
        navigate("/doctor/dashboard", { state: res.data.data });
        localStorage.setItem("currentPage", "Basic");
      }
    })
  }

  const [wrong, setWrong] = useState("");
  function handleLogin(event) {
    axios.post(process.env.REACT_APP_API + "/doctor/login", { "email": event.target.email.value, "password": event.target.password.value }).then(res => {
      if (res.data.status === "authenticated") {
        navigate("/doctor/dashboard", { state: res.data.data });
        localStorage.setItem("currentPage", "Basic");
      } else if (res.data.status === "wrongPassword") {
        setWrong("wrongPassword");
      } else {
        setWrong("emailNotRegistered");
      }
    })
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <h2>Under Construction</h2>
    </>
  )
}