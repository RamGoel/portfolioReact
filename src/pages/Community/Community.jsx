import React from 'react'
import community from '../../assets/community.jpg'
function Community() {
  return (
    <div class="contentDiv " id="content3">


                <div class="content-inner" style={{
                    display:'flex',
                    alignItems:'center'
                }}>

                    <div class="contain" style={{
                        width:'50%'
                    }}>
                        <p>
                            I love participating and organizing events,
                            I am the Tech lead of Google Developers Student Club,
                            ABESEC. Participated in 5+ in-person hackathons. Attended
                            and been in core-team of TEDxABESEC, DevFest Noida, GDSC WOW,
                            IT Day Hackathon Rajasthan. I have also taken a session on Creating Github Repo for 2nd Year
                            students while being in 3rd Year.
                        </p>
                        <p>Do you have an opportunity? Lets talk</p>
                        <a href="mailto:rgoel766@gmail.com"><button id="cta-btn">
                            MAIL ME
                        </button></a>


                    </div>
                    <div class="contain-right">
                        <img src={community} width="40%" alt=""/>
                    </div>
                </div>
            </div>
  )
}

export default Community