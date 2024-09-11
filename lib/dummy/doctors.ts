export type DoctorType = {
  id: string
  name: string
  description: string
  hospital: {
    id: string
    name: string
    address: string
    city: string
  }
  availableTimes: string
  imgSrc: string
  gender: "male" | "female"
  experience: number
}

export const doctors: DoctorType[] = [
  {
    id: "n30nzuw4mej",
    name: "Dr. Ahsan Habib",
    description:
      "Specialist in Diabetes and Endocrinology with 15 years of experience.",
    hospital: {
      id: "f733e9e895b4c4ae6dc6aa1ed0a076fd",
      name: "Square Hospital Dhaka",
      address: "18/F, West Panthapath",
      city: "Panthapath",
    },
    availableTimes: "Mon, Wed, Fri: 10 AM - 8 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_1.jpg",
    gender: "male",
    experience: 5,
  },
  {
    id: "4yk4s4d5qxa",
    name: "Dr. Nusrat Jahan",
    description:
      "Renowned Diabetologist, focusing on Type 2 Diabetes management.",
    hospital: {
      id: "f64791b12b465a98d92836a2291a11bf",
      name: "Evercare Hospital Dhaka",
      address: "Plot 81, Block-E, Bashundhara, Dhaka-1229",
      city: "Bashundhara",
    },
    availableTimes: "Tue, Thu, Sat: 9 AM - 9 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_1.jpg",
    gender: "female",
    experience: 6,
  },
  {
    id: "uw00h0kj7f8",
    name: "Dr. Moinul Islam",
    description:
      "Endocrinologist with a special interest in pediatric diabetes.",
    hospital: {
      id: "e91b19821aaeb85c6b12fafa5998d5c8",
      name: "United Hospital Limited",
      address: "Plot-15, Road-71, Gulshan-2, Dhaka-1212",
      city: "Gulshan",
    },
    availableTimes: "Mon, Thu: 2 PM - 6 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_2.jpg",
    gender: "male",
    experience: 10,
  },
  {
    id: "e0t5dhljlx8",
    name: "Dr. Tahmina Akter",
    description: "Expert in gestational diabetes and diabetic foot care.",
    hospital: {
      id: "df27fbaa1361c1990c2b9437dcac69d5",
      name: "Ibne Sina Hospital Dhaka (Dhanmondi)",
      address: "House No. 70, Road-15/A, Dhanmondi, Dhaka-1209",
      city: "Dhanmondi",
    },
    availableTimes: "Sat, Sun: 11 AM - 3 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_2.jpg",
    gender: "female",
    experience: 8,
  },
  {
    id: "swc6l0sk2uh",
    name: "Dr. Rafiq Azad",
    description:
      "Diabetologist with 20 years of experience in treating Type 1 and Type 2 Diabetes.",
    hospital: {
      id: "04381b26fb57743f044729ab015cbe15",
      name: "Labaid Specialized Hospital (Dhanmondi)",
      address: "House-1, Road-4, Dhanmondi Dhaka-1205",
      city: "Dhanmondi",
    },
    availableTimes: "Mon, Wed, Fri: 4 PM - 8 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_3.jpg",
    gender: "male",
    experience: 12,
  },
  {
    id: "u43n5m5e4ig",
    name: "Dr. Sumaiya Alam",
    description:
      "Specializes in diabetes-related complications and prevention.",
    hospital: {
      id: "30d1ecd20fa91380fc8488c23414bf23",
      name: "Popular Diagnostic Center (Dhanmondi)",
      address: "House-16, Road-2, Dhanmondi, Dhaka-1205",
      city: "Dhanmondi",
    },
    availableTimes: "Tue, Thu, Sat: 10 AM - 2 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_3.jpg",
    gender: "female",
    experience: 7,
  },
  {
    id: "sbtg273wmum",
    name: "Dr. Abul Hossain",
    description:
      "Endocrinologist with a focus on insulin therapy and diabetes education.",
    hospital: {
      id: "3b629bd8be8ed2d25391bcc73618fead",
      name: "Dhaka Medical College",
      address: "Secretariat Road, Shahbag, Dhaka-1000",
      city: "Ramna",
    },
    availableTimes: "Mon, Wed: 9 AM - 1 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_4.jpg",
    gender: "male",
    experience: 8,
  },
  {
    id: "vrsq4cpp3a",
    name: "Dr. Farhana Khan",
    description:
      "Expert in managing complex cases of diabetes with co-existing conditions.",
    hospital: {
      id: "3d1c6f17ff09fdd58b3a1a9139963605",
      name: "Birdem General Hospital",
      address: "122 Kazi Nazrul Islam Avenue, Shahbag, Dhaka-1000",
      city: "Ramna",
    },
    availableTimes: "Sun, Tue, Thu: 2 PM - 6 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_4.jpg",
    gender: "female",
    experience: 4,
  },
  {
    id: "35f0mu0w89j",
    name: "Dr. Zahir Uddin",
    description:
      "Diabetes specialist with a focus on diet and lifestyle management.",
    hospital: {
      id: "43832151da3d07c84ebabed7296937dc",
      name: "Holy Family Red Crescent Medical College",
      address: "1 Eskatan Garden Road, Ramna, Dhaka-1000",
      city: "Ramna",
    },
    availableTimes: "Mon, Fri: 3 PM - 7 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_5.jpg",
    gender: "male",
    experience: 5,
  },
  {
    id: "0w7rogveav9",
    name: "Dr. Mahmuda Begum",
    description:
      "Senior Diabetologist with expertise in long-term diabetes care.",
    hospital: {
      id: "43832151da3d07c84ebabed7296937dc",
      name: "Holy Family Red Crescent Medical College",
      address: "1 Eskatan Garden Road, Ramna, Dhaka-1000",
      city: "Ramna",
    },
    availableTimes: "Tue, Thu: 10 AM - 1 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_5.jpg",
    gender: "female",
    experience: 10,
  },
  {
    id: "64rr5j9nyx7",
    name: "Dr. Mahbubur Rahman",
    description: "Specialist in Diabetes Mellitus and Metabolic Disorders.",
    hospital: {
      id: "21f2fe0741e23cc2307cace23008ef76",
      name: "Labaid Specialized Hospital (Gulshan)",
      address: "House-13/A, Road-35, Gulshan-2, Dhaka-1212",
      city: "Gulshan",
    },
    availableTimes: "Mon, Wed, Sat: 5 PM - 9 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_6.jpg",
    gender: "male",
    experience: 6,
  },
  {
    id: "tboeb89wndm",
    name: "Dr. Shahnaz Huda",
    description:
      "Diabetes expert with a focus on patient education and self-management.",
    hospital: {
      id: "f35230226fa2f1d6516aaf554bd1704e",
      name: "Anwar Khan Modern Hospital Dhaka",
      address: "House-17, Road-8, Dhanmondi, Dhaka-1207",
      city: "Dhanmondi",
    },
    availableTimes: "Tue, Thu, Sun: 3 PM - 7 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_6.jpg",
    gender: "female",
    experience: 9,
  },
  {
    id: "tybjnbup38n",
    name: "Dr. Rezaul Karim",
    description:
      "Experienced Diabetologist specializing in insulin pump therapy.",
    hospital: {
      id: "21f2fe0741e23cc2307cace23008ef76",
      name: "Labaid Specialized Hospital",
      address: "House-13/A, Road-35, Gulshan-2, Dhaka-1212",
      city: "Gulshan",
    },
    availableTimes: "Mon, Fri: 11 AM - 3 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_7.jpg",
    gender: "male",
    experience: 14,
  },
  {
    id: "g0lab6rxr0n",
    name: "Dr. Samira Haque",
    description:
      "Specializes in the prevention and management of diabetes complications.",
    hospital: {
      id: "33222cb2c0ff1da1adc212b72fed821a",
      name: "Popular Diagnostic Center (Uttara)",
      address:
        "House-25, Road-07, Sector-04, Jashim Uddin Moar, Uttara, Dhaka-1230",
      city: "Uttara",
    },
    availableTimes: "Mon, Wed: 2 PM - 6 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_7.jpg",
    gender: "female",
    experience: 6,
  },
  {
    id: "axsilkp1zrs",
    name: "Dr. Harunur Rashid",
    description:
      "Diabetologist with expertise in lifestyle modification and weight management.",
    hospital: {
      id: "35a5ba7dbf93d68ebc2e50d5780e1407",
      name: "Ibne Sina Hospital Dhaka (Mirpur)",
      address: "Hazi Road, Shiyalbari Moor, 2 Avenue-03, Mirpur-02, Dhaka-1216",
      city: "Mirpur",
    },
    availableTimes: "Tue, Thu: 10 AM - 2 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_8.jpg",
    gender: "male",
    experience: 5,
  },
  {
    id: "uk6my78ovzq",
    name: "Dr. Nazneen Ahmed",
    description: "Senior Endocrinologist focusing on childhood diabetes.",
    hospital: {
      id: "5c345d85ef73a5572b27168d98a42269",
      name: "Mugda Medical College & Hospital",
      address: "Hazi Kadam Ali Road, Mugda, Dhaka-1214",
      city: "Mugda",
    },
    availableTimes: "Mon, Wed, Sat: 12 PM - 4 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_8.jpg",
    gender: "female",
    experience: 4,
  },
  {
    id: "212q4yqpl99",
    name: "Dr. M. Shahidul Islam",
    description:
      "Diabetes and Endocrinology specialist with a focus on geriatric diabetes.",
    hospital: {
      id: "7b3c01a5da1580940a59a112ef82a427",
      name: "Badda General Hospital",
      address: "107/2, Uttar Badda, Progoti Sarani, Dhaka-1212",
      city: "Gulshan",
    },
    availableTimes: "Mon, Thu: 10 AM - 1 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_9.jpg",
    gender: "male",
    experience: 7,
  },
  {
    id: "ej632h8ogo",
    name: "Dr. Jannatul Ferdous",
    description:
      "Experienced Diabetologist focusing on women’s health and diabetes.",
    hospital: {
      id: "94b3928a260e86e802ed008e87asc92c",
      name: "Impulse Hospital",
      address: "304/E Shaheed Tazuddin Avenue,Tejgaon, Dhaka-1215",
      city: "Tejgaon",
    },
    availableTimes: "Sun, Tue, Thu: 3 PM - 7 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_9.jpg",
    gender: "female",
    experience: 8,
  },
  {
    id: "b6ehfkxs85s",
    name: "Dr. Anwar Hossain",
    description: "Specialist in Diabetes and Thyroid disorders.",
    hospital: {
      id: "94b3928a260e86e802ed008e87cce92c",
      name: "Addin Medical College Hospital",
      address: "2 Bara Maghbazar, Outer Circular Road, Dhaka-1217",
      city: "Ramna",
    },
    availableTimes: "Sat, Mon: 4 PM - 8 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_10.jpg",
    gender: "male",
    experience: 5,
  },
  {
    id: "yh7cvjriazq",
    name: "Dr. Salma Parveen",
    description: "Diabetes specialist with a focus on maternal diabetes.",
    hospital: {
      id: "874856f04c692f6be3aeeb245814013c",
      name: "Farazy Hospital",
      address: "House-15, Block-E, Rampura, Dhaka-1219",
      city: "Rampura",
    },
    availableTimes: "Mon, Wed: 10 AM - 2 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_10.jpg",
    gender: "female",
    experience: 6,
  },
  {
    id: "6ywso84lew",
    name: "Dr. Abir Sikder",
    description:
      "Endocrinologist with a focus on insulin therapy and diabetes education.",
    hospital: {
      id: "33222cb2c0ff1da1adc212b72fed821a",
      name: "Popular Diagnostic Center (Uttara)",
      address:
        "House-25, Road-07, Sector-04, Jashim Uddin Moar, Uttara, Dhaka-1230",
      city: "Uttara",
    },
    availableTimes: "Mon, Wed: 9 AM - 1 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_4.jpg",
    gender: "male",
    experience: 8,
  },
  {
    id: "bkivka7h4x5",
    name: "Dr. Yasmina Khatun",
    description:
      "Expert in managing complex cases of diabetes with co-existing conditions.",
    hospital: {
      id: "8c5ae25b3eefbd15b663be2129787844",
      name: "Famous Specialized Hospital",
      address: "House-05, Block-H, Block-E, Rampura, Dhaka-1219",
      city: "Ramna",
    },
    availableTimes: "Sun, Tue, Thu: 2 PM - 6 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_4.jpg",
    gender: "female",
    experience: 4,
  },
  {
    id: "2t1ddlpus7v",
    name: "Dr. Zakir Shah",
    description:
      "Diabetes specialist with a focus on diet and lifestyle management.",
    hospital: {
      id: "9e8c8ce98cd93c30b7cd3fd38d2252c8",
      name: "Central Basabo General Hospital",
      address: "127, Central Basabo, Central Bashabo, Sobujbag, Dhaka-1214",
      city: "Basabo",
    },
    availableTimes: "Mon, Fri: 3 PM - 7 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_male_5.jpg",
    gender: "male",
    experience: 5,
  },
]
