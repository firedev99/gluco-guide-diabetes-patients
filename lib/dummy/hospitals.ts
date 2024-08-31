export type HospitalType = {
  id: string
  type: string
  properties: {
    name: string
    address: string
    city: string
    img_src: string
  }
  geometry: {
    coordinates: number[]
    type: string
  }
}

export const HOSPITALS: HospitalType[] = [
  {
    id: "f733e9e895b4c4ae6dc6aa1ed0a076fd",
    type: "Feature",
    properties: {
      name: "Square Hospital Dhaka",
      address: "18/F, West Panthapath",
      city: "Panthapath",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/square-hospital.jpg",
    },
    geometry: {
      coordinates: [90.381673, 23.7530335],
      type: "Point",
    },
  },
  {
    id: "f64791b12b465a98d92836a2291a11bf",
    type: "Feature",
    properties: {
      name: "Evercare Hospital Dhaka",
      address: "Plot 81, Block-E, Bashundhara, Dhaka-1229",
      city: "Bashundhara",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/evercare-hospital.jpg",
    },
    geometry: {
      coordinates: [90.43126960143593, 23.809932148541805],
      type: "Point",
    },
  },
  {
    id: "f35230226fa2f1d6516aaf554bd1704e",
    type: "Feature",
    properties: {
      name: "Anwar Khan Modern Hospital Dhaka",
      address: "House-17, Road-8,Dhanmondi, Dhaka-1207",
      city: "Dhanmondi",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/anwar-hospital.jpg",
    },
    geometry: {
      coordinates: [90.382087, 23.74531],
      type: "Point",
    },
  },
  {
    id: "e91b19821aaeb85c6b12fafa5998d5c8",
    type: "Feature",
    properties: {
      name: "United Hospital Limited",
      address: "Plot-15, Road-71, Gulshan-2, Dhaka-1212",
      city: "Gulshan",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/united-hospital.jpg",
    },
    geometry: {
      coordinates: [90.415832, 23.804858],
      type: "Point",
    },
  },
  {
    id: "df27fbaa1361c1990c2b9437dcac69d5",
    type: "Feature",
    properties: {
      name: "Ibne Sina Hospital Dhaka",
      address: "House No. 70, Road-15/A, Dhanmondi, Dhaka-1209",
      city: "Dhanmondi",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/ibn-sina-hospital.jpg",
    },
    geometry: {
      coordinates: [90.37276, 23.745001],
      type: "Point",
    },
  },
  {
    id: "04381b26fb57743f044729ab015cbe15",
    type: "Feature",
    properties: {
      name: "Labaid Specialized Hospital",
      address: "House-1, Road-4, Dhanmondi Dhaka-1205",
      city: "Dhanmondi",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/labaid-hospital.jpg",
    },
    geometry: {
      coordinates: [90.383135, 23.741687499999998],
      type: "Point",
    },
  },
  {
    id: "21f2fe0741e23cc2307cace23008ef76",
    type: "Feature",
    properties: {
      name: "Labaid Specialized Hospital",
      address: "House-13/A, Road-35, Gulshan-2, Dhaka-1212",
      city: "Gulshan",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/labaid-hospital.jpg",
    },
    geometry: {
      coordinates: [90.412907, 23.794089],
      type: "Point",
    },
  },
  {
    id: "30d1ecd20fa91380fc8488c23414bf23",
    type: "Feature",
    properties: {
      name: "Popular Diagnostic Center",
      address: "House-16, Road-2, Dhanmondi, Dhaka-1205",
      city: "Dhanmondi",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/popular-hospital.jpg",
    },
    geometry: {
      coordinates: [90.381667, 23.739226],
      type: "Point",
    },
  },
  {
    id: "33222cb2c0ff1da1adc212b72fed821a",
    type: "Feature",
    properties: {
      name: "Popular Diagnostic Center",
      address:
        "House-25, Road-07, Sector-04, Jashim Uddin Moar, Uttara, Dhaka-1230",
      city: "Uttara",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/popular-hospital.jpg",
    },
    geometry: {
      coordinates: [90.400331, 23.860908],
      type: "Point",
    },
  },
  {
    id: "35a5ba7dbf93d68ebc2e50d5780e1407",
    type: "Feature",
    properties: {
      name: "Ibne Sina Hospital Dhaka",
      address: "Hazi Road, Shiyalbari Moor, 2 Avenue-03, Mirpur-02, Dhaka-1216",
      city: "Mirpur",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/ibn-sina-hospital.jpg",
    },
    geometry: {
      coordinates: [90.3622604597759, 23.77844844009768],
      type: "Point",
    },
  },
  {
    id: "3b629bd8be8ed2d25391bcc73618fead",
    type: "Feature",
    properties: {
      name: "Dhaka Medical College",
      address: "Secretariat Road, Shahbag, Dhaka-1000",
      city: "Ramna",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/dhaka-medical.jpg",
    },
    geometry: {
      coordinates: [90.3975835, 23.7257475],
      type: "Point",
    },
  },
  {
    id: "3d1c6f17ff09fdd58b3a1a9139963605",
    type: "Feature",
    properties: {
      name: "Birdem General Hospital",
      address: "122 Kazi Nazrul Islam Avenue, Shahbag, Dhaka-1000",
      city: "Ramna",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/birdem-hospital.jpg",
    },
    geometry: {
      coordinates: [90.396719, 23.73925],
      type: "Point",
    },
  },
  {
    id: "43832151da3d07c84ebabed7296937dc",
    type: "Feature",
    properties: {
      name: "Holy Family Red Crescent Medical College",
      address: "1 Eskatan Garden Road, Ramna, Dhaka-1000",
      city: "Ramna",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/red-crescent-hospital.jpg",
    },
    geometry: {
      coordinates: [90.401716, 23.746023],
      type: "Point",
    },
  },
  {
    id: "5c345d85ef73a5572b27168d98a42269",
    type: "Feature",
    properties: {
      name: "Mugda Medical College & Hospital",
      address: "Hazi Kadam Ali Road, Mugda, Dhaka-1214",
      city: "Mugda",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/mugda-hospital.jpg",
    },
    geometry: {
      coordinates: [90.430053, 23.732472],
      type: "Point",
    },
  },
  {
    id: "7b3c01a5da1580940a59a112ef82a427",
    type: "Feature",
    properties: {
      name: "Badda General Hospital",
      address: "107/2, Uttar Badda, Progoti Sarani, Dhaka-1212",
      city: "Gulshan",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/badda-hospital.jpg",
    },
    geometry: {
      coordinates: [90.425663, 23.784485],
      type: "Point",
    },
  },
  {
    id: "94b3928a260e86e802ed008e87asc92c",
    type: "Feature",
    properties: {
      name: "Impulse Hospital",
      address: "304/E Shaheed Tazuddin Avenue,Tejgaon, Dhaka-1215",
      city: "Tejgaon",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/impulse-hospital.jpg",
    },
    geometry: {
      coordinates: [90.398749, 23.767836],
      type: "Point",
    },
  },
  {
    id: "94b3928a260e86e802ed008e87cce92c",
    type: "Feature",
    properties: {
      name: "Addin Medical College Hospital",
      address: "2 Bara Maghbazar, Outer Circular Road, Dhaka-1217",
      city: "Ramna",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/addin-medical.jpg",
    },
    geometry: {
      coordinates: [90.405218, 23.748836],
      type: "Point",
    },
  },
  {
    id: "874856f04c692f6be3aeeb245814013c",
    type: "Feature",
    properties: {
      name: "Farazy Hospital",
      address: "House-15, Block-E, Rampura, Dhaka-1219",
      city: "Rampura",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/farazy-hospital.jpg",
    },
    geometry: {
      coordinates: [90.436169, 23.762542],
      type: "Point",
    },
  },
  {
    id: "8c5ae25b3eefbd15b663be2129787844",
    type: "Feature",
    properties: {
      name: "Famous Specialized Hospital",
      address: "House-05, Block-H, Block-E, Rampura, Dhaka-1219",
      city: "Ramna",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/famous-hospital.jpg",
    },
    geometry: {
      coordinates: [90.44344942826072, 23.762023795255956],
      type: "Point",
    },
  },
  {
    id: "9e8c8ce98cd93c30b7cd3fd38d2252c8",
    type: "Feature",
    properties: {
      name: "Central Basabo General Hospital",
      address: "127, Central Basabo, Central Bashabo, Sobujbag, Dhaka-1214",
      city: "Basabo",
      img_src:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1725012552/glucoguide/hospitals/basabo-hospital.jpg",
    },
    geometry: {
      coordinates: [90.43456630089332, 23.740817551235864],
      type: "Point",
    },
  },
]
