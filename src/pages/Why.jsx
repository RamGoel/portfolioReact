import React from 'react'

function Why() {
    return (
        <div>
            <div id="about">

                <div class="leftPortify">
                    <p class="centeredPara">I've worked with several clients from all over the world, provided them top notch
                        services which scaled their businesses and made them profitable.</p>
                    <div class="linkContainer gigLinks">

                        <a href="https://www.fiverr.com/ramgoel?up_rollout=true" class="socialIcon"><img
                            src="https://cdn.worldvectorlogo.com/logos/fiverr-1.svg" width="60" alt="ancj" /></a>
                        <a href="https://www.freelancer.in/u/rgoel766" class="socialIcon"><img
                            src="https://www.freelancer.com/ppic/86385007/logo/24295157/pMekU%2Fprofile_logo_.png"
                            width="60" alt="sksk" /></a>
                        <a href="https://www.upwork.com/freelancers/~016b2f741e963486a2" class="socialIcon"><img
                            src="https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png"
                            width="60" alt='sddk' /></a>


                    </div>
                    <div className='text-center'>

                    <a href="mailto:rgoel766@gmail.com"><button
                        className="btn-grad">HIRE ME</button></a>
                    <a href="#portfolio" className='text-center mx-auto'>MY WORK <i className="fa fa-angle-down mx-1"></i></a>
                    </div>
                </div>
                <img src={require('../assets/ab11.jpg')} width="80%" alt="abcd"  />
            </div>
        </div>
    )
}

export default Why