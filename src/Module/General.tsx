import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'JOIN HORIZON HACKS!',
  Typed_effect: ['36 hours of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join Horizon Hacks from October 27th-29th, 2023 with over 300 students from across Canada for 36 hours of creation, innovation, & fun.',
  JUDGES_FORM_LINK:
    'Judge-form-link',
  HACKERS_REGISTRATION_FORM_LINK:
    'Hacker-form-link'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/utmhacks/',
  discord: 'https://discord.com/invite/test',
  linkedin: 'https://www.linkedin.com/company/utmhacks/',
  twitter: 'https://twitter.com/utmhacks',
  devpost: 'https://horizon-hacks-000000.devpost.com/',
  email: 'mailto:utmhack.init@gmail.com',
  mail: 'utmhack.init@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Horizon Hacks?',
  LONG_DESCRIPTION:
    'Horizon Hacks is a 36 hour long hackathon that will be held between October 27th-29th. We call for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part and win awesome prizes while collaborating with other developers. Throughout the weekend, hackers at Horizon Hacks will have unique opportunities to learn from each other and take a hands-on approach to trying new technologies. We are determined to have an all-inclusive and diverse group of students attending.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'Join-as-volunteer-link'
  },
  JOIN_TEAM: {
    required: true,
    src: 'Join-team-link'
  },
  Privacy_policy: {
    required: true,
    src: 'privacy-policy-link'
  },
  Terms_of_use: {
    required: true,
    src: 'terms-of-use-link'
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy/paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less than 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'First Overall',
      content:
        'Awarded to the project that is ranked the highest overall by judges'
    },
    {
      icon: <i className="second fas fa-4x fa-medal"></i>,
      type: 'Second Overall',
      content:
          'Awarded to the project that is ranked the second highest overall by judges'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Third Overall',
      content:
        'Awarded to the project that is ranked the third highest overall by judges'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Quad',
      content:
        'Awarded to the highest-ranked project made by a team of exactly four hackers. We encourage you to participate with a team!'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Best Beginner',
      content: 'Awarded to the highest-ranked project made by a team consisting of at least 75% first time hackers'
    },
    {
      icon: <i className="fifth fa-3x fas fa-book-open"></i>,
      type: 'Best UI/UX',
      content: 'Awarded to the project with most creative, intuitive, and appealing designs'
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: 'Best Use of Sponsor API',
      content: 'Awarded to the project highest ranked by sponsor judges based on the best use of their API'
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'Most Loved',
      content: 'Awarded to the project with the most votes from other participating hackers'
    },
    {
      icon: <i className="fas fa-user-friends eighth fa-3x "></i>,
      type: 'More Prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

/** Instructions
 * Insert only 3 or less than 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: 'https://github.com/Limbo-Hacks/Hackathon-website-template',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Erika',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc, alt: "cfc"}, {src: sublime, alt: "sublime"}, {src: echoAR, alt: "echoAR"}], //Array 1
  [{src: taskade, alt: "taskade"}, {src: Replit, alt: "Replit"}, {src: qoom, alt: "qoom"}], //Array 2
  [{src: interviewC, alt: "interviewC"}, {src: pass, alt: "pass"}, {src: glimpse, alt: "glimpse"}], //Array 3
  [{src: egg, alt: "egg"}, {src: ll, alt: "11"}, {src: ACF, alt: "ACF"}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'Limbo Hacks is open to all undergraduate, high school students and middle school students from all schools.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (rehan@limbohacks.tech or hello@limbohacks.tech) we would happy to help you.'
      },
      {
        label: 'Can i volunteer?',
        content:
          'Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! Participants will recieveing Limbo Hacks swag!.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions
};
