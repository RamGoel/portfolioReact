import React, { useEffect, useState } from 'react'
import './App.css'
import Projects from './pages/Projects'
import Loader from './pages/Loader/Loader'
// import Community from './pages/Community'
// import Experience from './pages/Experience'
// import Home from './pages/Home'
// import Why from './pages/Why'
// import FullTime from './pages/FullTime'
// import Footer from './pages/Footer'
// import Choose from './pages/Choose'
function App() {

    const [loaded, setLoaded] = useState(true)


    useEffect(e => {
        setTimeout(() => {
            setLoaded(true)
        }, 4000)
    }, [])
    return (
        (loaded) ? <div>
            {/* <Choose />
            <Home />
            <Why /> */}
            <Projects />
            {/* <FullTime />
            <Experience />
            <Community />
            <Footer /> */}


        </div> : <Loader />
    )
}

export default App