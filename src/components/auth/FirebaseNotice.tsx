import { isFirebaseConfigured } from '../../lib/firebase';

export function FirebaseNotice() {
  if (isFirebaseConfigured) {
    return null;
  }

  return (
    <div className="mb-5 rounded-md border border-signal/50 bg-[#fff8df] px-4 py-3 text-sm leading-6 text-ink">
      Firebase config is missing. Add your Firebase web app values in a local <strong>.env</strong> file using
      <strong> .env.example</strong> as the template.
    </div>
  );
}
