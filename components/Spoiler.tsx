export function Spoiler({
    title = 'Show more',
    children,
  }: {
    title?: string
    children: React.ReactNode
  }) {
    return (
      <details className="border border-gray-200 rounded-xl p-4 my-4 bg-gray-50 group open:shadow-sm">
        <summary className="list-none cursor-pointer text-base font-semibold text-gray-800 flex items-center justify-between">
          <span>{title}</span>
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <div className="mt-4 text-sm text-gray-800">
          {children}
        </div>
      </details>
    )
  }
  