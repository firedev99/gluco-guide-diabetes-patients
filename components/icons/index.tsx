import { IconNames } from "@/types"
import {
  BellIcon,
  CalenderIcon,
  ChartGraphIcon,
  ChartPieIcon,
  FireIcon,
  GlucoGuideLogo,
  HeartIcon,
  HeartOrganIcon,
  HomeIcon,
  HumanIcon,
  LogoutIcon,
  RightArrowIcon,
  RotatedArrowIcon,
  SearchIcon,
  SettingsIcon,
  ThreePeopleIcon,
  TwoPeopleIcon,
  UpArrowIcon,
  WeightMachineIcon,
  WrittenPageIcon,
} from "./svg"

type Props = {
  name: IconNames
  className?: string
  pathClassName?: string
}

export default function Icon({ name, className, pathClassName }: Props) {
  switch (name) {
    case "search":
      return <SearchIcon className={className} pathClassName={pathClassName} />

    case "bell":
      return <BellIcon className={className} pathClassName={pathClassName} />

    case "home":
      return <HomeIcon className={className} pathClassName={pathClassName} />

    case "chart-pie":
      return (
        <ChartPieIcon className={className} pathClassName={pathClassName} />
      )

    case "three-people":
      return (
        <ThreePeopleIcon className={className} pathClassName={pathClassName} />
      )

    case "calender":
      return (
        <CalenderIcon className={className} pathClassName={pathClassName} />
      )

    case "chart-graph":
      return (
        <ChartGraphIcon className={className} pathClassName={pathClassName} />
      )

    case "written-page":
      return (
        <WrittenPageIcon className={className} pathClassName={pathClassName} />
      )

    case "heart":
      return <HeartIcon className={className} pathClassName={pathClassName} />

    case "settings":
      return (
        <SettingsIcon className={className} pathClassName={pathClassName} />
      )

    case "two-people":
      return (
        <TwoPeopleIcon className={className} pathClassName={pathClassName} />
      )

    case "logout":
      return <LogoutIcon className={className} pathClassName={pathClassName} />

    case "gluco-guide":
      return <GlucoGuideLogo className={className} />

    case "rotated-arrow":
      return (
        <RotatedArrowIcon className={className} pathClassName={pathClassName} />
      )

    case "fire":
      return <FireIcon className={className} pathClassName={pathClassName} />

    case "human":
      return <HumanIcon className={className} pathClassName={pathClassName} />

    case "heart-organ":
      return (
        <HeartOrganIcon className={className} pathClassName={pathClassName} />
      )

    case "up-arrow":
      return <UpArrowIcon className={className} pathClassName={pathClassName} />

    case "right-arrow":
      return (
        <RightArrowIcon className={className} pathClassName={pathClassName} />
      )

    case "weight-machine":
      return (
        <WeightMachineIcon
          className={className}
          pathClassName={pathClassName}
        />
      )

    default:
      return <div />
  }
}
