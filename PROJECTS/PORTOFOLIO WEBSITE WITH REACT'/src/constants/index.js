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
  laravel,
  php,
  next,
  bootstrap,
  git,
  figma,
  dicoding,
  stp,
  persagi,
  momong,
  persagikarawang,
  incubator,
  sotopanaz,
  okta,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "Okta Nora",
    designation: "Stundent",
    company: "Unnes",
    image: okta,
  },
];

const projects = [
  {
    name: "Momong Parenting",
    description: `Parenting and consultation website was established as a project for Dicoding's Batch 3 Independent Study, emphasizing the significance of effective parenting for optimal child growth. Utilizing the Laravel framework and Bootstrap, it aims to educate and assist parents in fostering ideal environments for their children's development.`,
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: momong,
    source_code_link: "https://github.com/adityaimamz/Capstone-C22-030",
  },
  {
    name: "Incubator Solotechnopark",
    description:
      "The Company Profile for the Incubator training institution is a program for mentoring SMEs and Start-Ups, aimed at strengthening their competitiveness and fostering the formation of startups in Solo City. Built using the Next.js framework and Tailwind CSS",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: incubator,
    source_code_link: "https://github.com/adityaimamz/incubator.solotechnopark",
  },
  {
    name: "Persagi Karawang",
    description:
      "Persagi Company Profile website is an online platform that showcases the profile, contact details, and information regarding the DPC Persagi Karawang. Additionally, it incorporates useful features such as a Body Mass Index calculator and consultation features for the community. The website is developed using Laravel and Bootstrap.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: persagikarawang,
    source_code_link: "https://github.com/adityaimamz/Persagi-company-profile",
  },
  {
    name: "Soto Panaz",
    description:
      "Solo Technopark Analyzer is a data management information system designed for handling data within Solo Technopark. Developed using PHP and Bootstrap.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sotopanaz,
    source_code_link:
      "https://github.com/adityaimamz/Sistem-Informasi-Keuangan-SOLOTECNHOPARK",
  },
];

export { services, technologies, experiences, testimonials, projects };
