import React from 'react'
import dev from '../../assets/wbdesign.png'
function WebDev() {
    return (
        <div class="contentDiv " id="contentDev">
            <div class="content-inner">
                <div class="contain">
                    <p>
                        The Technolgies I use are HTML, CSS, JavaScript, ReactJS, React Native, Firebase, NodeJS,
                        MongoDB and much more.
                        I turned into a Cross Platform Mobile App Developer in late 2022.
                        Being a part of an organization, I have worked on various client projects
                        for 3 months which gave me so much learing about business applications.
                    </p>
                    <p>Have an idea in mind? Let's bring it to real life. </p>
                    <div>
                        <a href="https://github.com/RamGoel" class="socialLink"><i class="fab fa-github"
                            title="figma"></i></a>
                        <a href="https://" class="socialLink"><i class="fab fa-google" title="behance"></i></a>
                    </div>
                    <button id="cta-btn">
                        GET A QUOTE
                    </button>


                </div>
                <div class="contain-right">
                    <img src={dev} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WebDev