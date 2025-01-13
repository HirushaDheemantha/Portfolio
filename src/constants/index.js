import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `

I am a dedicated full stack developer with expertise in building dynamic and scalable web applications. I specialize in front-end frameworks like React and Next.js, alongside back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. My journey includes successfully completing a PHP-based e-commerce project and managing its dashboard, showcasing my ability to create efficient and user-friendly systems. I thrive in developing solutions that align with business goals, leveraging my proficiency to deliver exceptional user experiences and support operational growth.

`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

import aiesecLogo from "../assets/projects/aiesec.png"; // Path to the AIESEC logo image
import otomateLogo from "../assets/projects/otomate.png"; // Path to the Otomate logo image

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "AIESEC Dev",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB"],
    image: aiesecLogo, // Added the image path for AIESEC Dev
  },
  {
    year: "2023 - Present",
    role: "Operations",
    company: "Otomate",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "MySQL"],
    image: otomateLogo, // Added the image path for Otomate
  },
];


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
    link: "https://github.com/HirushaDheemantha/E-commerce-PHP-V1", // Replace with your actual link
  },
  {
    title: "Stock Management System",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    link: "https://github.com/HirushaDheemantha/Stock-management-system-PHP", // Replace with your actual link
  },
  {
    title: "Animated Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and animations.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    link: "https://github.com/HirushaDheemantha/React-web-02", // Replace with your actual link
  },
  {
    title: "Blog App",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    link: "https://github.com/HirushaDheemantha/React/tree/a7d8737d0028225a1a427eecdd5ad217c595ad92/dojo-blog", // Replace with your actual link
  },
];


export const CONTACT = {
  address: "Rajagiriya,Sri Lanka ",
  phoneNo: "+94 77184 0670 ",
  email: "me@example.com",
};
