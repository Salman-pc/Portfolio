import project_fair from '../assets/project_fair.png'
import construction from '../assets/construction.webp'
import shopping_cart from '../assets/shopping_cart.jpg'
import music from '../assets/music.jpg'
import bmwcar from '../assets/bmwcar.jpg'
import restuarent_food from '../assets/restuarent_food.webp'
import swiggy from '../assets/Swiggy.jpg'
import iphone from '../assets/iphone.png'


export const ProjectsExp = [
    {
        title: 'Seclob Super Admin - Multi-Service Management Platform (Live)',
        description1: "Seclob super admin for managing multiple services.categories including e-cards , salons, resellers, and service partners with real-time analytics and user management capabilities",
        description2: '',
        skils: ["Full stack","React", "Talwind css","JavaScript", "ContextAPI"],
        githublink: '',
        livelink: 'https://superadmin.seclob.com/',
        image: project_fair,
        priority: -1
    },
    {
        title: 'E-card (Live)',
        description1: "Seclob is a suite of digital products designed to simplify and enhance business and personal services. The platform includes Seclob Falah Card, Seclob Nest, Seclob MenuX, Seclob Events-Card, and Seclob Smart Card, each offering a dedicated Admin Panel for managing services, users, and analytics (built with React.js, Tailwind, and JavaScript) and a User Panel for seamless interaction (built with Next.js, Tailwind, and TypeScript). Users can access digital business cards, restaurant menus, e-commerce solutions, and event management tools—all within a unified ecosystem.",
        description2: '',
        skils: ["Full stack","React","Talwind css","JavaScript", "ContextAPI","Next js","TypeScript"],
        githublink: '',
        livelink: 'https://www.member.seclob.com/',
        image: project_fair,
        priority: 0
    },
    {
        title: 'Project Fair',
        description1: "Project Fair is a dedicated platform that allows developers and tech enthusiasts to present their projects in a structured and professional manner. It provides an intuitive interface where users can upload their work, describe their projects, and highlight key technologies used.Built with React.js for the frontend and Node.js / Express.js for the backend, Project Fair ensures a smooth and responsive user experience.MongoDB is used for data storage, allowing efficient management of user projects.The platform also includes user authentication via JSON Web Tokens(JWT) for secure access and profile management.",
        description2: 'One of the core features of Project Fair is its project listing and categorization system, which enables users to browse projects based on technologies and categories. Additionally, users can add images, detailed descriptions, and relevant links to enhance their project presentations.',
        skils: ["React", "Bootstrap", "Mongo DB", "Express", "Node js", "ContextAPI"],
        githublink: 'https://github.com/Salman-pc/project_fair',
        livelink: 'https://project-fair-phi-seven.vercel.app/',
        image: project_fair,
        priority: 1
    },
    {
        title: 'Constructo',
        description1: "Constructo is a full-stack platform designed to connect users and workers for construction-related services. It enables users to easily find and hire skilled professionals such as plumbers, electricians, and painters for building projects like homes and apartments.",
        description2: 'The platform includes three main modules — Admin, Worker, and User. Users can search for workers, view detailed profiles, and communicate through real-time chat for project discussions. The admin panel manages users, workers, and service requests efficiently. Developed with a focus on scalability, clean architecture, and real-time functionality, this project strengthened my full-stack development skills and understanding of real-world service management systems.',
        skils: ["MERN", "Tailwind CSS", "Socket Io", "ContextAPI"],
        githublink: 'https://github.com/Salman-pc/Cunstructo',
        livelink: 'https://cunstructo.vercel.app/',
        image: construction,
        priority: 2
    },
    {
        title: 'E-Cart',
        description1: "Ecat is a responsive e-commerce platform that lets users browse a wide variety of products, add them to their shopping cart, and complete secure checkouts. The app is designed with a modern and intuitive interface using React.js and Bootstrap, ensuring a seamless experience on both desktop and mobile devices.",
        description2: 'State management is handled using Redux, making it easy to manage user actions and maintain a consistent experience across the app. The platform communicates with a RESTful API to manage product listings and user transactions. This setup ensures smooth functionality and a reliable shopping experience, providing users with everything they need in one place.',
        skils: ["React", "Bootstarap", "Redux"],
        githublink: 'https://github.com/Salman-pc/E-Cart',
        livelink: 'https://e-cart-delta-taupe.vercel.app/',
        image: shopping_cart,
        priority: 3
    },
    {
        title: 'Media Player',
        description1: "The Media Player App is a front-end web application designed for seamless audio and video streaming. It features dynamic playlists, search functionality, and intuitive playback controls, providing users with an effortless way to manage and enjoy their media. The app ensures smooth and responsive performance across various devices, delivering high-quality playback for both audio and video content.",
        description2: 'Built with React and styled using Tailwind CSS, the app uses a JSON Server to handle and store data. This setup allows for efficient management of media content without the complexity of a backend, providing a simple and effective solution for content storage. The application focuses on delivering a high-quality user experience with intuitive controls and responsive design.',
        skils: ["React", "Bootstarap", "Node js", "Json Db"],
        githublink: 'https://github.com/Salman-pc/MeadiaPlayer',
        livelink: 'https://meadia-player-lyart.vercel.app/',
        image: music,
        priority: 4
    },
    {
        title: 'iPhone India_Clone',
        description1: "The iPhone India Clone is a front-end web project designed to replicate the official Apple India website, focusing on delivering a premium user experience similar to the original. The project presents a clean and modern design, showcasing iPhone models, features, and specifications. Users can explore various iPhone options, accessories, and more, with a smooth and interactive layout that mimics the design aesthetics of Apple’s official website.",
        description2: 'Built with React and styled using Tailwind CSS, the front-end offers a modern and fully responsive design. The Context API is utilized for state management, enabling efficient data handling and smooth user interactions. This project focuses on performance, accessibility, and user convenience, offering a user-friendly and efficient online food ordering experience. ',
        skils: ["React", "Talwind Css"],
        githublink: 'https://i-phone-ind-clone-qrg0wz5kj-salman-pcs-projects.vercel.app',
        livelink: 'https://github.com/Salman-pc/iPhone-ind-_clone',
        image: iphone,
        priority: 5
    },
    {
        title: 'Swigy_clone',
        description1: "The Swiggy Clone is a front-end web project designed to replicate the interface of the Swiggy food delivery website. It features a structured layout with restaurant listings, banners, and a clean design that closely resembles the original platform. The website provides a static visual representation of Swiggy’s homepage, ensuring an engaging user interface.",
        description2: 'Developed using HTML and CSS, this project does not include media queries, meaning it is not responsive across different screen sizes. The layout is fixed, making it more suitable for desktop viewing rather than adapting to mobile or tablet screens. Despite the lack of responsiveness, the project effectively demonstrates front-end development skills by accurately replicating Swiggy’s design using core web technologies.',
        skils: ["HTML 5", "CSS"],
        githublink: 'https://github.com/Salman-pc/Swigy',
        livelink: 'https://swigy-three.vercel.app/',
        image: swiggy,
        priority: 6
    },
    {
        title: 'BMW India_Clone',
        description1: "The BMW India Clone is a front-end web project designed to replicate the official BMW India website, focusing on user-friendly design and seamless navigation. This project showcases an elegant interface that highlights BMW’s luxury cars, allowing users to explore various models, specifications, and features. With a sleek and professional layout, the website ensures an engaging browsing experience that aligns with the premium brand identity of BMW.",
        description2: 'Developed using HTML, CSS, and CSS Media Queries, this project emphasizes responsive design to ensure compatibility across different devices, including desktops, tablets, and mobile phones. The use of CSS Flexbox and Grid provides a well-structured layout, while media queries optimize the design for various screen sizes. This project serves as a demonstration of strong front-end development skills, attention to detail, and the ability to create visually appealing, high-quality web interfaces.',
        skils: ["HTML", "Meadia quary", "Java Script"],
        githublink: 'https://github.com/Salman-pc/Bmw-ind-_clone',
        livelink: 'https://bmw-ind-clone.vercel.app/',
        image: bmwcar,
        priority: 7
    },
    {
        title: 'Restaurant App',
        description1: "The Restaurant App is a front-end web application designed to provide a seamless food ordering and reservation experience. It features an intuitive interface where users can browse menus, place orders, and manage reservations easily. The app also includes real-time order tracking, ensuring a smooth and efficient experience for customers.",
        description2: 'Built with React and styled using Tailwind CSS, the front-end offers a modern and fully responsive design. The Context API is utilized for state management, enabling efficient data handling and smooth user interactions. This project focuses on performance, accessibility, and user convenience, offering a user-friendly and efficient online food ordering experience.',
        skils: ["React", "Talwind Css", "SCSS"],
        githublink: 'https://github.com/Salman-pc/Restaurant-app',
        livelink: '',
        image: restuarent_food,
        priority: 8
    },
]