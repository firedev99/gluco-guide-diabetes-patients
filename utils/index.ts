// custom function to groupByCategory
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

export const firey = {
  groupByCategory,
}

// const mealData = mealRecommendations.reduce((acc, meal) => {
//   // if the category doesn't exists, create one w an empty array
//   if (!acc[meal.category]) {
//     acc[meal.category] = []
//   } else {
//     // if category does exists then push the items into the array
//     acc[meal.category].push(meal)
//   }
