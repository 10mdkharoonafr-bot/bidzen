import { useState, useEffect } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Navbar from './Navbar'
import Home from './Home'
import Explore from './Explore'
import Community from './Community'
import Page from './Page'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // 5 hours in seconds
  const [timer, setTimer] = useState(5 * 60 * 60);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const router = createBrowserRouter([
    { path: "/", element: <><Navbar darkMode={darkMode} setDarkMode={setDarkMode} timer={timer} /><Home darkMode={darkMode} /></> },
    { path: "/explore", element: <><Navbar darkMode={darkMode} setDarkMode={setDarkMode} timer={timer} /><Explore darkMode={darkMode} /></> },
    { path: "/community", element: <><Navbar darkMode={darkMode} setDarkMode={setDarkMode} timer={timer} /><Community darkMode={darkMode} /></> },
    { path: "/page", element: <><Navbar darkMode={darkMode} setDarkMode={setDarkMode} timer={timer} /><Page darkMode={darkMode} /></> },
    { path: "/contact", element: <><Navbar darkMode={darkMode} setDarkMode={setDarkMode} timer={timer} /><Contact darkMode={darkMode} /></> },
  ])

  return (
    <>
    <div className={darkMode ? "dark" : ""}>
      <RouterProvider router={router} />
    </div>

    <Footer/>

    </>
  )
}

export default App