import React from 'react'
import profile from '../assets/ram.png'
function About() {
  return (
    <div className="contentDiv1 open col-11" id="content5">
                <div className="content-inner">

                    <div className="contain">
                        <p>
                            Heylo! I am Ram Goel. A Undergrad, Freelancer, Developer, Designer and Bathroom Singer
                            from India. Stepped into this tech curiosity in 2018 when I made a
                            youtube video titled "Top Android Phones under 7000". Currently in my pre-final year of
                            B.Tech.
                            I'm tech lead at Google Developer Student Club ABESEC and have been in core team of
                            TEDxABESEC
                            and Genero'23.
                        </p>

                        <div className="ach-box">
                            <div>
                                <p className="bigText">2+</p>
                                <p className="smallText">Interns</p>
                            </div>
                            <div>
                                <p className="bigText">13+</p>
                                <p className="smallText">Clients</p>
                            </div>
                            <div>
                                <p className="bigText">1k+</p>
                                <p className="smallText">Linkedin</p>
                            </div>
                        </div>
                        <div className="foot">

                            <p>Want to say hello? Let's connect on these platforms. </p>
                            <div className="link-box">
                                <a href="https://linkedin.com/in/ramgoel" className="socialLink"><i className="fab fa-linkedin"
                                        title="figma"></i></a>
                                <a href="https://twitter.com/theRamGoel" className="socialLink"><i className="fab fa-twitter"
                                        title="behance"></i></a>
                                <a href="https://instagram.com/ramwork_" className="socialLink"><i className="fab fa-instagram"
                                        title="dribble"></i></a>
                                <a href="https://www.youtube.com/channel/UC0DGkWbMKZhJbhcCZYcwIvw" className="socialLink"><i
                                        className="fab fa-youtube" title="dribble"></i></a>
                                <a href="https://github.com/RamGoel" className="socialLink"><i className="fab fa-github"
                                        title="dribble"></i></a>
                                <a href="mailto:rgoel766@gmail.com" className="socialLink"><i className="fa fa-envelope"
                                        title="dribble"></i></a>
                            </div>
                        </div>
                        <a href='https://www.canva.com/design/DAFf5rA2e9k/Gl2o6Pn7UFnMb6SSb5-FxQ/view?utm_content=DAFf5rA2e9k&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu'><button id="cta-btn">
                            VIEW RESUME
                        </button></a>



                    </div>
                    <div className="profileDiv">
                        <img src={profile} className="profileImage" width={'70%'} alt=""/>
                    </div>
                </div>
            </div>
  )
}

export default About