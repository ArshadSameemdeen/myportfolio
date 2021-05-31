import emoji from 'react-easy-emoji';

import ifs from './assets/img/icons/common/IFS_logo_2021.png'
import appsec from './assets/img/icons/common/apsec.jpg'
import ThinkBig from './assets/img/icons/common/iconTB.png'

export const greetings = {
    "name": "Arshad Sameemdeen",
    "title": "Hi all, I'm Arshad",
    "description": "A passionate Fronnt-end Developer and a UI/UX Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
    "resumeLink": "https://cv.arshad.ga"
}

export const openSource = {
  githubUserName: 'ArshadSameemdeen',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/arshad.sameemdeen/",
    "instagram": "https://www.instagram.com/arshad_crazzz",
    "twitter": "https://twitter.com/",
    "github": "https://github.com/ArshadSameemdeen",
    "linkedin": "https://www.linkedin.com/in/mohamed-arshad-sameemdeen-93647a167/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'ENTHUSIASTIC FRONT-END DEVELOPER & A UI/UX DESIGNER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
      ),
      emoji('⚡ Design attractive and professional Mobile and Web application'),
      emoji(
        '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'flutter',
        fontAwesomeClassname: 'logos:flutter',
      },
      {
        skillName: 'swift',
        fontAwesomeClassname: 'vscode-icons:file-type-swift',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'aws',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'University of Westminster',
      subHeader: 'BEng(Hons) in Software Engineering',
      duration: 'September 2017 - April 2021',
      desc: 'A undergraduate degree which was a 4 year long studies including 1 year of internship',
      descBullets: [
        'Published a Machine Learning Research Paper in IEEE affliated conference',
        'Completed SE modules with distiction',
      ],
    },
    
]

export const experience = [
  {
    role: 'Senior Front-end Developer',
    company: 'ThinkBig',
    companylogo: ThinkBig,
    date: 'April 2021 – Present',
    desc:
      'Think Big is a startup company which provides Software services such as Designing & Developing Web and Mobile Applications.',
    descBullets: [
      'Developed AppSec Acadamy Website.',
      'Developed continus.io Website.',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Appsec Academy',
    companylogo: appsec,
    date: '2020 – 2021',
    desc:
      'AppSec Academy is a company compromising of teaching Software Engineering students and providing SAS services.',
  },
  {
    role: 'Software Engineer',
    company: 'IFS',
    companylogo: ifs,
    date: 'June 2019 – July 2020',
    desc:
      'IFS is a multinational enterprise software company headquarted at Sweden. The company develops and delivers enterprise softwares for customers around the world.',
  },
]

export const projects = [
  {
    name: "Explorayl",
    desc: "A treasure Hunting Mobile Application for travelers in the city of London",
  },
  {
    name: "Think Big",
    desc: "The official company website of the Software Engineering company ThinkBig",
    link: {
      name: "URL",
      url: "https://itsthinkbig.com/"
    }
  },
  {
    name: "Morvel",
    desc: "A Mobiel Application which recommends movies and novels for the users, using the user data stored in the database",
  },
  {
    name: "Github Most Starred Repo",
    desc: "A website which fetches data for the github api, and displays the most starred github reposotories in the past 30 days",
    link: {
      name: "URL",
      url: "https://github.com/ArshadSameemdeen/most-starred-github-repo"
    }
  }
]