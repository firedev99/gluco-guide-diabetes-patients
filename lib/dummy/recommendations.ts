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
