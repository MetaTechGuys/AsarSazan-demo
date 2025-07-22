import type { I18nDictionary } from './fa'

const en: I18nDictionary = {
  primaryHero: {
    title: 'AsarSazan',
    description: 'Creating lasting works',
  },
  secondaryHero: {
    title: 'Creating lasting works',
    lead: 'AsarSazan',
    description:
      'Our goal is to create lasting works throughout our beloved Iran.',
  },
  lastHero: {
    title: 'AsarSazan',
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
      title: 'Future',
      lead: 'The founder of your urban tomorrow',
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
  aboutus: {
    title: 'About Us',
    lead: 'Makers of Effect, Builders of a Lasting Future',
    content: `With over a decade of experience in the field of mass construction projects, Atar Sazan Company started its activity with the aim of creating safe, modern and high-quality spaces and is now known as one of the leading companies in the construction industry.
<br>
At Atar Sazan, we do not consider construction to simply mean erecting a structure; rather, we believe that every project is an opportunity to make an impact, improve the quality of life and build a better future for society. From engineering design to precise implementation and timely delivery, all stages of the projects are carried out by relying on a specialist team, high-quality materials and world-class standards.
<br>
Our portfolio includes large-scale residential, commercial and office projects that have been implemented in various urban areas, and the satisfaction of employers and users is a testament to the quality of our work.
<br>
At Ethro Sazan, we strive every day to build structures that not only shine in the present, but also remain effective, durable, and valuable in the years to come.
<br>
Ethro Sazan; where building becomes creating work.`,
  },
}

export default { ...en } as const
