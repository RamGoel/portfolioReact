import React, { useState } from 'react'
import UIDesign from './projects/UIDesign'
import WebDev from './projects/WebDev'
import solving from '../assets/solving.png'
import { projectsData } from './projects/projectData'
import ProjectCard from './projects/ProjectCard'

function Projects() {
    var pages = [<UIDesign />, <WebDev />]
    const [pageCato, setPageCato] = useState("Design")
        
    return (
        <div>
            <div className='contentChips'>
                <p className={`${(pageCato === "Design") ? 'selected' : ''}`} onClick={() => setPageCato("Design")}>UI Design</p>
                <p className={`${(pageCato === "Web") ? 'selected' : ''}`} onClick={() => setPageCato("Web")}>Web Development</p>
                <p className={`${(pageCato === "App") ? 'selected' : ''}`} onClick={() => setPageCato("App")}>App Development</p>
                <p className={`${(pageCato === "Tool") ? 'selected' : ''}`} onClick={() => setPageCato("Tool")}>Tools/Extensions</p>
            </div>

            <div className='projectContainer'>
                {
                    projectsData.map(e=>{
                        if(e.category==pageCato){

                            return <ProjectCard data={e}/>
                        }
                    })
                }
                
            </div>
            {/* <div>
                {
                    pages[pageNum]
                }
            </div> */}
        </div>
    )
}

export default Projects