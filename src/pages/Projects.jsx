import React, { useState } from 'react'
import { projectsData } from './projects/projectData'
import ProjectCard from './projects/ProjectCard'

function Projects() {
    const [pageCato, setPageCato] = useState("Design")
        
    return (
        <div>
            <div className='contentChips'>
                <p className={`${(pageCato === "Design") ? 'selected' : ''}`} onClick={() => setPageCato("Design")}>UI Designs</p>
                <p className={`${(pageCato === "WebApp") ? 'selected' : ''}`} onClick={() => setPageCato("WebApp")}>Web Apps</p>
                <p className={`${(pageCato === "Website") ? 'selected' : ''}`} onClick={() => setPageCato("Website")}>Websites</p>
                <p className={`${(pageCato === "App") ? 'selected' : ''}`} onClick={() => setPageCato("App")}>Mobile Apps</p>
                <p className={`${(pageCato === "Tool") ? 'selected' : ''}`} onClick={() => setPageCato("Tool")}>Tools/Extensions</p>
            </div>

            <div className='projectContainer'>
                {
                    projectsData.map(e=>{
                        if(e.category===pageCato){

                            return <ProjectCard data={e}/>
                        }
                        return null;
                    })
                }
                
            </div>
        </div>
    )
}

export default Projects