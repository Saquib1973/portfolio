import image from "../imgs/long.jpeg"
import nyaylok from "../imgs/nyaylok.jpeg"
import blogig from "../imgs/blogigg.png"
import academia from "../imgs/academia.png"

/*
Project content format :
    {
        id: '', name: '', description: [
            "","",""
        ]
        , detail: '', tags: ['', '', ''], link: '', git: '', img: , date: '',
        type: ['frontend' , 'backend' , 'design' , 'fullstack' , 'core'],
    },
*/

export const Projects = [
    {
        id: 'nyaylokSIH', name: 'Nyaylok', description: [
            "Nyaylok is a cutting-edge case management website developed for the Smart India Hackathon 2023.",
            "It revolutionizes the Indian judicial system by prioritizing cases, facilitating timely resolutions, and enhancing overall efficiency.",
            "With advanced algorithms for case prioritization, Nyaylok ensures critical matters receive prompt attention.",
            "Its user-friendly interface empowers legal professionals to track case progress, manage documents, and engage with stakeholders seamlessly.",
            "By emphasizing victim engagement and transparency, Nyaylok fosters trust within the legal framework.",
            "Moving forward, Nyaylok aims to modernize further, incorporating feedback and adapting to legal advancements, ultimately contributing to a more efficient and equitable judicial system in India."
        ]
        ,
        type: ['frontend', 'design'],
        detail: 'Streamlined case management system developed for Smart India Hackathon 2023. Prioritized cases, facilitated resolutions, and enhanced judiciary efficiency.', tags: ['react', 'redux', 'tailwind'], link: 'https://nyaylok.onrender.com/', git: 'https://github.com/Saquib1973/Nyaylok-Frontend', img: nyaylok, date: '2021-25'
    },
    {
        id: 'blogig', name: 'Blogig', description: [
            "Blogig is a dynamic web application designed to revolutionize the blogging experience.",
            "With its user-friendly interface and intuitive editor powered by EditorJs, Blogig offers a seamless platform for writers to create and share engaging content effortlessly.",
            "The website boasts a meticulously crafted UI/UX design, leveraging the power of Framer Motion and Tailwind CSS to deliver a visually stunning and immersive user experience.",
            "Through Blogig, users can not only write and publish blogs but also explore a range of customization options to enhance their content.",
            "From dynamic animations to responsive layouts, Blogig prioritizes both aesthetics and functionality, ensuring that bloggers can express themselves creatively while reaching a wider audience."
        ],
        type: ['frontend', 'backend', 'design', 'fullstack'],
        detail: 'A user-friendly web app for writing and sharing blogs. Featuring an intuitive editor, beautiful UI/UX design, and integration of Framer Motion and Tailwind CSS.', tags: ['editor-js', 'framer-motion', 'mern', 'tailwind', 'aws-sdk', 'firebase'], link: 'https://blogig.vercel.app/', git: 'https://github.com/Saquib1973/bloggingWebsite', img: blogig, date: '2021-25'
    },
    {
        id: 'academiaStacksCollege', name: 'Academia Stacks', description: [
            "One stop solution for all your notes related issue",
            "Developed a college note aggregation website in 20 days with a friend.",
            "As primary frontend developer, created an intuitive user interface and played key role in connecting backend to frontend."
        ],
        type: ['frontend', 'design'],
        detail: 'Crafted college note aggregation website in 20 days. Led frontend development, connecting backend for seamless user experience.', tags: ['scss', 'react', 'framer-motion'], link: 'https://academia-stacks.vercel.app/', git: 'https://github.com/hellovaibhav/AcademiaStacks', img: academia, date: '2021-25'
    },
    {
        id: 'news4U',
        name: 'News For You',
        description: [
            'News website template with admin dashboard',
            "Project name is News4U",
            "It is a news website template.",
            "It includes an Admin dashboard UI as well",
        ],
        type: ['frontend', 'design'],

        detail: 'Designed and developed a news website template with an integrated admin dashboard. The project, named News4U, offers a user-friendly interface for both general users browsing news articles and administrators managing the platform.',
        tags: ['tailwind', 'react'],
        link: 'https://news4u-saquib.vercel.app/',
        git: 'https://github.com/Saquib1973/AssignmentSiddi',
        img: image,
        date: '2021-25'
    }
    ,
    {
        id: 'quillBot', name: 'Quill Bot', description: ['Search Articles using a search engine for that',
            "Project name is Quill Bot",
            "It helps to find research articles from the net.",
            "It is basically a UI using API calls of a backend given to me for designing this website.",
            "It makes it easier for scholars to search for material."
        ]
        ,
        type: ['frontend', 'design',],
        detail: 'Quill Bot streamlines research article discovery with a user-friendly interface utilizing backend APIs. It aids scholars in efficiently accessing relevant material, simplifying their academic endeavors effectively and collaboratively.', tags: ['tailwind', 'react'], link: 'https://renderquillbot.onrender.com/', git: 'https://github.com/Saquib1973/QuillBotSearch', img: image, date: '2021-25'
    },
    {
        id: 'firebaseAuth', name: 'Firebase Authentication App',
        type: ['frontend', 'backend', 'design', 'fullstack',],
        description: ['I was asked by a company to develop a Firebase authentication app by a company on internshala as a project . Without any prior experience in Firebase I was able to make it within the given time span with the help of documentations and tutorials .'], detail: '', tags: ['react', 'scss', 'firebase'], link: 'https://fir-authentication-app-f9489.web.app/', git: 'https://github.com/Saquib1973/Firebase_Authentication_App', img: image, date: '2021-25'
    },
    {
        id: 'weatherApp', name: 'Weather App',
        type: ['frontend', 'design'],
        description: ['You can enter name of a place and know the weather of that location'], detail: '', tags: ['tailwind', 'react', 'express', 'mongoDb'], link: '', git: 'https://github.com/Saquib1973/WatherWebApp', img: image, date: '2021-25'
    },
    {
        id: 'ecommerce', name: 'Ecommerce', description: [],
        type: ['frontend', 'backend', 'design', 'fullstack'],
        detail: '', tags: ['tailwind', 'redux', 'react', 'express', 'mongoDb'], link: '', git: 'https://github.com/Saquib1973/Ecommerce', img: image, date: '2021-25'
    },
    {
        id: 'portfolio', name: 'Portfolio', description: [],
        type: ['frontend', 'design',],
        detail: '', tags: ['tailwind', 'react-redux', 'react', 'framer-motion'], link: 'https://heysaquib.vercel.app/', git: 'https://github.com/Saquib1973/portfolio', img: null, date: '2021-25'
    },


] 