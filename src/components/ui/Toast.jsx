export function Toast({ message, onDismiss }) {
    return (<div className="fixed bottom-5 right-5 z-40 flex max-w-sm items-center gap-4 rounded-md border border-route-100 bg-route-700 px-4 py-3 text-sm font-semibold text-white shadow-soft">
      <span>{message}</span>
      <button className="rounded border border-white/40 px-2 py-1 text-xs" onClick={onDismiss} type="button">
        Dismiss
      </button>
    </div>);
}
