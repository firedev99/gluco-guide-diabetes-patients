export type HospitalType = {
  id: string
  name: string
  address: string
  city: string
  imgSrc: string
  description: string
  emails: string[]
  contactNumbers: string[]
  geometry: {
    coordinates: number[]
    type: string
  }
}

export const HOSPITALS: HospitalType[] = [
  {
    id: "f733e9e895b4c4ae6dc6aa1ed0a076fd",
    name: "Square Hospital Dhaka",
    address: "18/F, West Panthapath",
    city: "Panthapath",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/square-hospital.jpg",
    description:
      "Square Hospital is a leading private hospital in Dhaka known for its specialized care and state-of-the-art facilities.",
    emails: ["contact@squarehospital.com", "support@squarehospital.com"],
    contactNumbers: ["+88028214111", "+88029676767"],
    geometry: {
      coordinates: [90.381673, 23.7530335],
      type: "Point",
    },
  },
  {
    id: "f64791b12b465a98d92836a2291a11bf",
    name: "Evercare Hospital Dhaka",
    address: "Plot 81, Block-E, Bashundhara, Dhaka-1229",
    city: "Bashundhara",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/evercare-hospital.jpg",
    description:
      "Apollo Hospitals Dhaka is a renowned multi-specialty hospital known for its advanced medical treatments and patient care.",
    emails: ["appointment@evercaredhaka.com", "info@evercaredhaka.com"],
    contactNumbers: ["+880248008000", "+8801787685678"],
    geometry: {
      coordinates: [90.43126960143593, 23.809932148541805],
      type: "Point",
    },
  },
  {
    id: "f35230226fa2f1d6516aaf554bd1704e",
    name: "Anwar Khan Modern Hospital Dhaka",
    address: "House-17, Road-8,Dhanmondi, Dhaka-1207",
    city: "Dhanmondi",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/anwar-hospital.jpg",
    description:
      "Anwar Khan Modern Hospital is a dedicated facility for cardiac care, offering advanced treatments and surgery.",
    emails: ["info@anwarkhanhospital.org", "cardiac@anwarkhanhospital.org"],
    contactNumbers: ["+88029166663", "+88029150394"],
    geometry: {
      coordinates: [90.382087, 23.74531],
      type: "Point",
    },
  },
  {
    id: "e91b19821aaeb85c6b12fafa5998d5c8",
    name: "United Hospital Limited",
    address: "Plot-15, Road-71, Gulshan-2, Dhaka-1212",
    city: "Gulshan",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/united-hospital.jpg",
    description:
      "United Hospital provides comprehensive healthcare services with a focus on cardiology, oncology, and emergency care.",
    emails: ["info@uhlbd.com"],
    contactNumbers: ["+880258150000"],
    geometry: {
      coordinates: [90.415832, 23.804858],
      type: "Point",
    },
  },
  {
    id: "df27fbaa1361c1990c2b9437dcac69d5",
    name: "Ibne Sina Hospital Dhaka",
    address: "House No. 70, Road-15/A, Dhanmondi, Dhaka-1209",
    city: "Dhanmondi",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/ibn-sina-hospital.jpg",
    description:
      "Ibne Sina Hospital provides a range of healthcare services with a focus on patient satisfaction and quality care.",
    emails: ["info@ibnsinahospital.com", "support@ibnsinahospital.com"],
    contactNumbers: ["+880258048321", "+8801675119999"],
    geometry: {
      coordinates: [90.37276, 23.745001],
      type: "Point",
    },
  },
  {
    id: "04381b26fb57743f044729ab015cbe15",
    name: "Labaid Specialized Hospital",
    address: "House-1, Road-4, Dhanmondi Dhaka-1205",
    city: "Dhanmondi",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/labaid-hospital.jpg",
    description:
      "Labaid Hospital Dhaka is a leading healthcare provider in the country, known for its excellence in cardiology and surgery.",
    emails: ["info@labaidhospital.com", "support@labaidhospital.com"],
    contactNumbers: ["+88029677885", "+8801755566222"],
    geometry: {
      coordinates: [90.383135, 23.741687499999998],
      type: "Point",
    },
  },
  {
    id: "21f2fe0741e23cc2307cace23008ef76",
    name: "Labaid Specialized Hospital",
    address: "House-13/A, Road-35, Gulshan-2, Dhaka-1212",
    city: "Gulshan",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/labaid-hospital.jpg",
    description:
      "Labaid Hospital Dhaka is a leading healthcare provider in the country, known for its excellence in cardiology and surgery.",
    emails: ["info@labaidhospital.com", "support@labaidhospital.com"],
    contactNumbers: ["+88029666825", "+8801755611222"],
    geometry: {
      coordinates: [90.412907, 23.794089],
      type: "Point",
    },
  },
  {
    id: "30d1ecd20fa91380fc8488c23414bf23",
    name: "Popular Diagnostic Center",
    address: "House-16, Road-2, Dhanmondi, Dhaka-1205",
    city: "Dhanmondi",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/popular-hospital.jpg",
    description:
      "Popular Diagnostic Centre is a prominent medical diagnostic and healthcare service provider in Dhaka.",
    emails: ["contact@populardiagnostic.com"],
    contactNumbers: ["+880255071801"],
    geometry: {
      coordinates: [90.381667, 23.739226],
      type: "Point",
    },
  },
  {
    id: "33222cb2c0ff1da1adc212b72fed821a",
    name: "Popular Diagnostic Center",
    address:
      "House-25, Road-07, Sector-04, Jashim Uddin Moar, Uttara, Dhaka-1230",
    city: "Uttara",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/popular-hospital.jpg",
    description:
      "Popular Diagnostic Centre is a prominent medical diagnostic and healthcare service provider in Dhaka.",
    emails: ["contact@populardiagnostic.com"],
    contactNumbers: ["+880255071801"],
    geometry: {
      coordinates: [90.400331, 23.860908],
      type: "Point",
    },
  },
  {
    id: "35a5ba7dbf93d68ebc2e50d5780e1407",
    name: "Ibne Sina Hospital Dhaka",
    address: "Hazi Road, Shiyalbari Moor, 2 Avenue-03, Mirpur-02, Dhaka-1216",
    city: "Mirpur",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/ibn-sina-hospital.jpg",
    description:
      "Ibne Sina Hospital provides a range of healthcare services with a focus on patient satisfaction and quality care.",
    emails: ["info@ibnsinahospital.com", "support@ibnsinahospital.com"],
    contactNumbers: ["+880256048222", "+8801675227777"],
    geometry: {
      coordinates: [90.3622604597759, 23.77844844009768],
      type: "Point",
    },
  },
  {
    id: "3b629bd8be8ed2d25391bcc73618fead",
    name: "Dhaka Medical College",
    address: "Secretariat Road, Shahbag, Dhaka-1000",
    city: "Ramna",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/dhaka-medical.jpg",
    description:
      "Dhaka Medical College Hospital is one of the largest public hospitals in Bangladesh, offering a wide range of healthcare services.",
    emails: ["info@dmch.gov.bd"],
    contactNumbers: ["+88029551156"],
    geometry: {
      coordinates: [90.3975835, 23.7257475],
      type: "Point",
    },
  },
  {
    id: "3d1c6f17ff09fdd58b3a1a9139963605",
    name: "Birdem General Hospital",
    address: "122 Kazi Nazrul Islam Avenue, Shahbag, Dhaka-1000",
    city: "Ramna",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/birdem-hospital.jpg",
    description:
      "BIRDEM General Hospital specializes in diabetes care and is one of the most respected institutions in Dhaka.",
    emails: ["info@birdemhospital.org"],
    contactNumbers: ["+88029557791"],
    geometry: {
      coordinates: [90.396719, 23.73925],
      type: "Point",
    },
  },
  {
    id: "43832151da3d07c84ebabed7296937dc",
    name: "Holy Family Red Crescent Medical College",
    address: "1 Eskatan Garden Road, Ramna, Dhaka-1000",
    city: "Ramna",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/red-crescent-hospital.jpg",
    description:
      "Holy Family Red Crescent Medical College Hospital offers comprehensive healthcare services with a focus on medical education.",
    emails: ["info@hfrcmch.com", "admission@hfrcmch.com"],
    contactNumbers: ["+88029348602", "+8801552015666"],
    geometry: {
      coordinates: [90.401716, 23.746023],
      type: "Point",
    },
  },
  {
    id: "5c345d85ef73a5572b27168d98a42269",
    name: "Mugda Medical College & Hospital",
    address: "Hazi Kadam Ali Road, Mugda, Dhaka-1214",
    city: "Mugda",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/mugda-hospital.jpg",
    description:
      "Mugda Medical College & Hospital is a well-known private hospital in Dhaka offering a wide range of medical services.",
    emails: ["contact@mdchdhaka.com"],
    contactNumbers: ["+88029676035"],
    geometry: {
      coordinates: [90.430053, 23.732472],
      type: "Point",
    },
  },
  {
    id: "7b3c01a5da1580940a59a112ef82a427",
    name: "Badda General Hospital",
    address: "107/2, Uttar Badda, Progoti Sarani, Dhaka-1212",
    city: "Gulshan",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/badda-hospital.jpg",
    description:
      "Badda General Hospital is a private hospital providing healthcare services and medical education.",
    emails: ["info@bdgh.org", "admin@bdgh.org"],
    contactNumbers: ["+88029131515", "+88029145729"],
    geometry: {
      coordinates: [90.425663, 23.784485],
      type: "Point",
    },
  },
  {
    id: "94b3928a260e86e802ed008e87asc92c",
    name: "Impulse Hospital",
    address: "304/E Shaheed Tazuddin Avenue,Tejgaon, Dhaka-1215",
    city: "Tejgaon",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/impulse-hospital.jpg",
    description:
      "Impulse Hospital is a specialized hospital focusing on diabetes care and research.",
    emails: ["info@impulse.org"],
    contactNumbers: ["+880258155672"],
    geometry: {
      coordinates: [90.398749, 23.767836],
      type: "Point",
    },
  },
  {
    id: "94b3928a260e86e802ed008e87cce92c",
    name: "Addin Medical College Hospital",
    address: "2 Bara Maghbazar, Outer Circular Road, Dhaka-1217",
    city: "Ramna",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/addin-medical.jpg",
    description:
      "Ad-Din Hospital offers affordable healthcare services and is known for its maternal and child healthcare programs.",
    emails: ["info@addinhospital.com"],
    contactNumbers: ["+88028311515"],
    geometry: {
      coordinates: [90.405218, 23.748836],
      type: "Point",
    },
  },
  {
    id: "874856f04c692f6be3aeeb245814013c",
    name: "Farazy Hospital",
    address: "House-15, Block-E, Rampura, Dhaka-1219",
    city: "Rampura",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/farazy-hospital.jpg",
    description:
      "Farazy Hospital provides affordable healthcare services to the underserved population of Dhaka.",
    emails: ["info@farazy.org"],
    contactNumbers: ["+880258145923"],
    geometry: {
      coordinates: [90.436169, 23.762542],
      type: "Point",
    },
  },
  {
    id: "8c5ae25b3eefbd15b663be2129787844",
    name: "Famous Specialized Hospital",
    address: "House-05, Block-H, Block-E, Rampura, Dhaka-1219",
    city: "Ramna",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/famous-hospital.jpg",
    description:
      "Famous Specialized Hospital is a leading diabetes treatment facility in Dhaka with state-of-the-art technology.",
    emails: ["info@famous.org", "diabetes@famous.org"],
    contactNumbers: ["+880258167500", "+880258167501"],
    geometry: {
      coordinates: [90.44344942826072, 23.762023795255956],
      type: "Point",
    },
  },
  {
    id: "9e8c8ce98cd93c30b7cd3fd38d2252c8",
    name: "Central Basabo General Hospital",
    address: "127, Central Basabo, Central Bashabo, Sobujbag, Dhaka-1214",
    city: "Basabo",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/basabo-hospital.jpg",
    description:
      "Central Basabo General Hospital is one of the oldest hospitals in Dhaka, offering a variety of healthcare services.",
    emails: ["info@cbgh.org", "contact@info@cbgh.org"],
    contactNumbers: ["+88029679295", "+88029670266"],
    geometry: {
      coordinates: [90.43456630089332, 23.740817551235864],
      type: "Point",
    },
  },
]
