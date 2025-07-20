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
      title: 'Second story title',
      lead: 'lorem lead text under first story',
    },
    story3: {
      title: 'Third story title',
      lead: 'lorem lead text under first story',
    },
    story4: {
      title: '4th story title',
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
  footer: {
    copywrite: 'Asarsaza @ 2024',
    links: {
      services: 'Services',
      blog: 'Blog',
      partners: 'Our partners',
    },
    newsletter: {
      label: 'Stay in the know',
      placeholder: 'Email Address',
      cta: 'Submit',
      description:
        'By signing up I want to hear about new updates and masterpieces and agree with the data protection policy of Asarsazan.',
    },
    columns: {
      col1: {
        label: 'Quick access',
        items: {
          home: 'Home',
          aboutus: 'About Us',
          contactus: 'Contact Us',
        },
      },
      col2: {
        label: 'Contact Us',
        items: {
          phone: '07644458129',
          line1:
            'Kish, Boulevard Morvarid, Shahrastan Complex, First Floor, No. 76',
          line2: 'Tehran Office: Qeytarieh, Ketabi Square, No. 1',
        },
      },
    },
  },
}

export default { ...en } as const
