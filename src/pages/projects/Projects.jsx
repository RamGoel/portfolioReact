import React, { useState } from 'react'
import { projectsData } from './projectData'
import ProjectCard from './ProjectCard'

function Projects() {
    const [pageCato, setPageCato] = useState("reactjs")

    return (
        <div id="portfolio" className='fullHeight'>

            
            <div id='portfolio' className='py-3 d-flex align-items-center justify-content-center'>
                <div>

                    <div className='contentChips py-3 mx-auto'>
                        {/* <p className={`${(pageCato === "Design") ? 'selected' : ''}`} onClick={() => setPageCato("Design")}>UI Designs</p> */}
                        <p className={`${(pageCato === "reactjs") ? 'selected' : ''}`} onClick={() => setPageCato("reactjs")}>reactjs</p>
                        <p className={`${(pageCato === "nodejs") ? 'selected' : ''}`} onClick={() => setPageCato("nodejs")}>nodejs</p>
                        <p className={`${(pageCato === "react-native") ? 'selected' : ''}`} onClick={() => setPageCato("react-native")}>react-native</p>
                        <p className={`${(pageCato === "websites") ? 'selected' : ''}`} onClick={() => setPageCato("websites")}>websites</p>
                        <p className={`${(pageCato === "misc") ? 'selected' : ''}`} onClick={() => setPageCato("misc")}>miscellaneous</p>
                        {/* <p className={`${(pageCato === "Tool") ? 'selected' : ''}`} onClick={() => setPageCato("Tool")}>Tools/Extensions</p> */}
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
            {/* <div className='text-center'>

            <p style={{fontSize:'12px', opacity:0.6}}>Hover on card for description</p>
            </div> */}
        </div>
    )
}

export default Projects