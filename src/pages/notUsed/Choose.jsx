import React from 'react'

function Choose() {
    return (
        <div className='fullHeight d-flex align-items-center justify-content-center'>
            <div>
                <h1 className='text-white'>Heylo, I'm Ram</h1>
                <p className='text-center choosePara'>A DEVELOPER</p>
                <div className='d-flex align-items-center justify-content-center'>
                    <a href="#freelance" className="navLinks">Hire as Freelancer</a>
                    <a href="#corporate" className="navLinks">Hire as Employee</a>

                </div>

            </div>
        </div>
    )
}

export default Choose