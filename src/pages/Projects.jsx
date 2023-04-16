import React, { useState } from 'react'
import { projectsData } from './projects/projectData'
import ProjectCard from './projects/ProjectCard'

function Projects() {
    const [pageCato, setPageCato] = useState("Design")

    return (
        <div id="portfolio" className='fullHeight'>

            
            <div id='portfolio' className='py-3 d-flex align-items-center justify-content-center'>
                <div>

                    <div className='contentChips py-3 mx-auto'>
                        <p className={`${(pageCato === "Design") ? 'selected' : ''}`} onClick={() => setPageCato("Design")}>UI Designs</p>
                        <p className={`${(pageCato === "WebApp") ? 'selected' : ''}`} onClick={() => setPageCato("WebApp")}>Web Apps</p>
                        <p className={`${(pageCato === "Website") ? 'selected' : ''}`} onClick={() => setPageCato("Website")}>Websites</p>
                        <p className={`${(pageCato === "App") ? 'selected' : ''}`} onClick={() => setPageCato("App")}>Mobile Apps</p>
                        <p className={`${(pageCato === "Tool") ? 'selected' : ''}`} onClick={() => setPageCato("Tool")}>Tools/Extensions</p>
                    </div>

                    <div className='projectContainer w-100' style={{ height: '60vh' }}>
                        {
                            projectsData.map(e => {
                                if (e.category === pageCato) {

                                    return <ProjectCard data={e} />
                                }
                                return null;
                            })
                        }

                    </div>

                </div>
            </div>
            <div className='text-center'>

            <p style={{fontSize:'12px', opacity:0.6}}>Hover on card for description</p>
            </div>
        </div>
    )
}

export default Projects