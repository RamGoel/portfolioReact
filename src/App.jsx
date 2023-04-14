import React, { useState } from 'react'
import './App.css'
import About from './pages/About'
import Community from './pages/Community'
import ProblemSolving from './pages/ProblemSolving'
import Projects from './pages/Projects'
function App() {
    var pages=[<About />,<Projects />,<Community />,<ProblemSolving />]
    const [pageNum, setPageNum]=useState(0)
    return (
        <div>
            <ul className='navbar'>

                <p className={`lItem ${pageNum===0?'default':''}`} onClick={()=>setPageNum(0)}>About</p>
                <p className={`lItem ${pageNum===1?'default':''}`} onClick={()=>setPageNum(1)}>Projects</p>
                <p className={`lItem ${pageNum===2?'default':''}`} onClick={()=>setPageNum(2)}>Community/Events</p>
                <p className={`lItem ${pageNum===3?'default':''}`} onClick={()=>setPageNum(3)}>Problem Solving</p>
            </ul>

            {
                pages[pageNum]
            }


        </div>
    )
}

export default App