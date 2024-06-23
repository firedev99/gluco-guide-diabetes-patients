import { IconNames } from "@/types"

type RecommendationProps = {
  type: string
  logo?: IconNames
  name?: string
  time: string
  info: string
  recommended?: { type: string; amount: number; logo?: IconNames }
}

export const recommendations: RecommendationProps[] = [
  {
    type: "exercise",
    logo: "human-jogging",
    name: "Exercise",
    time: "8:00AM-9:00AM",
    info: "Jogging for 45mins",
  },
  {
    type: "medicine",
    name: "Metaformin",
    time: "9:00AM-10:00AM",
    info: "Medication",
    recommended: {
      type: "tablet",
      amount: 1,
      logo: "tablet-pill",
    },
  },
  {
    type: "recommendation",
    time: "9:30AM-11:00AM",
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
    time: "1:30PM-2:30PM",
    logo: "soup-bowl",
    info: "Recommended Breakfast",
    recommended: {
      type: "goal",
      logo: "fire",
      amount: 400,
    },
  },
  {
    type: "exercise",
    logo: "human-cycling",
    name: "Exercise",
    time: "6:30PM-7:30PM",
    info: "Cycling for 60mins",
  },
  {
    type: "exercise",
    logo: "human-yoga",
    name: "Yoga",
    time: "8:30PM-8:50PM",
    info: "Sun Salutation for 20mins",
  },
  {
    type: "exercise",
    logo: "human-yoga",
    name: "Yoga",
    time: "9:00PM-9:10PM",
    info: "Bridge Pose for 10mins",
  },
  {
    type: "medicine",
    name: "Metaformin",
    time: "9:00PM-10:00PM",
    info: "Medication",
    recommended: {
      type: "capsule",
      amount: 1,
      logo: "capsule-pill",
    },
  },
  {
    type: "exercise",
    logo: "human-jogging",
    name: "Exercise",
    time: "8:00AM-9:00AM",
    info: "Jogging for 45mins",
  },
  {
    type: "medicine",
    name: "Metaformin",
    time: "9:00AM-10:00AM",
    info: "Medication",
    recommended: {
      type: "tablet",
      amount: 1,
      logo: "tablet-pill",
    },
  },
  {
    type: "recommendation",
    time: "9:30AM-11:00AM",
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
    time: "1:30PM-2:30PM",
    logo: "soup-bowl",
    info: "Recommended Breakfast",
    recommended: {
      type: "goal",
      logo: "fire",
      amount: 400,
    },
  },
  {
    type: "exercise",
    logo: "human-cycling",
    name: "Exercise",
    time: "6:30PM-7:30PM",
    info: "Cycling for 60mins",
  },
  {
    type: "exercise",
    logo: "human-yoga",
    name: "Yoga",
    time: "8:30PM-8:50PM",
    info: "Sun Salutation for 20mins",
  },
  {
    type: "exercise",
    logo: "human-yoga",
    name: "Yoga",
    time: "9:00PM-9:10PM",
    info: "Bridge Pose for 10mins",
  },
  {
    type: "medicine",
    name: "Metaformin",
    time: "9:00PM-10:00PM",
    info: "Medication",
    recommended: {
      type: "capsule",
      amount: 1,
      logo: "capsule-pill",
    },
  },
]
