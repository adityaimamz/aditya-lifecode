import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  dicoding,
  stp,
  persagi,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "./public";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Independent Study Front End and Back End Developer",
    company_name: "Dicoding",
    icon: dicoding,
    iconBg: "#383E56",
    date: "July 2022 - December 2022",
    points: [
      "Developing a strong foundation in web development principles and practices",
      "Gaining in-depth knowledge of JavaScript and its various frameworks and libraries",
      "Acquiring proficiency in HTML, CSS, and responsive web design",
      "Learning to build dynamic and interactive websites using front-end technologies",
      "Understanding server-side programming and database management for back-end development",
      "Familiarizing myself with version control systems like Git for collaborative web development",
      "Exploring modern web development tools and techniques to enhance productivity and code quality",
      "Actively engaging in coding projects and building a portfolio to showcase my web development skills",
    ],
  },
  {
    title: "Front End and Back End Officer",
    company_name: "Solo Technopark",
    icon: stp,
    iconBg: "#E6DEDD",
    date: "February 2023 - July 2023",
    points: [
      "Collaborated in designing the information system for Soto Panaz (Solo Technopark Analyzer), including system architecture, database, user interface, and system modules",
      "Collaborated in migrating the Solo Technopark & Solo Techno Incubator websites from WordPress to Node.js",
      "Implemented the Soto Panaz information system using PHP programming language and Bootstrap framework",
      "Implemented the development of the Solo Technopark and Solo Techno Incubator websites using Next.js, Express.js, and Tailwind CSS",
      "Responsible for testing the Soto Panaz, Solo Technopark, and Solo Techno Incubator systems to ensure compliance with the established requirements, including functional, integration, and performance testing",
      "Involved in the development and maintenance of the Soto Panaz, Solo Technopark, and Solo Techno Incubator information systems, including bug fixes and necessary updates",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Persagi Karawang",
    icon: persagi,
    iconBg: "#fff",
    date: "August 2023 - September 2023",
    points: [
      "Collaborated in designing and developing the company's profile website and internal information system for Persagi, utilizing the Laravel framework.",
      "Collaborated in defining the system architecture, database structure, user interface, and various system modules for the Persagi information system.",
      "Developed the company's profile website and internal information system for Persagi, leveraging PHP programming language and Laravel framework.",
      "Responsible for rigorous testing of the internal information system and website to ensure seamless functionality, integration, and optimal performance in compliance with specified requirements.",
      "Contributed to the continuous development and maintenance of the internal information system and website, addressing any bugs and implementing necessary updates for Persagi.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
