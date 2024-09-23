export const bloodGlucoseData = [
  {
    name: "12AM",
    glucose: 98,
  },
  {
    name: "9AM",
    glucose: 124,
  },
  {
    name: "3PM",
    glucose: 104,
  },
  {
    name: "6PM",
    glucose: 136,
  },
]

export const systolicPressureData = [
  { systolic: 120, day: "Sunday" },
  { systolic: 129, day: "Monday" },
  { systolic: 132, day: "Tuesday" },
  { systolic: 136, day: "Wednesday" },
  { systolic: 140, day: "Thursday" },
  { systolic: 131, day: "Friday" },
  { systolic: 128, day: "Saturday" },
]

export const diastolicPressureData = [
  { diastolic: 80, day: "Sunday" },
  { diastolic: 82, day: "Monday" },
  { diastolic: 86, day: "Tuesday" },
  { diastolic: 85, day: "Wednesday" },
  { diastolic: 80, day: "Thursday" },
  { diastolic: 83, day: "Friday" },
  { diastolic: 82, day: "Saturday" },
]

export const monitorings = [
  {
    name: "Blood Glucose",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1726370195/glucoguide/eshvpjc2piantofgo7un.png",
    value: "128",
    unit: "mg/dL",
    details: [
      {
        time: "12/9/2024, 9PM",
        value: 98,
      },
      {
        time: "12/9/2024, 12PM",
        value: 124,
      },
      {
        time: "12/9/2024, 3PM",
        value: 104,
      },
      {
        time: "12/9/2024, 6PM",
        value: 136,
      },
      {
        time: "12/9/2024, 10PM",
        value: 133,
      },
    ],
    time: "12/9/2024",
  },
  {
    name: "Blood Pressure",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1726370195/glucoguide/jscxzd0bo8vv6d764qpx.png",
    value: "128/73",
    unit: "mmHg",
    details: [
      {
        type: "systolic",
        data: [
          { value: 120, time: "3/9/2024, 10PM" },
          { value: 129, time: "5/9/2024, 4PM" },
          { value: 132, time: "6/9/2024, 2PM" },
          { value: 136, time: "7/9/2024, 10PM" },
          { value: 140, time: "9/9/2024, 8PM" },
          { value: 131, time: "12/9/2024, 9AM" },
          { value: 128, time: "13/9/2024, 10PM" },
        ],
      },
      {
        type: "diastolic",
        data: [
          { value: 80, time: "3/9/2024, 2PM" },
          { value: 82, time: "6/9/2024, 4PM" },
          { value: 86, time: "7/9/2024, 2PM" },
          { value: 85, time: "8/9/2024, 8PM" },
          { value: 80, time: "9/9/2024, 10PM" },
          { value: 83, time: "10/9/2024, 7PM" },
          { value: 82, time: "12/9/2024, 10PM" },
        ],
      },
    ],
  },
  {
    name: "Body Temperature",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1726370196/glucoguide/ifpjprzgo13nqq9kvzjp.png",
    value: "37",
    unit: "°C",
    time: "12/08/2024",
  },
  {
    name: "Blood Oxygen",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1726370195/glucoguide/nk5rlea21apu50ub5n3o.png",
    value: "100",
    unit: "%",
    time: "12/08/2024",
  },
  {
    name: "Weight",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1726370196/glucoguide/aezltcsbzbxeruqxq2bb.png",
    value: "154",
    time: "12/08/2024",
    unit: "lb",
  },
  {
    name: "BMI",
    imgSrc:
      "https://res.cloudinary.com/dwhlynqj3/image/upload/v1726370196/glucoguide/s4abov7lx5ukj7lmygik.png",
    value: "22.3",
    time: "12/08/2024",
  },
]

export type TYPEMONITORING = typeof monitorings

export const hours = [
  "8AM",
  "10AM",
  "12PM",
  "2PM",
  "4PM",
  "6PM",
  "8PM",
  "10PM",
  "12AM",
]
