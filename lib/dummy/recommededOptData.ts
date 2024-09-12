import { firey } from "@/utils"

type DietCategoryOptions = {
  activity: number
  water: number
  sleep: number
}

type RecommendedCalories = {
  breakfast: number
  lunch: number
  snacks: number
  dinner: number
}

type DietOptionProps = {
  title: string
  imgSrc: string
  position: "top" | "bottom"
  info?: string
  size: "smaller" | "larger"
}

type PartOfDayProps = {
  status: string
  calories: number
  start: number
  end: number
}

export function partsOfDay({
  breakfast,
  lunch,
  snacks,
  dinner,
}: RecommendedCalories): PartOfDayProps[] {
  return [
    {
      status: "breakfast",
      calories: breakfast,
      start: 0,
      end: 11,
    },
    {
      status: "lunch",
      calories: lunch,
      start: 12,
      end: 16,
    },
    {
      status: "snacks",
      calories: snacks,

      start: 17,
      end: 19,
    },
    {
      status: "dinner",
      calories: dinner,
      start: 20,
      end: 23,
    },
  ]
}

export function recommendedCategoryOptions({
  activity,
  water,
  sleep,
}: DietCategoryOptions): DietOptionProps[] {
  return [
    {
      title: "daily activity",
      imgSrc:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-activity.png",
      position: "top",
      info: firey.convertMinToHourMinFormat(activity),
      size: "smaller",
    },
    {
      title: "daily water",
      imgSrc:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-water.png",
      position: "top",
      info: `${water} cups`,
      size: "smaller",
    },
    {
      title: "sleep duration",
      imgSrc:
        "https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-sleep.png",
      position: "top",
      info: firey.convertMinToHourMinFormat(sleep),
      size: "larger",
    },
  ] as DietOptionProps[]
}
