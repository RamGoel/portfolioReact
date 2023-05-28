import React, { useEffect, useState } from 'react'
import './App.css'
import Loader from './pages/Loader/Loader'
import Home from './pages/Home/Home'

function App() {

    const [loaded, setLoaded] = useState(false)



    useEffect(e => {
        setTimeout(() => {
            setLoaded(true)
        }, 2000)
    }, [])
    return (
        (loaded) ? <div>
            <Home />
        </div> : <Loader />
    )
}

export default App