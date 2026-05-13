export function Spinner({ label = 'Loading' }) {
    return (<div className="flex items-center gap-3 text-sm font-semibold text-muted">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-line border-t-route-600"/>
      <span>{label}</span>
    </div>);
}
