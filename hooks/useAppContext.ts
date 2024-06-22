import { useContext } from "react"
import { AppContext } from "@/app/providers"

export const useAppContext = () => {
  const context = useContext(AppContext)

  return context
}
