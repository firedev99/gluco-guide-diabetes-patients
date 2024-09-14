"use client"

import { Icon, SimpleModal, ThemeSwitch } from "@/components"
import Link from "next/link"

type Props = {
  open: boolean
  toggleModal: () => void
  closeModal: () => void
}

export default function ProfileMenu({ open, toggleModal, closeModal }: Props) {
  return (
    <SimpleModal
      open={open}
      closeModal={closeModal}
      className="border dark:border-transparent shadow-md dark:shadow-[inset_0_0_0_1px_rgba(248,248,248,0.2)] px-3 py-2 rounded-lg right-4 top-14 flex flex-col bg-[--primary-white] dark:bg-neutral-800 select-none"
      content={
        <div
          className="w-9 h-9 rounded-full hover:cursor-pointer bg-slate-600"
          onClick={toggleModal}
        />
      }
    >
      <div className="min-w-44 flex flex-col divide-y-2 dark:divide-neutral-700">
        {/* user basic information */}
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="min-w-9 size-9 rounded-full bg-slate-300/75" />
          <div>
            <h3 className="text-sm font-semibold leading-4">Walter White</h3>
            <p className="text-xs font-bold opacity-70">walter@gmail.com</p>
          </div>
        </div>

        {/* route options */}
        <div className="py-1">
          <Link
            href={"/patient/profile"}
            className="w-full flex items-center gap-2 py-2 rounded-md px-2.5 hover:bg-zinc-200/70 dark:hover:bg-neutral-700"
            onClick={closeModal}
          >
            <div>
              <Icon
                name="human-circle"
                className="size-5 opacity-80"
                pathClassName="dark:stroke-neutral-500"
              />
            </div>
            <span className="text-sm font-semibold opacity-80">Profile</span>
          </Link>
          <Link
            href={"/patient/settings"}
            className="w-full flex items-center gap-2 py-2 rounded-md px-2.5 hover:bg-zinc-200/70 dark:hover:bg-neutral-700"
            onClick={closeModal}
          >
            <div>
              <Icon
                name="settings"
                className="size-5 opacity-80"
                pathClassName="dark:stroke-neutral-500"
              />
            </div>
            <span className="text-sm font-semibold opacity-80">Settings</span>
          </Link>
        </div>

        {/* support option and theme switcher */}
        <div className="py-1">
          <ThemeSwitch />
          <button className="w-full flex items-center gap-2 py-2 rounded-md px-2.5 hover:bg-zinc-200/70 dark:hover:bg-neutral-700">
            <div>
              <Icon
                name="two-people"
                className="size-5 opacity-80"
                pathClassName="dark:stroke-neutral-500"
              />
            </div>
            <span className="text-sm font-semibold opacity-80">Support</span>
          </button>
        </div>

        {/* logout */}
        <div className="py-1">
          <button className="w-full flex items-center gap-2 py-2 rounded-md px-2.5 hover:bg-zinc-200/70 dark:hover:bg-neutral-700">
            <div>
              <Icon
                name="logout"
                className="size-5 opacity-80"
                pathClassName="dark:stroke-neutral-500"
              />
            </div>
            <span className="text-sm font-semibold opacity-80">Logout</span>
          </button>
        </div>
      </div>
    </SimpleModal>
  )
}
