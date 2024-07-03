import { IconNames } from "@/types"

type Props = {
  name: string
  icon: IconNames
  dest?: string
}

export const routeLinks: Props[] = [
  {
    name: "Dashboard",
    icon: "home",
    dest: "/patient/dashboard",
  },
  {
    name: "Diet Management",
    icon: "chart-pie",
    dest: "/patient/diet",
  },
  {
    name: "Doctors",
    icon: "three-people",
    dest: "/hospitals/doctors",
  },
  {
    name: "Appointments",
    icon: "calendar",
    dest: "/patient/appointments",
  },
  {
    name: "Reports",
    icon: "chart-graph",
    dest: "/patient/reports",
  },
  {
    name: "Medications",
    icon: "written-page",
    dest: "/patient/medications",
  },
  {
    name: "Hospitals",
    icon: "heart",
    dest: "/hospitals",
  },
  {
    name: "Settings",
    icon: "settings",
  },
  {
    name: "Help",
    icon: "two-people",
  },
  {
    name: "Logout",
    icon: "logout",
  },
]
