'use client';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface Props {
  youtubeId: string;
  title: string;
  children: React.ReactNode;
}

export default function YouTubeLightbox({ youtubeId, title, children }: Props) {
  const [open, setOpen] = useState(false);
  const isPlaceholder = youtubeId === 'PLACEHOLDER';

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          style={{ all: 'unset', cursor: isPlaceholder ? 'default' : 'pointer', display: 'block', width: '100%' }}
          disabled={isPlaceholder}
          aria-label={isPlaceholder ? 'Episode coming soon' : `Play: ${title}`}
        >
          {children}
        </button>
      </Dialog.Trigger>

      {!isPlaceholder && (
        <Dialog.Portal>
          <Dialog.Overlay
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              background: 'rgba(15, 27, 46, 0.9)',
              backdropFilter: 'blur(8px)',
              animation: 'fadeIn 150ms ease',
            }}
          />
          <Dialog.Content
            aria-label={title}
            style={{
              position: 'fixed', inset: 0, zIndex: 101,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <div style={{ width: '100%', maxWidth: '900px', position: 'relative' }}>
              <Dialog.Close
                style={{
                  position: 'absolute', top: '-3rem', right: 0,
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'white', fontSize: '1.5rem', opacity: 0.7, padding: '0.5rem',
                }}
                aria-label="Close video"
              >
                ✕
              </Dialog.Close>
              <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: '16px', overflow: 'hidden' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                  title={title}
                  allow="autoplay; fullscreen"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  );
}
