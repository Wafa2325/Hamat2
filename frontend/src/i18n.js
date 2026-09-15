import { createContext, useContext, useEffect, useState } from 'react';

export const translations = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home', about: 'About', services: 'Services', expertise: 'Expertise',
      work: 'Our Work', clients: 'Clients', whyus: 'Why Us', contact: 'Contact',
    },
    hero: {
      badge: 'Event Management & Building Saudi Talent',
      titleA: 'Experience.',
      titleB: 'Inspire.',
      titleC: 'Succeed.',
      subtitle: "Hamat Al-ebda'a is a company specialized in providing comprehensive event management services, combining creativity, organization, and modern technologies to deliver exceptional experiences that meet clients' aspirations and contribute to achieving their goals efficiently and professionally.",
      ctaContact: 'Contact Us',
      ctaWork: 'View Our Work',
      tags: ['Exhibitions', 'Entertainment Events', 'Hospitality', 'Logistics', 'Event Identity'],
      float1: 'Stage & Crowd Flow',
      float2: 'Hospitality & Protocol',
      float3: 'Event Identity Design',
    },
    about: {
      eyebrow: 'Who We Are',
      title: 'A Saudi company built on creativity, organization, and modern technologies',
      text: "Hamat Al-ebda'a is a company specialized in providing comprehensive event management services, combining creativity, organization, and modern technologies to deliver exceptional experiences that meet clients' aspirations and contribute to achieving their goals efficiently and professionally. We work to provide integrated solutions covering all aspects of events from planning and organization to execution and follow-up, focusing on delivering high-quality services that meet the needs of our clients from various sectors.",
      visionTitle: 'Our Vision',
      vision: "To be the leading company in event management, providing innovative and comprehensive solutions that meet clients' needs and contribute to achieving their goals, with a focus on quality, innovation, and excellence in every event we organize.",
      missionTitle: 'Our Mission',
      mission: 'We work to provide integrated and innovative event management services, focusing on meeting clients’ needs and achieving their goals efficiently and professionally, while adhering to the highest standards of quality and excellence in every event we organize.',
    },
    values: {
      eyebrow: 'Our Values',
      title: 'The principles that guide every event we deliver',
      intro: 'The fundamental principles that guide our approach and define our commitment to excellence.',
      items: [
        { title: 'Renewed Innovation', text: 'We provide creative and innovative solutions to meet clients’ needs.' },
        { title: 'Reliability & Commitment', text: 'We adhere to deadlines and work to achieve clients’ goals efficiently.' },
        { title: 'Accuracy & Excellence', text: 'We focus on the finest details to ensure the delivery of exceptional events.' },
        { title: 'Flexibility & Responsiveness', text: 'We adapt to changes and challenges to ensure the success of events.' },
        { title: 'Partnership & Teamwork', text: 'We work as an integrated team with our clients and partners to achieve success.' },
      ],
    },
    services: {
      eyebrow: 'Our Services',
      title: 'Comprehensive solutions for every aspect of your event',
      intro: 'We offer a wide range of integrated services to meet the needs of our clients.',
      items: [
        { title: 'EventTech Visitor Management', text: 'We provide advanced systems for registration, access control, and visitor data analysis to ensure a smooth and secure experience.' },
        { title: 'Logistics and Crowd Management', text: 'We manage event logistics, transportation, accommodation, catering, and crowd flow to ensure smooth and safe operations.' },
        { title: 'Hospitality Management and Reception Protocols', text: 'We provide luxurious hospitality services, manage reception protocols, and coordinate hotels to ensure a refined and professional experience for guests.' },
        { title: 'Design and Development of Event Identity', text: 'We design and develop integrated visual identities for events, including logos, promotional materials, and visual presentations, to enhance the event’s position and appeal to the audience.' },
        { title: 'Corporate and Private Event Management', text: 'We organize corporate and private events, providing comprehensive services that include planning, coordination, and execution to ensure the success of events and achieve their goals.' },
      ],
    },
    goals: {
      eyebrow: 'Our Goals',
      title: 'What drives us forward',
      intro: 'We strive to achieve a set of strategic goals that contribute to the company’s development and enhance its position in the market.',
      items: [
        { title: 'Leadership and Expansion', text: 'We aim to strengthen the company’s position as a leader in event management and expand into new markets.' },
        { title: 'Building Sustainable Partnerships', text: 'We work to build long-term partnerships with our clients and partners to achieve mutual success.' },
        { title: 'Operational Excellence', text: 'We strive to achieve operational excellence by applying best practices and modern technologies in event management.' },
      ],
    },
    expertise: {
      eyebrow: "Our Team's Expertise",
      title: 'A team with extensive experience across the events industry',
      intro: 'Our team has extensive experience in event management, ensuring the provision of high-quality services that meet clients’ needs.',
      items: [
        'Ticket Management',
        'Crowd Management during Hajj and Umrah',
        'Professional Marketing',
        'Event Planning and Design',
        'Logistics Management',
        'Risk Management',
        'Conference and Exhibition Management',
        'Providing Staff Training',
        'Club Event Management',
        'Organizing Matches',
      ],
    },
    work: {
      eyebrow: 'Our Work',
      view: 'View photo',
      close: 'Close',
      whatsapp: 'Chat on WhatsApp',
      title: 'Events & Entertainment',
      intro: 'We are proud of the events we have organized, which reflect our commitment to quality and excellence.',
      projects: [
        { title: 'Cruise Event – SGS Company', category: 'Cruise Event', text: 'Our team organized a distinctive cruise event for SGS, blending professionalism and creativity, ensuring a unique experience for guests.' },
        { title: 'Cruise Event – LePure Company', category: 'Cruise Event', text: 'We delivered a luxurious cruise event for LePure, with meticulous planning and high-end services to ensure guest satisfaction.' },
        { title: 'Mazda League – 20 Years of Success', category: 'Sports Event', text: 'We proudly organized the Mazda League event, celebrating 20 years of success with outstanding organization and entertainment activities.' },
        { title: 'Pink Cup Opening Ceremony', category: 'Opening Ceremony', text: 'We had the honor of organizing the opening ceremony of the Pink Cup, providing a dazzling event that reflects the tournament’s spirit and values.' },
      ],
    },
    clients: {
      eyebrow: 'Our Partners and Success Clients',
      title: 'Trusted by leading brands and events',
      intro: 'We are proud of the trust of our partners and success clients, and we always strive to provide the best services to them.',
      list: ['DAKAR', 'SGS', 'Jeddah Superdome', 'Mazda', 'TAMAM', 'FIBA 3x3', 'Riyadh Masters', 'Pink Cup', 'Formula 1 STC Saudi Arabian Grand Prix', '360 LIVE!', 'Hattrick', 'Archidot Studio', 'Shadow for Events', 'Aone', 'OCT CPS', 'أفكار رائدة', 'أكاديمية التميز'],
    },
    whyus: {
      eyebrow: 'Why Choose Hamat Al-Ebdaa?',
      title: 'The partner you can trust with your next event',
      intro: 'We are distinguished by a set of factors that make us the ideal choice for our clients.',
      items: [
        { title: 'Expert Team', text: 'Our team has extensive experience in event management, ensuring the provision of high-quality services.' },
        { title: 'Timely Delivery', text: 'We are committed to delivering events on time, focusing on meeting clients’ needs and achieving their goals.' },
        { title: 'Comprehensive Solutions', text: 'We provide comprehensive solutions covering all aspects of events, ensuring a seamless experience for our clients.' },
        { title: 'Global Standards', text: 'We apply global standards in event management, ensuring the provision of high-quality services that meet clients’ needs.' },
      ],
    },
    contact: {
      eyebrow: 'Contact Us',
      title: "Let's plan your next exceptional event",
      intro: 'We’re here to help you plan your next event. Contact us today to discuss how we can turn your vision into reality.',
      fullName: 'Full Name',
      fullNamePh: 'Your full name',
      company: 'Company Name',
      companyPh: 'Your company or organization',
      email: 'Email',
      emailPh: 'you@company.com',
      phone: 'Phone Number',
      phonePh: '+966 5X XXX XXXX',
      inquiry: 'Type of Inquiry',
      inquiryPh: 'Select inquiry type',
      inquiryOptions: [
        'EventTech Visitor Management',
        'Logistics and Crowd Management',
        'Hospitality Management and Reception Protocols',
        'Design and Development of Event Identity',
        'Corporate and Private Event Management',
        'General Inquiry',
      ],
      message: 'Message',
      messagePh: 'Tell us about your event...',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Thank you! Your message has been sent. We will get back to you soon.',
      error: 'Something went wrong. Please try again or contact us directly by email or phone.',
      infoTitle: 'Contact Information',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      socialLabel: 'Follow Us',
    },
    footer: {
      tagline: 'A Saudi company specialized in comprehensive event management — creativity, organization, and modern technologies for exceptional experiences.',
      quickLinks: 'Quick Links',
      contactTitle: 'Contact',
      download: 'Download Company Profile',
      rights: "Hamat Al-ebda'a. All rights reserved.",
      madeIn: 'Experience. Inspire. Succeed.',
    },
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية', about: 'من نحن', services: 'خدماتنا', expertise: 'خبراتنا',
      work: 'أعمالنا', clients: 'عملاؤنا', whyus: 'لماذا نحن', contact: 'تواصل معنا',
    },
    hero: {
      badge: 'إدارة الفعاليات وبناء الكوادر السعودية',
      titleA: 'تجربة.',
      titleB: 'إلهام.',
      titleC: 'نجاح.',
      subtitle: 'هامات الإبداع هي شركة متخصصة في تقديم خدمات إدارة الفعاليات الشاملة، تجمع بين الإبداع والتنظيم والتقنيات الحديثة لتقديم تجارب استثنائية تلبي تطلعات العملاء وتساهم في تحقيق أهدافهم بكفاءة واحترافية.',
      ctaContact: 'تواصل معنا',
      ctaWork: 'شاهد أعمالنا',
      tags: ['المعارض', 'الفعاليات الترفيهية', 'الضيافة', 'الخدمات اللوجستية', 'هوية الفعاليات'],
      float1: 'المسرح وتدفق الجماهير',
      float2: 'الضيافة والمراسم',
      float3: 'تصميم هوية الفعاليات',
    },
    about: {
      eyebrow: 'من نحن',
      title: 'شركة سعودية تجمع بين الإبداع والتنظيم والتقنيات الحديثة',
      text: 'هامات الإبداع هي شركة متخصصة في تقديم خدمات إدارة الفعاليات الشاملة، تجمع بين الإبداع والتنظيم والتقنيات الحديثة لتقديم تجارب استثنائية تلبي تطلعات العملاء وتساهم في تحقيق أهدافهم بكفاءة واحترافية. نعمل على تقديم حلول متكاملة تشمل جميع جوانب الفعاليات من التخطيط والتنظيم إلى التنفيذ والمتابعة، مع التركيز على تقديم خدمات عالية الجودة تلبي احتياجات عملائنا من مختلف القطاعات.',
      visionTitle: 'رؤيتنا',
      vision: 'أن نكون الشركة الرائدة في مجال إدارة الفعاليات، من خلال تقديم حلول مبتكرة وشاملة تلبي احتياجات العملاء وتساهم في تحقيق أهدافهم، مع التركيز على الجودة والابتكار والتميز في كل فعالية نقوم بتنظيمها.',
      missionTitle: 'مهمتنا',
      mission: 'نعمل على تقديم خدمات إدارة فعاليات متكاملة ومبتكرة، مع التركيز على تلبية احتياجات العملاء وتحقيق أهدافهم بكفاءة واحترافية، مع الالتزام بأعلى معايير الجودة والتميز في كل فعالية نقوم بتنظيمها.',
    },
    values: {
      eyebrow: 'قيمنا',
      title: 'المبادئ التي توجه كل فعالية نقدمها',
      intro: 'المبادئ الأساسية التي توجه نهجنا وتحدد التزامنا بالتميز.',
      items: [
        { title: 'الابتكار المتجدد', text: 'نقدم حلولاً إبداعية ومبتكرة تلبي احتياجات العملاء.' },
        { title: 'الموثوقية والالتزام', text: 'نلتزم بالمواعيد النهائية ونعمل على تحقيق أهداف العملاء بكفاءة.' },
        { title: 'الدقة والتميز', text: 'نركز على أدق التفاصيل لضمان تقديم فعاليات استثنائية.' },
        { title: 'المرونة والاستجابة', text: 'نتكيف مع التغيرات والتحديات لضمان نجاح الفعاليات.' },
        { title: 'الشراكة والعمل الجماعي', text: 'نعمل كفريق متكامل مع عملائنا وشركائنا لتحقيق النجاح.' },
      ],
    },
    services: {
      eyebrow: 'خدماتنا',
      title: 'حلول متكاملة لكل جانب من جوانب فعاليتك',
      intro: 'نقدم مجموعة واسعة من الخدمات المتكاملة لتلبية احتياجات عملائنا.',
      items: [
        { title: 'إدارة الزوار بتقنية EventTech', text: 'نقدم أنظمة متقدمة للتسجيل والتحكم في الوصول وتحليل بيانات الزوار لضمان تجربة سلسة وآمنة.' },
        { title: 'إدارة الخدمات اللوجستية والحشود', text: 'ندير الخدمات اللوجستية للفعاليات والنقل والإقامة والتموين وتدفق الحشود لضمان عمليات سلسة وآمنة.' },
        { title: 'إدارة الضيافة وبروتوكولات الاستقبال', text: 'نقدم خدمات ضيافة فاخرة وندير بروتوكولات الاستقبال ونتولى تنسيق الفنادق لضمان تجربة راقية واحترافية للضيوف.' },
        { title: 'تصميم وتطوير هوية الفعاليات', text: 'نصمم ونطور هويات بصرية متكاملة للفعاليات، تشمل الشعارات والمواد الترويجية والعروض المرئية، لتعزيز مكانة الفعالية وجاذبيتها للجمهور.' },
        { title: 'إدارة الفعاليات المؤسسية والخاصة', text: 'نقوم بتنظيم الفعاليات المؤسسية والخاصة، ونقدم خدمات شاملة تشمل التخطيط والتنسيق والتنفيذ لضمان نجاح الفعاليات وتحقيق أهدافها.' },
      ],
    },
    goals: {
      eyebrow: 'أهدافنا',
      title: 'ما يدفعنا إلى الأمام',
      intro: 'نسعى لتحقيق مجموعة من الأهداف الاستراتيجية التي تساهم في تطوير الشركة وتعزيز مكانتها في السوق.',
      items: [
        { title: 'الريادة والتوسع', text: 'نهدف إلى تعزيز مكانة الشركة كشركة رائدة في مجال إدارة الفعاليات والتوسع في أسواق جديدة.' },
        { title: 'بناء شراكات مستدامة', text: 'نعمل على بناء شراكات طويلة الأمد مع عملائنا وشركائنا لتحقيق النجاح المشترك.' },
        { title: 'التميز التشغيلي', text: 'نسعى لتحقيق التميز التشغيلي من خلال تطبيق أفضل الممارسات والتقنيات الحديثة في إدارة الفعاليات.' },
      ],
    },
    expertise: {
      eyebrow: 'خبرات فريقنا',
      title: 'فريق يتمتع بخبرة واسعة في قطاع الفعاليات',
      intro: 'يتمتع فريقنا بخبرة واسعة في مجال إدارة الفعاليات، مما يضمن تقديم خدمات عالية الجودة تلبي احتياجات العملاء.',
      items: [
        'إدارة التذاكر',
        'إدارة الحشود في الحج والعمرة',
        'التسويق الاحترافي',
        'تخطيط وتصميم الفعاليات',
        'إدارة اللوجستيات',
        'إدارة المخاطر',
        'إدارة المؤتمرات والمعارض',
        'تقديم تدريب للكوادر',
        'إدارة فعاليات الأندية',
        'تنظيم المباريات',
      ],
    },
    work: {
      eyebrow: 'أعمالنا',
      view: 'عرض الصورة',
      close: 'إغلاق',
      whatsapp: 'تواصل عبر واتساب',
      title: 'الفعاليات والترفيه',
      intro: 'نفخر بالفعاليات التي قمنا بتنظيمها، والتي تعكس التزامنا بالجودة والتميز.',
      projects: [
        { title: 'فعالية كروز – شركة SGS', category: 'فعالية كروز', text: 'نظم فريقنا فعالية كروز مميزة لشركة SGS، مزجت بين الاحترافية والإبداع، وضمنت تجربة فريدة للضيوف.' },
        { title: 'فعالية كروز – شركة LePure', category: 'فعالية كروز', text: 'قدمنا فعالية كروز فاخرة لشركة LePure، بتخطيط دقيق وخدمات راقية لضمان رضا الضيوف.' },
        { title: 'دوري مازدا – 20 عامًا من النجاح', category: 'فعالية رياضية', text: 'نظمنا بفخر فعالية دوري مازدا، احتفاءً بعشرين عامًا من النجاح مع تنظيم متميز وأنشطة ترفيهية.' },
        { title: 'حفل افتتاح البينك كب', category: 'حفل افتتاح', text: 'كان لنا الشرف في تنظيم حفل افتتاح البينك كب، وقدمنا فعالية مبهر تعكس روح البطولة وقيمها.' },
      ],
    },
    clients: {
      eyebrow: 'شركاؤنا وعملاء النجاح',
      title: 'موثوقون من قبل علامات وفعاليات رائدة',
      intro: 'نفخر بثقة شركائنا وعملائنا، ونسعى دائمًا لتقديم أفضل الخدمات لهم.',
      list: ['DAKAR', 'SGS', 'Jeddah Superdome', 'Mazda', 'TAMAM', 'FIBA 3x3', 'Riyadh Masters', 'Pink Cup', 'Formula 1 STC Saudi Arabian Grand Prix', '360 LIVE!', 'Hattrick', 'Archidot Studio', 'Shadow for Events', 'Aone', 'OCT CPS', 'أفكار رائدة', 'أكاديمية التميز'],
    },
    whyus: {
      eyebrow: 'لماذا تختار هامات الإبداع؟',
      title: 'الشريك الذي يمكنك الوثوق به لفعاليتك القادمة',
      intro: 'نتميز بمجموعة من العوامل التي تجعلنا الخيار الأمثل لعملائنا.',
      items: [
        { title: 'فريق خبير', text: 'يتمتع فريقنا بخبرة واسعة في إدارة الفعاليات، مما يضمن تقديم خدمات عالية الجودة.' },
        { title: 'التسليم في الوقت المحدد', text: 'نلتزم بتسليم الفعاليات في الوقت المحدد، مع التركيز على تلبية احتياجات العملاء وتحقيق أهدافهم.' },
        { title: 'حلول شاملة', text: 'نقدم حلولاً شاملة تغطي جميع جوانب الفعاليات، مما يضمن تجربة سلسة لعملائنا.' },
        { title: 'معايير عالمية', text: 'نطبق معايير عالمية في إدارة الفعاليات، مما يضمن تقديم خدمات عالية الجودة تلبي احتياجات العملاء.' },
      ],
    },
    contact: {
      eyebrow: 'تواصل معنا',
      title: 'لنخطط معًا لفعاليتك الاستثنائية القادمة',
      intro: 'نحن هنا لمساعدتك في التخطيط لفعاليتك القادمة. تواصل معنا اليوم لمناقشة كيف يمكننا تحويل رؤيتك إلى واقع.',
      fullName: 'الاسم الكامل',
      fullNamePh: 'اسمك الكامل',
      company: 'اسم الشركة',
      companyPh: 'شركتك أو جهتك',
      email: 'البريد الإلكتروني',
      emailPh: 'you@company.com',
      phone: 'رقم الجوال',
      phonePh: '+966 5X XXX XXXX',
      inquiry: 'نوع الاستفسار',
      inquiryPh: 'اختر نوع الاستفسار',
      inquiryOptions: [
        'إدارة الزوار بتقنية EventTech',
        'إدارة الخدمات اللوجستية والحشود',
        'إدارة الضيافة وبروتوكولات الاستقبال',
        'تصميم وتطوير هوية الفعاليات',
        'إدارة الفعاليات المؤسسية والخاصة',
        'استفسار عام',
      ],
      message: 'الرسالة',
      messagePh: 'أخبرنا عن فعاليتك...',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      success: 'شكرًا لك! تم إرسال رسالتك بنجاح. سنعاود التواصل معك قريبًا.',
      error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة عبر البريد الإلكتروني أو الهاتف.',
      infoTitle: 'معلومات التواصل',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الجوال',
      socialLabel: 'تابعنا',
    },
    footer: {
      tagline: 'شركة سعودية متخصصة في إدارة الفعاليات الشاملة — إبداع وتنظيم وتقنيات حديثة لتجارب استثنائية.',
      quickLinks: 'روابط سريعة',
      contactTitle: 'تواصل',
      download: 'تحميل الملف التعريفي للشركة',
      rights: 'هامات الإبداع. جميع الحقوق محفوظة.',
      madeIn: 'تجربة. إلهام. نجاح.',
    },
  },
};

const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
