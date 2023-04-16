import React from 'react'

function ProjectCard({ data }) {
    return (

        <div className='projectCard'>
            {(data.image) ? <img src={data.image} className='projectCardImage' alt="" /> : ""}
            <div className='projectCardText'>

                <div className='projectCardLinks'>

                    <h4 className='w-75'>{data.title}</h4>
                    <div className='w-25 d-flex align-items-center justify-content-end '>
                        {data.links[0] ? <a href={data.links[0]}><i className='fa fa-external-link'></i></a> : ""}
                        {data.links[1] ? <a href={data.links[1]}><i className='fab fa-github'></i></a> : ""}
                    </div>
                </div>
                <div className='contentChips1 my-2'>
                    {
                        data.technologies.map(e => {
                            return <p>{e}</p>
                        })
                    }
                </div>
                <div>
                    {
                        data.points.map((e, index) => {
                            return <p>{index + 1}. {e}</p>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectCard