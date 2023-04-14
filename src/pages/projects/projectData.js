import hisaab from '../../assets/hisaab1.png'
import foodapp from '../../assets/appDev.png'
import tedx from '../../assets/tedx.png'
import gdsc from '../../assets/gdsc.png'
import genero from '../../assets/genero.png'
export var projectsData=[
    {
        title:"CodeChat",
        links:['https://codechat-8oqw.onrender.com/','https://github.com/RamGoel/CodeChat'],
        image:'',
        category:"WebApp",
        technologies:['ejs','nodejs','socketio','bootstrap'],
        points:['Allows users to chat & code at one place.','Multi Language compiler using API','Group as well as Personal Chats']
    },
   
    {
        title:"Portify",
        links:['https://portify.onrender.com/','https://github.com/RamGoel/portify'],
        image:'',
        category:"WebApp",
        technologies:['ejs','firebase','bootstrap', 'mongodb'],
        points:['Create Portfolio Website in 3 Minutes','Google Sign in using Firebase','Simple & Effective Design']
    },
    {
        title:"Food App Design",
        links:[`https://www.figma.com/file/JjrTx7OxwdvlPQa9AmLVJk/Ram's-Workbook?node-id=79-4941`],
        image:foodapp,
        category:"Design",
        technologies:['figma'],
        points:['Created for a France based client on Fiverr','Understood Requirements in first 3 days.','Delivered in approx 2 weeks']
    },
    {
        title:"Expense Tracking App ",
        links:[`https://www.figma.com/file/JjrTx7OxwdvlPQa9AmLVJk/Ram's-Workbook?node-id=1%3A49901&t=cAJZFgtYcD8DmBgd-1`],
        image:hisaab,
        category:"Design",
        technologies:['figma'],
        points:['Created for one of my app idea','To make the tracking process simple','Included PieCharts, Profiles, reports etc.']
    },
    {
        title:"cdnExtension",
        links:['https://addons.mozilla.org/en-US/firefox/addon/cdnextension/'],
        category:"Tool",
        technologies:['html','css','javascript'],
        points:['Get Popular CDN Links on top of your browser','Also have Search Functionality','Gathered Contributions in Hacktoberfest 2022']
    },
    {
        title:"reduTrap",
        links:['https://ramgoel.github.io/reduTrap/'],
        category:"Tool",
        technologies:['html', 'css','javascript'],
        points:['A Tool to Optimize Website','Import only the "bootstrap you used" ','People Contributed in Hacktoberfest']
    },
    {
        title:"TEDxABESEC Website",
        links:['https://tedxabesec.in/'],
        image:tedx,
        category:"Website",
        technologies:['html', "bootstrap","javaScript"],
        points:['Created for TEDxABESEC Event 2022','Visited by 1000+ students for registration','Included Animations, Optimized Images etc.']
    },
    {
        title:"GDSC ABESEC Website",
        links:['https://abesec-gdsc.netlify.app/'],
        image:gdsc,
        category:"Website",
        technologies:['reactjs'],
        points:['Created for GDSC club','Worked in Team of 3','Used by Students to know updates.']
    },
    {
        title:"Genero Website",
        links:['https://genero23.netlify.app/'],
        image:genero,
        category:"Website",
        technologies:['reactjs'],
        points:['Created for Genero Fest of ABESEC','Used for Regsitration, Updates and Info','Visited by 1500+ students']
    },

    {
        title:"SimpliCalc",
        links:['https://www.amazon.com/Sitern-SimpliCalc/dp/B0BR648T88/ref=sr_1_5?qid=1672586146&refinements=p_n_date%3A2479571011&rnid=2479567011&s=mobile-apps&sr=1-5'],
        category:"App",
        technologies:['react-native','jsx','javascript'],
        points:['A Calculator built in React Native','Supports Dark/Light Mode Functionality','Simple & Easy Design']
    },
    {
        title:"Xibiller",
        links:['https://github.com/RamGoel/XiBiller-Stable'],
        category:"App",
        technologies:['react-native','jsx','javascript'],
        points:['App for Billing at MI outlets','Built during MI Ode2Code Hackathon','Implemented Forms, Auth and more']
    },
]