"use client"

import { Button, Icon, Modal } from "@/components"
import { useClipboard } from "@/hooks/useClipboard"
import React, { useState } from "react"

type Props = {
  contactNumbers: string[]
  emails: string[]
}

export default function ContactInformation({ contactNumbers, emails }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [active, setActive] = useState<"mail" | "call" | null>(null)
  const [info, setInfo] = useState<string>("")

  const clipboard = useClipboard()

  // handle phone call process
  function handleCall(contact: string) {
    if (typeof window !== "undefined") {
      window.open(`tel:${contact}`)
    }
  }

  // handle email process
  function handleEmail(email: string) {
    if (typeof window !== "undefined") {
      window.open(`mailto:${email}`)
    }
  }

  // handle modal based on type
  function handleModal(type: "mail" | "call", info: string) {
    setIsOpen(true)
    setActive(type)
    setInfo(info)
  }

  function handleCopy() {
    if (info.length === 0) return
    clipboard.copy(info)
  }

  return (
    <React.Fragment>
      <div className="flex flex-col mt-3 items-center">
        {contactNumbers.map((number, idx) => (
          <button
            key={`${emails[0]}-contact-${idx}`}
            className="text-sm font-semibold opacity-70 max-w-fit"
            onClick={() => handleModal("call", number)}
          >
            {number}
          </button>
        ))}
        {emails.map((email, idx) => (
          <button
            key={`${contactNumbers[0]}-email-${idx}`}
            className="text-sm font-semibold opacity-70 max-w-fit"
            onClick={() => handleModal("mail", email)}
          >
            {email}
          </button>
        ))}
      </div>
      {/* open contact */}
      <Modal
        className="w-full max-w-[420px] center"
        open={isOpen}
        handler={() => setIsOpen(false)}
        direction="center"
      >
        <div className="flex gap-4">
          <Button className="center my-4 w-28" onClick={handleCopy}>
            {clipboard.status === "SUCCESS" ? (
              <div>
                <Icon name="copied-clipboard" className="size-5" />
              </div>
            ) : (
              <div>
                <Icon name="blank-clipboard" className="size-5" />
              </div>
            )}

            <span>{clipboard.status === "SUCCESS" ? "Copied" : "Copy"}</span>
          </Button>
          <Button
            className="center my-4 w-28"
            onClick={() =>
              active === "call" ? handleCall(info) : handleEmail(info)
            }
          >
            <Icon
              name={active === "call" ? "phone" : "mail"}
              className="size-5"
            />
            <span>{active === "call" ? `Call` : `Mail`}</span>
          </Button>
        </div>
      </Modal>
    </React.Fragment>
  )
}
