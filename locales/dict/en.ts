import type { I18nDictionary } from './fa'

const en: I18nDictionary = {
  primaryHero: {
    title: 'AsarSazan',
    description: 'Creating lasting works',
  },
  secondaryHero: {
    title: 'Creating lasting works',
    lead: 'lead text',
    description:
      'Our goal is to create lasting works throughout our beloved Iran.',
  },
  lastHero: {
    title: 'AsarSazan2',
    description:
      'Our goal is to create lasting works throughout our beloved Iran.',
  },
  projectsHero: {
    header: 'Projects',
  },
  navigations: {
    home: {
      label: 'Home',
      title: 'Asar Sazan',
      description: 'Creating lasting works',
    },
    about: {
      label: 'About Us',
      title: '',
      description: '',
    },
    contacts: {
      label: 'Contact Us',
      title: '',
      description: '',
    },
    blogs: {
      label: 'Blogs',
      title: '',
      description: '',
    },
    partners: {
      label: 'Partners',
      title: '',
      description: '',
    },
    services: {
      label: 'Services',
      title: '',
      description: '',
    },
  },
  stories: {
    story1: {
      title: 'a title on second story',
      lead: 'lorem lead text under 2nd story',
    },
    story2: {
      title: 'Innovation',
      lead: 'Providing innovative solutions tailored to customer needs',
    },
    story3: {
      title: 'Adhering to principles',
      lead: 'Activity based on ethical principles, commitment, expertise and innovation',
    },
    story4: {
      title: 'Iranian architecture',
      lead: 'Loyalty and recognition to ancient traditional Iranian architecture',
    },
  },
  slides: {
    slide1: {
      title: 'Design',
      lead: 'Creating accurate and attractive designs for construction projects',
    },
    slide2: {
      title: 'Construction',
      lead: 'Implementing designs using quality materials and up-to-date technologies',
    },
    slide3: {
      title: 'Consulting',
      lead: 'Consulting in construction projects: choosing the right design, materials and technologies',
    },
  },
  projects: {
    zarafshan: {
      title: 'Zarafshan Office Building',
      text: '',
      place: 'Tehran',
    },
    eksir: { title: 'Soleh Eksir Kish', text: '', place: 'Kish' },
    sina: { title: 'Sina Residence', text: '', place: 'Kish' },
    vanush: { title: 'Vanush', text: '', place: '' },
    savadkoh: { title: 'Savadkoh', text: '', place: '' },
    sadaf: { title: 'Sadaf Kish', text: '', place: 'Kish' },
  },
  testimonial: {
    title: 'Testimonials',
    rajabi: {
      name: 'Mr. Amin Rajabi',
      message:
        'They are professional, and what stood out to me was their expertise and experience in this field.',
    },
    mohebi: {
      name: 'Mr. Alireza Mohebi',
      message: `One of the company's distinguishing features was punctuality and correct scheduling.`,
    },
    marashi: {
      name: 'Mr. Mehdi Marashi',
      message:
        'I am very happy to have entrusted my construction project to this company, they are very committed.',
    },
    zahedi: {
      name: 'Mr. Arash Zahedi',
      message:
        'Javdan companies are very reliable and responsive in sensitive project situations.',
    },
  },
  footer: {
    copywrite: 'Asarsaza @ 2024',
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
      },
      col2: {
        label: 'Contact Us',
        items: {
          phone: '07644458129',
          line1: 'Main Office: Tehran, Qeytarieh, Ketabi Square, No. 1',
          line2:
            'Kish Office: Boulevard Morvarid, Shahrastan Complex, First Floor, No. 76',
        },
      },
    },
  },
}

export default { ...en } as const
