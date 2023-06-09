import React from 'react'
import About from '../Sidebar/Sidebar'
import Details from '../Details/Details'
import './Home.css'
function Home() {
    return (
        <div id='freelance'>
            <div>

                <svg xmlns="http://www.w3.org/2000/svg" id="animation" class="height100 width100"
                    preserveAspectRatio="xMidYMin slice" viewBox="24 105 156 95">
                    <rect x="0" y="0" width="300" height="300" fill="#E22227" />
                    <path class="top-outer" fill="#EF8716" stroke="#371300" stroke-width="1"
                        d="M68 1c23,0 67,17 69,39 4,38 5,52 -5,69 -20,36 -68,46 -120,-9 -27,-28 -7,-101 56,-99z" />
                    <path class="top-inner" fill="#537571" stroke="#DCB467" stroke-width="1"
                        d="M69 22c33,-7 52,21 54,37 3,26 -1,28 -8,40 -15,25 -48,25 -85,-14 -19,-20 -4,-53 39,-63z" />
                    <path class="bottom-outer" fill="#DCB467" stroke="#371300" stroke-width="1"
                        d="M158 158c30,13 56,50 44,75 -9,18 -22,46 -42,55 -20,10 -48,2 -73,-19 -29,-25 -27,-55 -9,-79 17,-22 43,-48 80,-32z" />
                    <path class="bottom-inner" fill="#263D56" stroke="#537571" stroke-width="1"
                        d="M136 180c32,-9 45,13 46,29 3,27 8,29 0,42 -14,25 -52,24 -79,0 -21,-18 -2,-61 33,-71z" />
                </svg>
            </div>

            <div className='home-container'>
                <About />
                <Details />
            </div>
        </div>
    )
}

export default Home