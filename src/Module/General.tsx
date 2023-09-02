import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import beanKing from './Assets/team/beanKing.png';
import dardeDiscoe from './Assets/team/dardeDiscoe.png';
import noName from './Assets/team/noName.png';
import panda from './Assets/team/panda.png';
import geren from './Assets/team/geren.png';
import empty from './Assets/team/empty.png';

const TOP_SECTION = {
  TITLE: {FIRST: 'Hack The Horizon', SECOND: 'With Us!'},
  Typed_effect: ['36 hours of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join Hack The Horizon from October 27th-29th, 2023 with over 300 students from across Canada for 36 hours of creation, innovation, & fun.',
  HACKERS_REGISTRATION_FORM_LINK: 'Hacker-form-link'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/utmhacks/',
  discord: 'https://discord.gg/54pKHSGpmk',
  linkedin: 'https://www.linkedin.com/company/utmhacks/',
  twitter: 'https://twitter.com/utmhacks',
  devpost: 'https://hack-the-horizon-000000.devpost.com/',
  email: 'mailto:utmhack.init@gmail.com',
  mail: 'utmhack.init@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Hack The Horizon?',
  LONG_DESCRIPTION:
    'Hack The Horizon is a 36 hour long hackathon that will be held between October 27th-29th. We call for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part and win awesome prizes while collaborating with other developers. Throughout the weekend, hackers at Hack The Horizon will have unique opportunities to learn from each other and take a hands-on approach to trying new technologies. We are determined to have an all-inclusive and diverse group of students attending.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSeAEEbISgakTEtDU5gKu3lMcxe5KpMQWJEqbObSkrgnd3mLeQ/viewform'
  },
  JUDGES_FORM_LINK: {
    required: true,
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSeAEEbISgakTEtDU5gKu3lMcxe5KpMQWJEqbObSkrgnd3mLeQ/viewform'
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
      iconClass: 'gold fas fa-4x fa-trophy',
      type: 'First Overall',
      content:
        'Awarded to the project that is ranked the highest overall by judges'
    },
    {
      iconClass: 'silver fas fa-4x fa-trophy',
      type: 'Second Overall',
      content:
        'Awarded to the project that is ranked the second highest overall by judges'
    },
    {
      iconClass: 'bronze fas fa-4x fa-trophy',
      type: 'Third Overall',
      content:
        'Awarded to the project that is ranked the third highest overall by judges'
    }
  ],
  [
    //Array 2
    {
      iconClass: 'blue fas fa-4x fa-users',
      type: 'Best Quad',
      content:
        'Awarded to the highest-ranked project made by a team of exactly four hackers. We encourage you to participate with a team!'
    },
    {
      iconClass: 'green fas fa-4x fa-leaf',
      type: 'Best Beginner',
      content:
        'Awarded to the highest-ranked project made by a team consisting of at least 75% first time hackers'
    },
    {
      iconClass: 'purple fa-4x fas fa-eye',
      type: 'Best UI/UX',
      content:
        'Awarded to the project with most creative, intuitive, and appealing designs'
    }
  ],
  [
    //Array 3
    {
      iconClass: 'gold fas fa-4x fa-certificate',
      type: 'Best Use of Sponsor API',
      content:
        'Awarded to the project highest ranked by sponsor judges based on the best use of their API'
    },
    {
      iconClass: 'red fas fa-4x fa-heart',
      type: 'Most Loved',
      content:
        'Awarded to the project with the most votes from other participating hackers'
    },
    {
      iconClass: 'silver fas fa-4x fa-plus',
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
      name: 'Bean King',
      role: 'Organizer',
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/company/utmhacks/',
      img: beanKing
    },
    {
      name: 'Rajveer',
      role: 'Organizer',
      github: 'https://github.com/RajveerSinghAnand',
      linkedin: 'https://www.linkedin.com/company/utmhacks/',
      img: dardeDiscoe
    },
    {
      name: 'Franco',
      role: 'Organizer',
      github: 'https://github.com/Franco-Aparicio',
      linkedin: 'https://www.linkedin.com/in/franco-aparicio1103/',
      img: noName
    }
  ],
  [
    //Array 2
    {
      name: 'Alisha',
      role: 'Organizer',
      github: 'https://github.com/alishahasan',
      linkedin: 'https://www.linkedin.com/in/alishahasan219/',
      img: panda
    },
    {
      name: 'Eren',
      role: 'Organizer',
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/company/utmhacks/',
      img: geren
    }
  ]
];

// const JudgesInfo = [
//   [
//     //Array 1
//     {
//       name: 'temp',
//       role: 'Judge',
//       github: '',
//       linkedin: '',
//       img: empty
//     },
//     {
//       name: 'temp',
//       role: 'Judge',
//       github: '',
//       linkedin: '',
//       img: empty
//     },
//     {
//       name: 'temp',
//       role: 'Judge',
//       github: '',
//       linkedin: '',
//       img: empty
//     }
//   ],
//   [
//     //Array 2
//     {
//       name: 'temp',
//       role: 'Judge',
//       github: '',
//       linkedin: '',
//       img: empty
//     },
//     {
//       name: 'temp',
//       role: 'Judge',
//       github: '',
//       linkedin: '',
//       img: empty
//     }
//   ]
// ];
const JudgesInfo = [
  [
    {
      name: 'TBD',
      role: 'Judge',
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/company/utmhacks/',
      img: empty
    }
  ]
];

/** Instructions:
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [
    {src: empty, alt: 'empty'},
    {src: empty, alt: 'empty'},
    {src: empty, alt: 'empty'}
  ]
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
          'A hackathon is an event typically lasting 12 - 48 hours where "hackers" collaborate on creating a functioning software and/or hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'Hack The Horizon is open to all undergraduate students aged 18 and above! We welcome all skill levels, from beginners to experts.'
      },
      {
        label: 'I am a first-time hacker, what should I do?',
        content:
          "No worries! We welcome first-time hackers and we'd love to start your hacking journey with our hackathon. We have some awesome workshops and events which will help you get started with hackathons and hacking in general."
      },
      {
        label: 'Do I need a team?',
        content:
          "Projects must be submitted by teams with 2 - 4 members. If you don't have a team beforehand, there'll be plenty of opportunities for you to meet hackers and form a team during the event or even before over Discord!"
      }
    ],
    [
      {
        label: 'How do I register for Hack The Horizon?',
        content:
          'Just click on the buttons above to fill out a quick application and join our Discord! Submit your application as early as possible to save your spot!'
      },
      {
        label: 'Will there be swag?',
        content:
          'Yes! All participants will recieve Hack The Horizon swag by the end of the event.'
      },
      {
        label: 'Can I volunteer?',
        content:
          'Yes, we are actively looking for volunteers. Please submit an application (found in team/footer section). We would be glad to have you!'
      },
      {
        label: 'What if I have more questions?',
        content:
          'Reach us directly through Discord through the button above! We would be happy to help you.'
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
