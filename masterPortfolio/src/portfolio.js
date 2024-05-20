/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sankar's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sankara Subramanian ",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Sankara Subramanian",
  logo_name: "SS",
  nickname: "",
  subTitle:
  "Passionate and dedicated fresher with a keen interest in both web and software development. Proficient in various programming languages and eager to apply my skills to create innovative solutions. Committed to continuous learning and growth in the dynamic field of technology. Excited to contribute my enthusiasm and fresh perspective to projects as a web and software developer",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/srisankarr?tab=repositories",
  githubProfile: "https://github.com/srisankarr",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"
  {
    name: "Gmail",
    link: "mailto:sankarasubramanian3012@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }, 
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sankarmd/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/srisankarr",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
 
  {
    name: "YouTube",
    link: "https://youtube.com/@sankarasubramaniand?si=aFOUfWnNMVkbt_eC",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
];

const skills = {
  data: [
   
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and engaging web interfaces using HTML, CSS, Bootstrap, and React for intuitive user experiences.",
        "⚡ Leveraging JavaScript, npm, and Node.js to develop dynamic and interactive web applications.",
        "⚡ Designing and implementing efficient server-side logic with Node.js and Express.js to handle client requests and manage data storage using PostgreSQL.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
       
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
       
        {
          skillName: "Flutter",
          imageSrc: "github.png",
          style: {
        
            color: "#02569B",
          },
        },
      ],
   
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Java",
      imageSrc: "java.png",
    },
    {
      siteName: "C",
      imageSrc: "clang.png",
    },
    {
      siteName: "Javascript",
      imageSrc: "javascript.png",
    },
    {
      siteName: "HTML",
      imageSrc: "html.png",
    },
    {
      siteName: "CSS",
      imageSrc: "css.png",
    },
    {
      siteName: "Bootstrap",
      imageSrc: "bootstrap.png",
    },
    {
      siteName: "Node Js",
      imageSrc: "node.png",
    },
    {
      siteName: "React js",
      imageSrc: "react.png",
    },
    {
      siteName: "NPM",
      imageSrc: "npm.png",
    },
    {
      siteName: "Postgres SQL",
      imageSrc: "postgres.png",
    },
    {
      siteName: "GitHub",
      imageSrc: "github.png",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sri Ramakrishna Mission Vidyalaya College of Arts and Science in Coimbatore",
      subtitle: "B.Sc Computer Science",
      logo_path: "colle.png",
      alt_name: "Sri Ramakrishna Mission Vidyalaya College of Arts and Science in Coimbatore",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have a solid understanding of core software engineering concepts such as Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Architecture, and Artificial Intelligence.",
        "⚡ Additionally, I have completed an intensive course in Full Stack Web Development, equipping me with skills in HTML, CSS, JavaScript, Bootstrap, React, Node.js, Express.js, and PostgreSQL.",
        "⚡  My final year project, 'Farm to Plate', clinched the top position in my class, showcasing my proficiency and commitment to delivering high-quality software solutions.",
      ],
      website_link: "https://srmvcas.edu.in/",
    },
  
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Web Development",
      subtitle: "- Dr.Angela",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-acae2e85-3a26-450d-8ff5-8daf158cc1d2/",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
    {
      title: "Java , C ,C++",
      subtitle: "",
      logo_path: "apollo.png",
      certificate_link:
        "https://drive.google.com/file/d/12P70DpfH79ESkQfgXvOpmTX_AC7WBHAp/view?usp=drivesdk",
      alt_name: "java",
      color_code: "#00000099",
    },
    {
      title: "Cloud Foundations",
      subtitle: "",
      logo_path: "greatlearning.png",
      certificate_link:
        "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/4695105/original/SANKARA_SUBRAMANIAN_D20240519-72-fbejkx.jpg",
      alt_name: "Greatlearning",
      color_code: "#0C9D5899",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
 
  description:
    "While I may not have traditional work experience, my journey in developing the Farm to Plate website has provided me with invaluable hands-on experience in Full Stack Web Development. Throughout this project, I learned the intricacies of HTML, CSS, JavaScript, React, Node.js, Express, and PostgreSQL. From designing the user interface to implementing database functionality, I gained a deep understanding of the entire development lifecycle. This project not only sharpened my technical skills but also taught me important lessons in project management, problem-solving, and teamwork. I am excited to leverage this experience and continue my growth in a professional environment.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          
        },
    
      ],
    },
  
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "As a passionate developer, I focus on creating projects that address real-world problems and provide practical solutions. Utilizing advanced tools and technologies, I ensure my projects are both innovative and functional. Many of my projects are deployed on GitHub, reflecting my commitment to continuous learning and contribution to the tech community.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sankar_img.png",
    description:
      "I'm excited to connect and collaborate on innovative projects. Whether you have a question, an opportunity, or just want to chat about tech, I'm eager to hear from you. Let's work together to make a positive impact. Looking forward to your message!",
  },
 
  addressSection: {
    title: "Address",
    subtitle: "Anthiyur,Erode,Tamil Nadu,India",
    locality: "Erode",
    country: "India",
    region: "Tamil Nadu",
    postalCode: "638501",
    streetAddress: "Anthiyur",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.bing.com/maps?osid=257b27ae-4ced-4c68-9f12-4d54bc8701be&cp=11.658388~77.510385&lvl=9.8993635&pi=0&v=2&sV=2&form=S00027",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
