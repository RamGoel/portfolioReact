import React from 'react'

function Experience() {
    var experience = [
        {
            company: "Simplifii Labs Private Limited",
            role: "Software Developer Intern",
            year: '2023'
        },
        {
            company: "NeyX Technologies Private Limited",
            role: "ReactJS Developer Intern",
            year: '2022'
        },
    ]
    return (
        <div id="experience">
            <h1>Experience</h1>
            <div>
                {
                    experience.map(e => {
                        return(
                            <div className='exp-card'>
                                <h3 className='bigText'>{e.year}</h3>

                                <div>
                                    <h5>{e.role}</h5>
                                    <p className='smallText'>{e.company}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='ach-box' style={{margin:'auto'}}>
                <div>
                    <h1 className='bigText'>15+</h1>
                    <p className='smallText'>Features Developed</p>
                </div>
                <div>
                    <h1 className='bigText'>100+</h1>
                    <p className='smallText'>Bugs Fixed</p>
                </div>
                <div>
                    <h1 className='bigText'>20+</h1>
                    <p className='smallText'>PR's Merged</p>
                </div>
                <div>
                    <h1 className='bigText'>5+</h1>
                    <p className='smallText'>PR's Reviewed</p>
                </div>
            </div>

            <div className="contentChips" style={{margin:'auto'}}>
                <p>reactjs</p>
                <p>react-native</p>
                <p>redux</p>
                <p>nodejs</p>
                <p>expressjs</p>
                <p>mongodb</p>
                <p>bootstrap</p>
                <p>html</p>
                <p>css</p>
                <p>firebase</p>
                <p>figma</p>
                <p>javascript</p>
            </div>
        </div>
    )
}

export default Experience