import { IconNames } from "@/types"

type RecommendationProps = {
  type: string
  logo?: IconNames
  name?: string
  start: string
  end: string
  info: string
  recommended?: {
    type: string
    quantity?: number
    amount?: number
    note?: string
    logo?: IconNames
  }
}

export const recommendations: RecommendationProps[] = [
  {
    type: "exercise",
    name: "Jogging",
    start: "8:00AM",
    end: "8:45AM",
    logo: "human-jogging",
    info: "Jogging for 45mins",
  },
  {
    type: "medicine",
    name: "Metaformin",
    start: "9:00AM",
    end: "10:00AM",
    info: "Medication",
    logo: "tablet-pill",
    recommended: {
      type: "tablet",
      quantity: 1,
      note: "before lunch",
    },
  },
  {
    type: "recommendation",
    start: "9:30AM",
    end: "11:00AM",
    logo: "soup-bowl",
    info: "Recommended Breakfast",
    recommended: {
      type: "goal",
      logo: "fire",
      amount: 400,
    },
  },
  {
    type: "recommendation",
    start: "1:30PM",
    end: "2:30PM",
    logo: "soup-bowl",
    info: "Recommended Breakfast",
    recommended: {
      type: "goal",
      logo: "fire",
      amount: 1200,
    },
  },
  {
    type: "exercise",
    logo: "human-cycling",
    name: "Cycling",
    start: "6:30PM",
    end: "7:30PM",
    info: "Cycling for 60mins",
  },
  {
    type: "exercise",
    logo: "human-yoga",
    name: "Yoga",
    start: "8:30PM",
    end: "8:50PM",
    info: "Sun Salutation for 20mins",
  },
  {
    type: "exercise",
    logo: "human-yoga",
    name: "Yoga",
    start: "9:00PM",
    end: "9:10PM",
    info: "Bridge Pose for 10mins",
  },
  {
    type: "medicine",
    name: "Glucovance",
    start: "9:00PM",
    end: "10:00PM",
    info: "Medication",
    logo: "capsule-pill",
    recommended: {
      type: "capsule",
      quantity: 1,
      note: "after dinner",
    },
  },
]

export type TYPERECOMMENDATIONS = {
  id: string
  patientId: string
  appointmentId?: string
  primaryGoal?: string
  medications?: {
    medicine: { name: string; amount: number; times: string[] }[]
    expiry: number
  }
  dietary: {
    time: "breakfast" | "lunch" | "dinner" | "snacks"
    energy: number
  }[]
  nutritions: {
    name: "protein" | "fat" | "carbs"
    amount: number
  }[]
  energyGoal: number
  hydration: string
  sleep: string
  exercises?: {
    name: string
    times: ("morning" | "afternoon" | "evening" | "night" | "morning")[]
    duration: string
  }[]
  monitoring?: { name: string; times: string }[]
  expiry: number
  restrictions: string[]
  generatedBy: "doctor" | "app"
  recommendedIngredients: string[]
}

export const RECOMMENDATIONS: TYPERECOMMENDATIONS[] = [
  {
    id: "",
    patientId: "",
    appointmentId: "liqm7c7ivo",
    primaryGoal: "Manage weight and improve overall metabolic health.",
    medications: {
      medicine: [
        { name: "Metformin 500mg", amount: 1, times: ["morning"] },
        { name: "Vitamin D", amount: 1, times: ["morning", "night"] },
      ],
      expiry: 15,
    },
    dietary: [
      {
        time: "breakfast",
        energy: 580,
      },
      {
        time: "lunch",
        energy: 700,
      },
      {
        time: "snacks",
        energy: 120,
      },
      {
        time: "dinner",
        energy: 700,
      },
    ],
    nutritions: [
      { name: "protein", amount: 50 },
      { name: "fat", amount: 78 },
      { name: "carbs", amount: 275 },
    ],
    energyGoal: 2100,
    hydration: "8",
    sleep: "7-8",
    exercises: [
      { name: "Running", times: ["morning", "evening"], duration: "30-45mins" },
      { name: "Rowing", times: ["morning"], duration: "15-20mins" },
      { name: "Play Tennis", times: ["evening"], duration: "1-2hrs" },
      { name: "Cycling", times: ["evening"], duration: "40-50mins" },
    ],
    monitoring: [
      { name: "Track blood glucose level", times: "daily" },
      { name: "Regular weigh-ins", times: "every week" },
    ],
    expiry: 30,
    restrictions: ["Sugar", "Refined carbs"],
    recommendedIngredients: ["berries", "bananas", "nuts", "avacado", "eggs"],
    generatedBy: "doctor",
  },
]
