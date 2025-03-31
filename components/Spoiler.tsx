import { useState } from 'react'

export function Spoiler({
  title = 'Show more',
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl p-4 my-4 bg-gray-50">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between cursor-pointer select-none"
      >
        <span className="text-base font-semibold text-gray-800">{title}</span>
        <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </div>
      {open && <div className="mt-4 text-sm text-gray-800">{children}</div>}
    </div>
  )
}