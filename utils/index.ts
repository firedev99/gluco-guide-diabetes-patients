import { DoctorType } from "@/lib/dummy/doctors"
import { HospitalType } from "@/lib/dummy/hospitals"
import { LocationType } from "@/types"

// generate a string e.g - a, b and c
function makeString(arr: string[]) {
  if (arr.length === 1) return arr[0]
  const last = arr[arr.length - 1]
  const rest = arr.slice(0, arr.length - 1)
  return rest.join(", ") + " and " + last
}

// group by category eg groupByCategory(mealRecommendations, "category")
function groupByCategory<ItemType, K extends keyof ItemType>(
  data: ItemType[],
  key: K
): Record<string, ItemType[]> {
  const res = data.reduce((acc, item) => {
    // extract the key that needs to be categorized
    const category = String(item[key])
    // if the category doesn't exists, create one w an empty array
    if (!acc[category]) {
      acc[category] = []
    }
    // if category does exists then push the items into the array
    acc[category].push(item)
    return acc || []
  }, {} as Record<string, ItemType[]>)

  return res
}

// generate an id
function getID(): string {
  return Math.random().toString(36).slice(2)
}

// get a unique array eg - getUniqueArr(data.map((item) => item.name))
// function getSpecificArr<ItemType, K extends keyof ItemType>(
//   data: ItemType[],
//   key: K | [K, ...(keyof ItemType[K])[]]
// ): (ItemType | ItemType[K])[] {
//   const res = data.map((item) => {
//     if (Array.isArray(key)) {
//       return key.reduce((acc, key) => (acc as any)[key], item)
//     } else {
//       return item[key]
//     }
//   })

//   return Array.from(new Set(res))
// }

// e.g - getSpecificArr(data.map((item) => item.name)) (simple)
function getSpecificArr<ItemType>(data: ItemType[]): ItemType[] {
  return Array.from(data.reduce((set, e) => set.add(e), new Set<ItemType>()))
}

// convert minutes to `h:m` format
function convertMinToHourMinFormat(duration: number) {
  const hours = duration / 60
  const convertedHours = Math.floor(hours)
  const mins = Math.round((hours - convertedHours) * 60)

  return `${convertedHours}h ${mins}m`
}

// custom type checker
function isDoctorType(item: any): item is DoctorType {
  return (item as DoctorType).gender !== undefined
}

function isHospitalLocationType(item: any): item is LocationType {
  return (item as LocationType).cityName !== undefined
}

function isHospitalType(item: any): item is HospitalType {
  return (item as HospitalType).geometry !== undefined
}

export const firey = {
  groupByCategory,
  convertMinToHourMinFormat,
  getSpecificArr,
  getID,
  makeString,
  isDoctorType,
  isHospitalType,
  isHospitalLocationType,
}
