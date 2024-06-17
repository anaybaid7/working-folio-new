/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anay Baid",
  title: "Hey! I'm Anay Baid",
  subTitle: emoji(
    "I am deeply passionate about software development and continuously strive to stay up-to-date with the latest advancements in technology."
  ),
  resumeLink:
    "https://anay-baid-resume.tiiny.site/", // Set to empty to hide the button, and make this updated!!/
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anaybaid7",
  linkedin: "https://www.linkedin.com/in/anaybaid/",
  gmail: "anaybaid7@gmail.com",
  gitlab: "https://gitlab.com/anaybaid",
  stackoverflow: "https://stackoverflow.com/users/14184424/anay-baid",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Overview",
  subTitle: "Hi there, I'm Anay Baid, currently pursuing my degree in Computer Science at the UWaterloo",
  skills: [
    emoji(
      "⚡ Throughout my academic journey, I've been deeply immersed in the realms of data engineering and software development, continually expanding my skill set and knowledge base"
    ),
    emoji("⚡ During my internships, I've had the privilege of engaging in hands-on projects that have allowed me to sharpen my abilities in crucial areas such as data analysis and system optimization"),
    emoji(
      "⚡ I'm genuinely eager to leverage my experiences and capabilities to make meaningful contributions to your projects. Let's connect and discuss how I can be an asset to your team!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Waterloo",
      logo: require("./assets/images/uwaterloo.png"),
      subHeader: "Bachelor of Mathematics & Computer Science",
      duration: "September 2022 - April 2027",
      desc: "Minoring in Combinatorics and Optimisation",
      descBullets: [
        "Delivered academic support for CS 135 (Designing Functional Programs), addressing technical queries and coordinating tutoring sessions.",
        "Successfully managed the mentorship program for 150+ participants, coordinated 10+ events, led 3 DEI Community Events with 500+ participants, and distributed tech resources to enhance proficiency for 200+ under-represented individuals."
      ]
    }
  ] // This bracket was missing
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineering & Analysis",
      company: "Cineplex Entertainment LP",
      companylogo: require("./assets/images/cineplex.ico"),
      date: "January 2024 – April 2024",
      desc: "Part of the BI & Analytics, Azure DevOps, Data Analytics & Engineering Teams.",
      descBullets: [
        "Performed comprehensive data quality assessments across multiple datasets, resolving over 200 anomalies through rigorous testing and collaborative problem-solving.",
        "Validated of 10TB data to Azure, ensuring 99% data integrity and automated data reporting workflows, reducing report generation time by 70%.",
        "Improved show-time optimization ML algorithm by 15% through model evaluations, fine-tuning, and data validation.",
        "Implemented data governance protocols via a coding management project implementing SQL Schema Compare and Git tools through Python shell scripting, achieving 100% compliance with industry standards.",
        "Developed custom data cube connections on the Cineplex Homepage Dashboard Power BI report, ran multiple testing scripts, & enhanced box office records displays via comprehensive data incident validation & tracking."
      ]
    },
    {
      role: "Software Administration Intern",
      company: "Alterra Mountain Company",
      companylogo: require("./assets/images/alterra.ico"),
      date: "June 2023 – September 2023",
      desc: "Implemented a Management System with Cenium 9, for a 20% reduction in check-in time via data streamlining, Enhanced the existing database scalability to handle 10,000+ guest records, achieving a 30% faster data retrieval in Tapechart via optimized indexing and independently utilized Power BI for generating monthly reports, identifying upsell opportunities and driving a 15% revenue increase through data insights."
    },
    {
      role: "Frontend Developer & Data Science Intern",
      company: "Nytia Health",
      companylogo: require("./assets/images/nytia.ico"),
      date: "May 2023 – June 2023",
      desc: "Integrated libraries TensorFlow & Scikit-learn into Android watches, optimized data processing & efficiency by 20%, Leveraged Python and R with the Google BigQuery API, achieving a data processing rate of 1.5 Mbps, Developed real-time data visualization dashboards from A/B testing using Tableau, streamlining decision-making processes by 30%."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Here are some notable Hackathons / Side Projects in which I had been involved in development",
  projects: [
    {
      image: require("./assets/images/mern.png"),
      projectName: "MERN Store Gold - E-commerce Site",
      projectDesc: "An ecommerce store built with MERN stack, and utilizes third party APIs.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/anaybaid7/mern-project-ecommerce"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pashu.png"),
      projectName: "HackWestern - Best Gaming Hack (Pashu)",
      projectDesc: "The game is built with Unity game engine, and runs on WebGL, utilizing the power of Wix Velo.",
      footerLink: [
        {
          name: "View Hackathon Submission",
          url: "https://devpost.com/software/animal-shelter-fubsrh"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "My Achievements and Certifications",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Here is some of my work on my technical learnings on topics I have been most interested in, a few involving Aviation as well.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@anaybaid7/revolutionizing-zero-shot-learning-with-nlp-and-cv-a-breakthrough-in-artificial-intelligence-ai-e2a6dfa1b6e8",
      title: "Revolutionizing Zero-Shot Learning with NLP and CV: A Breakthrough in Artificial Intelligence (AI)",
      description:
        "In the ever-evolving landscape of artificial intelligence, researchers and developers are constantly pushing the boundaries of what machines can achieve. One remarkable breakthrough that has garnered attention recently is the fusion of Natural Language Processing (NLP) and Computer Vision (CV) to achieve Zero-Shot Learning with state-of-the-art (SOTA) performance."
    },
    {
      url: "https://medium.com/@anaybaid7/chaos-in-the-cockpit-air-france-flight-447-b94358c2ac25",
      title: "Chaos in the Cockpit: Air France Flight 447",
      description:
        "Aeroplanes are modern and sophisticated instruments; they are a wild mix of complex electrical circuits and seemingly endless knobs and switches, that perform the wonder of transporting us over very long distances in an “instant”. With significant advancements in modern technology, tracking them becomes an extremely routine task. The very idea of an aircraft going missing in the 21st Century is bewildering and unthinkable. But this is precisely what happened to an Airbus A330, flying in the middle of the Atlantic in the middle of the night."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Coming Soon!"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("YouTube - Music and Leetcode 🎥"),
  subtitle: "This is a space where I discuss solutions to popular leetcode problems and share my work in percussion music",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.youtube.com/channel/UCJ7bgAzmTFFWvLlbV7Oiojw"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "View my Resume here!",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Would love to discuss projects and meet new people! Feel free to reach out to me and I will get back to you!", 
  number: "+226 - 899 - 8462",
  email_address: "anay.baid@uwaterloo.ca"
};

// Twitter Section

const twitterDetails = {
  userName: "AnayBaid", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
