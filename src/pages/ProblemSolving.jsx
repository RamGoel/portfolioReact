import React from 'react'
import solving from '../assets/solving.png'
function ProblemSolving() {
  return (
    <div class="contentDiv" id="content7">


                <div class="content-inner">

                    <div class="contain">
                        <p>
                            I do solve questions on various coding platforms to improve
                            my thinking ability and approach to problem. I am 2 star
                            in problem solving, 4 star in C++ and 2 star in Python.
                            I have solved approx 150 questions on Leetcode and
                            Hackerrank. I also give coding contests on Leetcode.
                        </p>
                        <div class="bg-dark">
                            <a href="https://www.leetcode.com/rgoel766" class="socialLink"><svg role="img" viewBox="0 0 24 24"
                                id="IconChangeColor" height="20" width="25">
                                <path
                                d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
                                id="mainIconPathAttribute" fill="#ffffff"></path>
                            </svg></a>
                            <a href="https://auth.geeksforgeeks.org/user/rgoel766/practice" class="socialLink ml-2">
                                <img width="30px" style={{filter:'brightness(100000)'}} class="mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png" alt=""/>
                            </a>
                            <a href="https://www.hackerrank.com/Rgoel766" class="socialLink mx-0"><i class="fab fa-hackerrank" title="figma"></i></a>
                        </div>
                        <button id="cta-btn">
                            GET A PEER PROGRAMMER
                        </button>


                    </div>
                    <div class="contain-right">
                        <img src={solving} alt=""/>
                    </div>
                </div>
            </div>
  )
}

export default ProblemSolving