type RouteSectionSkeletonProps = {
  className?: string
}

export function RouteSectionSkeleton({
  className = 'min-h-[60vh]',
}: RouteSectionSkeletonProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-6 h-4 w-24 rounded-full bg-slate-200" />
        <div className="mb-4 h-12 max-w-xl rounded-2xl bg-slate-200" />
        <div className="mb-12 h-5 max-w-2xl rounded-xl bg-slate-100" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-56 rounded-3xl bg-white shadow-sm ring-1 ring-slate-100" />
          <div className="h-56 rounded-3xl bg-white shadow-sm ring-1 ring-slate-100" />
          <div className="h-56 rounded-3xl bg-white shadow-sm ring-1 ring-slate-100" />
        </div>
      </div>
    </div>
  )
}
