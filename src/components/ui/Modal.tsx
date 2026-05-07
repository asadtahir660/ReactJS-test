import { ReactNode, useEffect } from 'react';
import { Button } from './Button';

type ModalProps = {
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export function Modal({ title, children, open, onClose }: ModalProps) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/45 px-4 py-6">
      <div className="w-full max-w-lg rounded-lg bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="text-lg font-bold text-ink">{title}</h2>
          <Button className="min-h-9 px-3 py-1.5" onClick={onClose} variant="ghost">
            Close
          </Button>
        </div>
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
}
