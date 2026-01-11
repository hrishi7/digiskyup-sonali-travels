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
    officeAddress: 'Canning Railway New Market , Canning Town, India, 743329',
    contactBoxes: [
      {
        id: 'phone1',
        type: 'phone',
        label: 'Booking Number',
        value: '+919614731529',
      },
      {
        id: 'phone2',
        type: 'phone',
        label: 'WhatsApp Number',
        value: '+919609691144',
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Us',
        value: 'babluhalder8520@gmail.com',
      },
    ],
  },
  paymentQrCode: "https://ik.imagekit.io/p1xvnl9zi/WhatsApp%20Image%202026-01-11%20at%2019.32.47.jpeg",
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
