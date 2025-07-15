import type { I18nDictionary } from './fa'

export default {
  primaryHero: {
    title: 'AsarSazan',
    description: 'Creating lasting works',
  },
  secondaryHero: {
    title: 'AsarSazan',
    lead: 'lead text',
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
} as const satisfies I18nDictionary
