// import {
//     // Blogging,
//     CompanyLogo1,
//     CompanyLogo2,
//     CompanyLogo3,
//     CompanyLogo4,
//     Coursera,
//     DiamondLgBlue,
//     DiamondLgGreen,
//     DiamondLgOrange,
//     DiamondLgPink,
//     DiamondLgYellow,
//     Gaming,
//     Google,
//     Reading,
//     SkillCss,
//     SkillFigma,
//     SkillHtml5,
//     SkillPhotoshop,
//     SkillSketch,
//     SkillTrello,
//     SkillWireframe,
//     SkillXd,
//     Travelling,
//     Udemy,
//   } from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "May 2022",
      endDate: "",
      position: "Technical Project Manager",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        // logo: CompanyLogo1,
        name: "Knowledge Broadband SA",
        info: "Software Company in Patras, Greece",
      },
      description:
        [
          "Serve as the primary communication bridge between customers and internal teams, ensuring alignment with project goals and customer expectations.",
          "Facilitate cross-functional collaboration, coordinating efforts between Business Analysts, Developers, Testers, and Designers to drive efficient project execution.",
          "Act as Scrum Master for an Agile Product Team, leading daily stand-ups, sprint planning, and retrospectives to ensure continuous delivery and process improvement.",
          " Ensure project milestones are met on time, within scope, and budget, while addressing any challenges that arise during the development cycle.",
        ],
      links: [
        {
          label: "Knowledge SA",
          url: "https://www.knowledge.gr/",
        },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "Jan 2022",
      endDate: "May 2022",
      position: "Full Stack Developer",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        // logo: CompanyLogo2,
        name: "Knowledge Broadband SA",
        info: "Software Company in Patras, Greece",
      },
      description:
        [
          "Engaged in full-stack development, building responsive and scalable web applications using ReactJS for frontend, NodeJS for backend services, and Grails for enhanced backend frameworks.",
          "Contributed to both design and implementation phases, optimizing performance and ensuring code quality through continuous testing and iteration.",
        ],

      links: [
        {
          label: "Knowledge SA",
          url: "https://www.knowledge.gr/",
        },
      ],
    },
    {
      id: "prof_exp_3",
      startDate: "Mar 2019",
      endDate: "Jul 2021",
      position: "Database Engineer on Behalf of Treelogics GBMH",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        // logo: CompanyLogo3,
        name: "Santander Bank",
        info: "Spanish Bank HQ in Moenchengladbach, Germany",
      },
      description:
        [
          "Contributed to a large-scale Data Warehouse project, developing and optimizing SQL, PL/SQL, and Oracle components to support robust data processing and reporting functions.",
          "Played a key role in maintaining production applications by performing detailed testing, identifying bugs, and implementing efficient fixes to ensure system reliability and performance.",
          "Collaborated with cross-functional teams to improve data accuracy, streamline ETL processes, and support business intelligence initiatives.",
        ],

      links: [
        {
          label: "Santander Bank Moenchengladbach",
          url: "https://www.santander.de/privatkunden/",
        },
      ],
    },
    {
      id: "prof_exp_4",
      startDate: "Mar 2022",
      endDate: "Oct 2018",
      position: "Software Engineer",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        // logo: CompanyLogo4,
        name: "Treelogics Software GMBH",
        info: "Software company in Bonn, Germany",
      },
      description:
        [
          "Specialized in Oracle technologies, including Oracle SQL, PL/SQL, Oracle Apex, and Oracle Data Warehouse, delivering tailored solutions across various projects.",
          "Served as a contractor for multiple companies, developing and implementing software systems based on client-specific requirements and business needs.",
          "Led the design, development, and deployment of data-driven applications, ensuring scalability, performance, and alignment with client goals.",
          "Collaborated with cross-functional teams to integrate custom solutions into existing infrastructures, optimizing processes and improving operational efficiency.",
        ],

      links: [
        {
          label: "Treelogics Software GMBH",
          url: "http://www.treelogics.de/",
        },
      ],
    },
    {
      id: "prof_exp_4",
      startDate: "Nov 2016",
      endDate: "Jul 2017",
      position: "Intern Software Developer",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        // logo: CompanyLogo4,
        name: "Treelogics Software GMBH",
        info: "Software company in Bonn, Germany",
      },
      description:
        [
          "Assisted in developing and implementing software solutions in alignment with client requirements, contributing to full development cycles.",
          "onducted thorough testing and debugging of software applications, ensuring optimal functionality and reliability prior to production rollout.",
          "Collaborated with senior developers, gaining hands-on experience in software development best practices and methodologies.",
        ],

      links: [
        {
          label: "Treelogics Software GMBH",
          url: "http://www.treelogics.de/",
        },
      ],
    },
  ],
  educationalExperiences: [
    {
      id: "edu_1",
      // icon: DiamondLgBlue,
      course: "Computer Engineering & Informatics Department (CEID)",
      institution:
        "University of Patras (UoPA)",
      degree: "Intergrated Master's",
      startDate: "2011",
      endDate: "2017 ",
      thesis: "Data Mining"
    },
  ],
  skills: [
    {
      id: "skill_1",
      // icon: SkillFigma,
      name: "SQL",
      description: "Structured Query Language",
    },
    {
      id: "skill_14",
      // icon: SkillPhotoshop,
      name: "PL/SQL",
      description: "Programming Language with SQL",
    },
    {
      id: "skill_2",
      // icon: SkillHtml5,
      name: "HTML5",
      description: "Hypertext Markup",
    },
    {
      id: "skill_3",
      // icon: SkillCss,
      name: "CSS",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_4",
      // icon: SkillPhotoshop,
      name: "Javascript, React",
      description: "Dynamic Interactivity & Functionality",
    },
    {
      id: "skill_5",
      // icon: SkillSketch,
      name: "Node JS",
      description: "Backend Scalability & Real-time Processing",
    },
    {
      id: "skill_6",
      // icon: SkillSketch,
      name: "XML",
      description: "Structured Data & Information Exchange",
    },
    {
      id: "skill_7",
      // icon: SkillTrello,
      name: "Trello, Jira, Azure DevOps",
      description: "Project Management Knowledge",
    },
    // {
    //   id: "skill_7",
    //   // icon: SkillWireframe,
    //   name: "Wireframing",
    //   description: "Creating wireframes prior to design",
    // },
    {
      id: "skill_8",
      // icon: SkillXd,
      name: "Confluence",
      description: "Collaborative Documentation & Knowledge Management",
    },
    {
      id: "skill_9",
      // icon: SkillXd,
      name: "Jenkins",
      description: "CI/CD",
    },
    {
      id: "skill_10",
      // icon: SkillXd,
      name: "Oracle APEX",
      description: "Rapid Web Application Development & Database Management",
    }, 
    {
      id: "skill_11",
      // icon: SkillXd,
      name: "Wordpress, Joomla",
      description: "Content Management System (CMS)",
    },
    {
      id: "skill_12",
      // icon: SkillXd,
      name: "Microsoft Azure",
      description: "Cloud Computing & Sclabale Infrastructure Services",
    },
    {
      id: "skill_13",
      // icon: SkillXd,
      name: "MS Project, Project Libre",
      description: "Project Planning & Resource Management",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      // icon: Coursera,
      provider: "Scrum",
      course: "Project Scrum Master I (PSM I)",
      startDate: "Dec 2022",
      endDate: "Jan 2023",
    },
    {
      id: "cert_award_2",
      // icon: Google,
      provider: "Udemy",
      course: "Become a Product Manager",
      startDate: "Nov 2022",
      endDate: "Dec 2022",
    },
    {
      id: "cert_award_3",
      // icon: Udemy,
      provider: "Udemy",
      course: "Successful Development of Oracle Data Warehouse",
      startDate: "Jul 2021",
      endDate: "Jul 2021",
    },
    {
      id: "cert_award_3",
      // icon: Udemy,
      provider: "UXQB",
      course: "Usability & User Experience (CPUX-F)",
      startDate: "May 2020",
      endDate: "May 2020",
    },
    {
      id: "cert_award_3",
      // icon: Udemy,
      provider: "DOAG",
      course: "Oracle Connect",
      startDate: "May 2019",
      endDate: "May 2019",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      // icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_2",
      // icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_3",
      // icon: Travelling,
      name: "Travelling",
    },
    {
      id: "hob_4",
      // icon: Blogging,
      name: "Blogging",
    },
  ],
};

export default DATA;