export type DoctorType = {
  name: string
  description: string
  hospital: {
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
    name: "Dr. Ahsan Habib",
    description:
      "Specialist in Diabetes and Endocrinology with 15 years of experience.",
    hospital: {
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
    name: "Dr. Nusrat Jahan",
    description:
      "Renowned Diabetologist, focusing on Type 2 Diabetes management.",
    hospital: {
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
    name: "Dr. Moinul Islam",
    description:
      "Endocrinologist with a special interest in pediatric diabetes.",
    hospital: {
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
    name: "Dr. Tahmina Akter",
    description: "Expert in gestational diabetes and diabetic foot care.",
    hospital: {
      name: "Ibne Sina Hospital Dhaka",
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
    name: "Dr. Rafiq Azad",
    description:
      "Diabetologist with 20 years of experience in treating Type 1 and Type 2 Diabetes.",
    hospital: {
      name: "Labaid Specialized Hospital",
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
    name: "Dr. Sumaiya Alam",
    description:
      "Specializes in diabetes-related complications and prevention.",
    hospital: {
      name: "Popular Diagnostic Center",
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
    name: "Dr. Abul Hossain",
    description:
      "Endocrinologist with a focus on insulin therapy and diabetes education.",
    hospital: {
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
    name: "Dr. Farhana Khan",
    description:
      "Expert in managing complex cases of diabetes with co-existing conditions.",
    hospital: {
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
    name: "Dr. Zahir Uddin",
    description:
      "Diabetes specialist with a focus on diet and lifestyle management.",
    hospital: {
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
    name: "Dr. Mahmuda Begum",
    description:
      "Senior Diabetologist with expertise in long-term diabetes care.",
    hospital: {
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
    name: "Dr. Mahbubur Rahman",
    description: "Specialist in Diabetes Mellitus and Metabolic Disorders.",
    hospital: {
      name: "Labaid Specialized Hospital",
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
    name: "Dr. Shahnaz Huda",
    description:
      "Diabetes expert with a focus on patient education and self-management.",
    hospital: {
      name: "Anwar Khan Modern Hospital Dhaka",
      address: "House-17, Road-8,Dhanmondi, Dhaka-1207",
      city: "Dhanmondi",
    },
    availableTimes: "Tue, Thu, Sun: 3 PM - 7 PM",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475421/glucoguide/doctors/doctor_female_6.jpg",
    gender: "female",
    experience: 9,
  },
  {
    name: "Dr. Rezaul Karim",
    description:
      "Experienced Diabetologist specializing in insulin pump therapy.",
    hospital: {
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
    name: "Dr. Samira Haque",
    description:
      "Specializes in the prevention and management of diabetes complications.",
    hospital: {
      name: "Popular Diagnostic Center",
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
    name: "Dr. Harunur Rashid",
    description:
      "Diabetologist with expertise in lifestyle modification and weight management.",
    hospital: {
      name: "Ibne Sina Hospital Dhaka",
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
    name: "Dr. Nazneen Ahmed",
    description: "Senior Endocrinologist focusing on childhood diabetes.",
    hospital: {
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
    name: "Dr. M. Shahidul Islam",
    description:
      "Diabetes and Endocrinology specialist with a focus on geriatric diabetes.",
    hospital: {
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
    name: "Dr. Jannatul Ferdous",
    description:
      "Experienced Diabetologist focusing on women’s health and diabetes.",
    hospital: {
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
    name: "Dr. Anwar Hossain",
    description: "Specialist in Diabetes and Thyroid disorders.",
    hospital: {
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
    name: "Dr. Salma Parveen",
    description: "Diabetes specialist with a focus on maternal diabetes.",
    hospital: {
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
    name: "Dr. Abir Sikder",
    description:
      "Endocrinologist with a focus on insulin therapy and diabetes education.",
    hospital: {
      name: "Popular Diagnostic Center",
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
    name: "Dr. Yasmina Khatun",
    description:
      "Expert in managing complex cases of diabetes with co-existing conditions.",
    hospital: {
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
    name: "Dr. Zakir Shah",
    description:
      "Diabetes specialist with a focus on diet and lifestyle management.",
    hospital: {
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
