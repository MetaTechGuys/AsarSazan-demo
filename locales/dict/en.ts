import type { I18nDictionary } from './fa'

const en: I18nDictionary = {
  primaryHero: {
    title: 'AsarSazan',
    description: 'Creating lasting works',
  },
  secondaryHero: {
    title: 'AsarSazan',
    lead: 'lead text',
    description: 'Creating lasting works',
  },
  lastHero: {
    title: 'AsarSazan2',
    description: 'Creating lasting works',
  },
  hello: 'Hello',
  stories: {
    story1: {
      title: 'a title on second story',
      lead: 'lorem lead text under 2nd story',
    },
    story2: {
      title: 'First story title',
      lead: 'lorem lead text under first story',
    },
  },
  slides: {
    slide1: {
      title: '',
      lead: '',
    },
    slide2: {
      title: '',
      lead: '',
    },
    slide3: {
      title: '',
      lead: '',
    },
  },
  projects: {
    project1: { title: '' },
    project2: { title: '' },
    project3: { title: '' },
    project4: { title: '' },
    project5: { title: '' },
    project6: { title: '' },
  },
  testimonial: {
    title: '',
    marashi: {
      name: '',
      message: '',
    },
    mohebi: {
      name: '',
      message: '',
    },
    rajabi: {
      name: '',
      message: '',
    },
    zahedi: {
      name: '',
      message: '',
    },
  },
}

export default { ...en } as const
