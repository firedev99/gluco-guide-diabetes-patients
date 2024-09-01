import { useState } from "react"

type CopyState = "READY" | "SUCCESS" | Error

export const useClipboard = () => {
  const [status, setStatus] = useState<CopyState>("READY")
  const [copyTimeout, setCopyTimeout] =
    useState<ReturnType<typeof setTimeout>>()

  function handleCopyResult(result: CopyState) {
    setStatus(result)
    clearTimeout(copyTimeout)
    setCopyTimeout(setTimeout(() => setStatus("READY"), 2500))
  }

  function copy(valueToCopy: string) {
    if ("clipboard" in navigator) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => handleCopyResult("SUCCESS"))
        .catch((err) => err instanceof Error && handleCopyResult(err))
    } else {
      handleCopyResult(
        new Error("`useClipboard`: Navigation clipboard is not supported")
      )
    }
  }

  return { copy, status }
}
