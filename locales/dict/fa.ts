const fa = {
  primaryHero: {
    title: 'اثرسازان',
    description: 'خلق آثار جاودان',
  },
  secondaryHero: {
    title: 'خلق آثار جاودان',
    lead: 'اثرسازان',
    description: 'هدف ما خلق آثار جاودان در سرتاسر ایران عزیزمان است',
  },
  lastHero: {
    title: 'اثرسازان',
    description: 'هدف ما خلق آثار جاودان در سرتاسر ایران عزیزمان است',
  },
  projectsHero: {
    header: 'پروژه ها',
  },
  navigations: {
    home: {
      label: 'خانه',
      title: 'اثر سازان',
      description: 'خلق آثار جاودان',
    },
    about: {
      label: 'درباره ما',
      title: '',
      description: '',
    },
    contacts: {
      label: 'تماس با ما',
      title: '',
      description: '',
    },
    blogs: {
      label: 'وبلاگ',
      title: '',
      description: '',
    },
    partners: {
      label: 'همکاران ما',
      title: '',
      description: '',
    },
    services: {
      label: 'خدمات',
      title: '',
      description: '',
    },
  },
  stories: {
    story1: {
      title: 'بنیان‌گذار فردای شهری شما',
      lead: '',
    },
    story2: {
      title: 'نوآوری',
      lead: 'ارائه‌ی راه حل های نوآورانه متناسب با نیازهای مشتریان',
    },
    story3: {
      title: 'رعایت اصول',
      lead: 'فعالیت بر پایه اصول اخلاقی، تعهد، تخصص و نوآوری',
    },
    story4: {
      title: 'معماری ایرانی',
      lead: 'وفاداری و شناخت به معماری سنتی قدیمی ایرانی',
    },
  },
  slides: {
    slide1: {
      title: 'طراحی',
      lead: 'ایجاد طرح‌های دقیق و جذاب برای پروژه‌های ساختمانی',
    },
    slide2: {
      title: 'ساخت',
      lead: 'اجرای طرح‌ها با استفاده از مواد با کیفیت و تکنولوژی‌های روز',
    },
    slide3: {
      title: 'مشاوره',
      lead: 'مشاوره در پروژه‌های ساختمانی: انتخاب طرح، مواد و فن‌آوری‌های مناسب',
    },
  },
  projects: {
    zarafshan: { title: 'ساختمان اداری زرافشان', text: '', place: '' },
    eksir: { title: 'سوله اکسیر کیش', text: '', place: '' },
    sina: { title: 'سینا رزیدنس', text: '', place: '' },
    vanush: { title: 'ونوش', text: '', place: '' },
    savadkoh: { title: 'سوادکوه', text: '', place: '' },
    sadaf: { title: 'صدف کیش', text: '', place: '' },
  },
  testimonial: {
    title: 'نظرات',
    rajabi: {
      name: 'امین رجبی',
      message:
        'حرفه ای برخورد می کنند و چیزی که خیلی برام متمایز بود تخصص و تجربه ای که در این زمینه داشتن بود.',
    },
    mohebi: {
      name: 'علیرضا محبی',
      message: 'یکی از ویژگی های بارز شرکت سر وقت بودن و زمان بندی درست بود.',
    },
    marashi: {
      name: 'مهدی مرعشی',
      message:
        'از این که پروژه‌ی ساختمانی خودم رو به این شرکت واگذار کردم خیلی خوشحالم، خیلی متعهد هستند.',
    },
    zahedi: {
      name: 'آرش زاهدی',
      message:
        'شرکت جاودان بسیار قابل اعتماد هستند و در موقعیت های حساس پروژه پاسخگو.',
    },
  },
  footer: {
    copywrite: 'اثرسازان @ ۱۴۰۴',
    newsletter: {
      label: 'در ارتباط باشید',
      placeholder: 'آدرس ایمیل شما',
      cta: 'ثبت',
      description:
        'با ثبت نام می‌خواهم از به‌روزرسانی‌ها و شاهکارهای جدید مطلع شوم و با سیاست حفاظت از داده‌های عصارسازان موافقم.',
    },
    columns: {
      col1: {
        label: 'دسترسی سریع',
      },
      col2: {
        label: 'ارتباط با ما',
        items: {
          phone: '۰۷۶۴۴۴۵۸۱۲۹',
          line1: 'کیش، بلوار‌مروارید، مجتمع شارستان، طبقه اول، پلاک۷۶',
          line2: 'دفتر تهران: قیطریه میدان کتابی پلاک یک',
        },
      },
    },
  },
}

export type I18nDictionary = typeof fa

export default { ...fa } as const
