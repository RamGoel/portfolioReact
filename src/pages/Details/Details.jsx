import React, { useState } from 'react'
import Experience from '../Experience/Experience'
import Community from '../Community/Community'
import Projects from '../projects/Projects'
import './Details.css'
import FullTime from '../About/About'
function Details() {
    var [selected,setSelected]=useState("About")
    var links = {
        About:<FullTime />,
        Experience: <Experience />,
        Community: <Community />,
        Projects: <Projects />,
    }
    return (
        <div className='details-container'>
            <div>
                {
                    Object.keys(links).map(e => {
                        return <button onClick={()=>setSelected(e)} className={`nav-btn ${selected===e?'selected-link':''}`}>{e}</button>
                    })
                }
            </div>
            <div >
                {links[selected]}
            </div>
        </div>
    )
}

export default Details