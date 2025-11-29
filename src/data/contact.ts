export interface ContactBox {
  id: string;
  type: 'email' | 'phone';
  label: string;
  value: string;
}

export interface ContactPageContent {
  hero: {
    title: string;
    breadcrumb: {
      home: string;
      current: string;
    };
  };
  // paymentQrCode: string;
  contactDetails: {
    sectionLabel: string;
    title: string;
    description: string;
    officeLabel: string;
    officeAddress: string;
    contactBoxes: ContactBox[];
  };
  paymentQrCode: string;
  form: {
    title: string;
    fields: {
      name: string;
      phone: string;
      numberOfPerson: string;
      date: string;
      package: string;
      advancedAmount: string;
      paymentScreenshot: string;

    };
    packageOptions: Array<{ value: string; label: string }>;
    submitButton: string;
  };
}

export const contactPageContent: ContactPageContent = {
  hero: {
    title: 'Contact Us',
    breadcrumb: {
      home: 'Home',
      current: 'Contact Us',
    },
  },
  contactDetails: {
    sectionLabel: 'NEED HELP?',
    title: 'Contact Details',
    description:
      'For inquiries or to book your unforgettable Sundarbans adventure, please reach out to us using the following contact information:',
    officeLabel: 'Office',
    officeAddress: 'Jharkhali , Sardar More, Sundarban , Jharkhali park road , 743312 , Basanti, India, 743312',
    contactBoxes: [
      {
        id: 'phone1',
        type: 'phone',
        label: 'Contact No 1 | Call Now 24 x 7',
        value: '+919564546823',
      },
      {
        id: 'phone2',
        type: 'phone',
        label: 'Contact No 2 | Call Now 24 x 7',
        value: '+919064483605',
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Us',
        value: 'mohandas7176@gmail.com ',
      },
    ],
  },
  paymentQrCode: "https://ik.imagekit.io/Maa Laxmi homestay/payment_1762973671573_WhatsApp_Image_2025-11-10_at_20.16.35_I0Bj89fps.jpeg",
  form: {
    title: 'Book Your Package',
    fields: {
      name: 'Name',
      phone: 'Phone Number',
      package: 'Select Package',
      date: 'Date',
      numberOfPerson: 'Number of Person',
      advancedAmount: 'Advanced Amount',
      paymentScreenshot: 'Payment Screenshot',
    },
    packageOptions: [
      { value: '', label: 'Select Package' },
      { value: 'package1', label: 'Package 1' },
      { value: 'package2', label: 'Package 2' },
      { value: 'package3', label: 'Package 3' },
    ],
    submitButton: 'Send',
  },
};
