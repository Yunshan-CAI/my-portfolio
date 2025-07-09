interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Sherlock’s Literary London',
    description: `An immersive digital experience that brings the enigmatic world of Sherlock Holmes alive within the streets of London.`,
    imgSrc: '/static/images/sherlock_title.png',
    href: '/blog/sherlock-literary-london',
  },
  {
    title: 'Chinese Tuanshan Sketchpad',
    description: `A co-creative digital platform that enables users to design traditional Chinese Tuanshan fans through AI-assisted generation of paintings, calligraphy, and seals.`,
    imgSrc: '/static/images/tuanshan.png',
    href: '/blog/chinese-tuanshan-sketchpad',
  },
  {
    title: 'Game of Goose',
    description: `A large-scale interactive board game implementation using Arduino, LED strips, LDR sensors, and sound effects to create an immersive physical gaming experience.`,
    imgSrc: '/static/images/goose.png',
    href: '/blog/game-of-goose-arduino',
  },
  {
    title: 'Fluid Orlando: Beyond Binary',
    description: `An artificial creature exploring gender fluidity through voice synthesis and behavioral patterns.`,
    imgSrc: '/static/images/creature.png',
    href: '/blog/fluid-orlando-beyond-binary',
  },
  {
    title: 'Cat Attachment Style Study',
    description: `An empirical study investigating the relationship between feline personality traits and attachment styles toward human caregivers.`,
    imgSrc: '/static/images/cat.png',
    href: '/blog/cat-personality-attachment-study',
  },
  {
    title: 'Echoes of Decision: Mantis Mating Simulation',
    description: `An installation that transforms mantis mating behavior into an immersive user experience.`,
    imgSrc: '/static/images/mantis.png',
    href: '/blog/echoes-of-decision-mantis',
  },
  {
    title:
      'Supervised by the Machine: Evaluating AI as Supervisor Through a Nail Biting Detection Study',
    description: `This thesis investigates AI's capability as academic supervisor evaluated through the development of computer vision models for nail biting detection.`,
    imgSrc: '/static/images/supervisor.png',
    href: '/blog/thesis',
  },
]

export default projectsData
