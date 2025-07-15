const fa = {
  primaryHero: {
    title: 'اثرسازان',
    description: 'خلق آثار جاودان',
  },
  secondaryHero: {
    title: 'اثرسازان',
    lead: 'اثرسازان',
    description: 'خلق آثار جاودان',
  },
  hello: 'سلام',
  stories: {
    story1: {
      title: 'بنیان‌گذار فردای شهری شما',
      lead: '',
    },
    story2: {
      title: 'از ایده تا اجرا، همراه مطمئن ساخت‌وساز ',
      lead: '',
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
}

export type I18nDictionary = typeof fa

export default { ...fa } as const
