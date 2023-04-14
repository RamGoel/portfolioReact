import React, { useEffect, useState } from 'react'
import './App.css'
import About from './pages/About'
import Community from './pages/Community'
import ProblemSolving from './pages/ProblemSolving'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Loader from './pages/Loader/Loader'
function App() {

    const [loaded, setLoaded] = useState(false)


    useEffect(e => {
        setTimeout(() => {
            setLoaded(true)
        }, 4000)
    }, [])
    var pages = [<About />, <Projects />, <Community />, <ProblemSolving />, <Experience />]
    const [pageNum, setPageNum] = useState(0)
    return (
        (loaded) ? <div>

            <ul className='navbar'>

                <p className={`lItem ${pageNum === 0 ? 'default' : ''}`} onClick={() => setPageNum(0)}>About</p>
                <p className={`lItem ${pageNum === 1 ? 'default' : ''}`} onClick={() => setPageNum(1)}>Projects</p>
                <p className={`lItem ${pageNum === 4 ? 'default' : ''}`} onClick={() => setPageNum(4)}>Experience</p>
                <p className={`lItem ${pageNum === 2 ? 'default' : ''}`} onClick={() => setPageNum(2)}>Community/Events</p>
                <p className={`lItem ${pageNum === 3 ? 'default' : ''}`} onClick={() => setPageNum(3)}>Problem Solving</p>
            </ul>

            {
                pages[pageNum]
            }


        </div> : <Loader />
    )
}

export default App