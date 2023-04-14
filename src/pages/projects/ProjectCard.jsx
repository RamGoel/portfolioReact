import React from 'react'

function ProjectCard({data}) {
  return (
    
    <div className='projectCard'>
               {(data.image)? <img src={data.image} className='projectCardImage' alt="" />:""}
                <div className='projectCardText'>

                <div className='projectCardLinks'>

                <h3>{data.title}</h3>
                <div>
                    {data.links[0]?<a href={data.links[0]}><i className='fa fa-external-link'></i></a>:""}
                    {data.links[1]?<a href={data.links[1]}><i className='fab fa-github'></i></a>:""}
                </div>
                </div>
                <div className='contentChips1'>
                    {
                        data.technologies.map(e=>{
                            return <p>{e}</p>
                        })
                    }
                </div>
                <div>
                    {
                        data.points.map((e,index)=>{
                            return <p>{index+1}. {e}</p>
                        })
                    }
                    
                </div>
                </div>
            </div>
  )
}

export default ProjectCard