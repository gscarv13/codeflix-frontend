'use client'
// When an error is thrown and we have a file called `error.tsx`
// The error will be captured and the message shown according to what we have defined under error.tsx


import { useState } from "react"

export const ErrorTrigger = () => {
  const [clicked, setClicked] = useState(false)

  if (clicked) {
    throw new Error('error')
  }

  return (
    <div>
      <button
        className="bg-red-500 px-4 py-2 text-white"
        onClick={() => setClicked(true)}
      >
        Error Trigger
      </button>
    </div>
  )
}
