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
  lastHero: {
    title: 'اثرسازان',
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
    story3: {
      title: 'از ایده تا اجرا، همراه مطمئن ساخت‌وساز ',
      lead: '',
    },
    story4: {
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
  projects: {
    project1: { title: '' },
    project2: { title: '' },
    project3: { title: '' },
    project4: { title: '' },
    project5: { title: '' },
    project6: { title: '' },
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
    links: {
      services: 'خدمات',
      blog: 'وبلاگ',
      partners: 'همکاران ما',
    },
    newsletter: {
      label: 'در ارتباط باشدی',
      placeholder: 'آدرس ایمیل شما',
      cta: 'ثبت',
      description:
        'با ثبت نام می‌خواهم از به‌روزرسانی‌ها و شاهکارهای جدید مطلع شوم و با سیاست حفاظت از داده‌های عصارسازان موافقم.',
    },
    columns: {
      col1: {
        label: 'دسترسی سریع',
        items: {
          home: 'خانه',
          aboutus: 'درباره ما',
          contactus: 'تماس با ما',
        },
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
