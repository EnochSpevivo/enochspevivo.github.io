import {
    nbcLogo,
    linkedinLogo,
    verysLogo,
    makersquareLogo,
    rechargeLogo,
    gloLogo,
    flsLogo,
} from '../images/work-logos/work-logos';

import WorkCardInfo from '../interfaces/WorkCardInfo';

export default [
    {
        company: 'LinkedIn',
        title: 'Senior Web Developer (Remote)',
        stack: ['Ember.js', 'Tealium IQ'],
        logo: linkedinLogo,
        blurb: 'Worked on progressive web application. Created internal web app QA tool. Created custom solutions for third party integrations.',
    } as WorkCardInfo,
    {
        company: 'Verys',
        title: 'Senior Software Engineer (Remote)',
        stack: ['React.js', 'Redux.js'],
        blurb: 'Worked on the engineering team that developed the new ACI SureStep™ Sketch web app.',
        logo: verysLogo,
    } as WorkCardInfo,
    {
        company: 'NBC News',
        title: 'Senior JavaScript Engineer (Remote)',
        stack: ['Adobe Launch (JavaScript)', 'Flask (Python)', 'Jinja', 'Cypress.io'],
        logo: nbcLogo,
        blurb: 'Developed Python tool for Adobe Launch tag management. Developed custom integrations for third party JS tags. Created comprehensive E2E test coverage.',
    } as WorkCardInfo,
    {
        company: 'FLS International',
        title: 'Lead Front End Developer (Remote)',
        stack: ['Gatsby.js', 'Node.js', 'Netlify CMS'],
        logo: flsLogo,
        blurb: 'Designed, implemented, and deployed Jamstack site. Created and deployed Node-backed web apps for customer intake and language testing.',
    } as WorkCardInfo,
    {
        company: 'ReCharge Payments',
        title: 'Front End Developer (remote)',
        stack: ['Flask (Python)', 'Jinja', 'Shopify API (JavaScript)'],
        logo: rechargeLogo,
        blurb: 'Ate ass and skated fast.',
    } as WorkCardInfo,
    {
        company: 'Glo (formerly YogaGlo)',
        title: 'Front End Developer',
        stack: ['Ember.js', 'Node', 'Postgres', 'AWS (S3 & CloudFormation)'],
        logo: gloLogo,
    } as WorkCardInfo,
    {
        company: 'MakerSquare',
        title: 'Web Development Instructor',
        stack: ['React.js', 'Node.js', 'Firebase'],
        logo: makersquareLogo,
    } as WorkCardInfo,
];
