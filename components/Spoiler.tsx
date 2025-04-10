export function Spoiler({
  title = 'Show more',
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <details className="border rounded-xl p-4 my-4 group open:shadow-sm">
      <summary className="list-none cursor-pointer text-base font-semibold flex items-center justify-between">
        <span>{title}</span>
        <span className="transition-transform group-open:rotate-180">▼</span>
      </summary>
      <div className="mt-4 text-sm">{children}</div>
    </details>
  );
}
