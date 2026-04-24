'use client';
import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', organisation: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please tell us what you are working on';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/xpqklngo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          organisation: form.organisation,
          email: form.email,
          message: form.message,
          _subject: `New enquiry — ${form.name}${form.organisation ? ' · ' + form.organisation : ''}`,
          _replyto: form.email,
        }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const labelClass = 'cf-label';
  const inputClass = 'cf-input';
  const errorClass = 'cf-error';

  if (status === 'success') {
    return (
      <div className="cf-success" role="alert" aria-live="polite">
        <div className="cf-success-mark" aria-hidden="true">
          <span className="cf-success-glyph">令</span>
        </div>
        <p className="cf-success-headline">Thank you.</p>
        <p className="cf-success-body">
          We have your message. Anil or the right team member will reply within two business days.
        </p>
        <span className="cf-success-rule" aria-hidden="true"></span>
        <p className="cf-success-aside">
          We read every message personally.
        </p>

        <style>{successStyles}</style>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="cf-form">
      <div className="cf-stack">

        <div className="cf-field">
          <label htmlFor="name" className={labelClass}>Name <span aria-hidden="true">*</span></label>
          <input
            id="name" type="text" autoComplete="name"
            aria-required="true" aria-describedby={errors.name ? 'name-error' : undefined}
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className={inputClass + (errors.name ? ' has-error' : '')}
          />
          {errors.name && <p id="name-error" className={errorClass} role="alert">{errors.name}</p>}
        </div>

        <div className="cf-field">
          <label htmlFor="organisation" className={labelClass}>Organisation</label>
          <input
            id="organisation" type="text" autoComplete="organization"
            value={form.organisation}
            onChange={e => setForm(f => ({ ...f, organisation: e.target.value }))}
            className={inputClass}
          />
        </div>

        <div className="cf-field">
          <label htmlFor="email" className={labelClass}>Email <span aria-hidden="true">*</span></label>
          <input
            id="email" type="email" autoComplete="email"
            aria-required="true" aria-describedby={errors.email ? 'email-error' : undefined}
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={inputClass + (errors.email ? ' has-error' : '')}
          />
          {errors.email && <p id="email-error" className={errorClass} role="alert">{errors.email}</p>}
        </div>

        <div className="cf-field">
          <label htmlFor="message" className={labelClass}>How can we help you? <span aria-hidden="true">*</span></label>
          <textarea
            id="message"
            aria-required="true" aria-describedby={errors.message ? 'message-error' : undefined}
            rows={5}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className={inputClass + ' cf-textarea' + (errors.message ? ' has-error' : '')}
          />
          {errors.message && <p id="message-error" className={errorClass} role="alert">{errors.message}</p>}
        </div>

        <div className="cf-submit">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="cf-button"
          >
            <span>{status === 'sending' ? 'Sending…' : 'Send'}</span>
            <span className="cf-arrow" aria-hidden="true">→</span>
          </button>
          {status === 'error' && (
            <p className={errorClass} style={{ marginTop: '0.75rem' }} role="alert">
              The form didn’t send. Please email us directly at info@reiwaconsultancy.in
            </p>
          )}
        </div>

      </div>

      <style>{formStyles}</style>
    </form>
  );
}

const formStyles = `
  .cf-stack { display: flex; flex-direction: column; gap: 2rem; }

  .cf-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ink-subtle);
    margin-bottom: 0.5rem;
  }

  .cf-label > span { color: var(--accent); }

  .cf-input {
    width: 100%;
    padding: 0.75rem 0;
    border: none;
    border-bottom: 1px solid var(--border-strong);
    background: transparent;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: var(--ink);
    outline: none;
    transition: border-bottom-color 200ms cubic-bezier(0.22,1,0.36,1),
                border-bottom-width 200ms cubic-bezier(0.22,1,0.36,1);
  }

  .cf-input:focus {
    border-bottom-color: var(--accent);
    border-bottom-width: 2px;
    padding-bottom: calc(0.75rem - 1px);
  }

  .cf-input.has-error { border-bottom-color: var(--accent); }

  .cf-textarea { resize: vertical; min-height: 120px; font-family: inherit; line-height: 1.6; }

  .cf-error {
    font-size: 0.8125rem;
    color: var(--accent);
    margin-top: 0.5rem;
    font-family: 'Inter', sans-serif;
  }

  .cf-submit { padding-top: 0.5rem; }

  .cf-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.9375rem 1.75rem 0.9375rem 2rem;
    background: var(--canvas-dark);
    color: var(--ink-inverse);
    border: none;
    border-radius: 100px;
    font-family: 'Inter', sans-serif;
    font-size: 0.9375rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: background 200ms cubic-bezier(0.22,1,0.36,1), transform 200ms cubic-bezier(0.22,1,0.36,1);
  }

  .cf-button:hover { background: var(--accent); transform: translateY(-1px); }
  .cf-button:active { transform: translateY(0); }
  .cf-button:disabled { opacity: 0.7; cursor: wait; }

  .cf-arrow { display: inline-block; transition: transform 200ms cubic-bezier(0.22,1,0.36,1); }
  .cf-button:hover .cf-arrow { transform: translateX(4px); }
`;

const successStyles = `
  .cf-success {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .cf-success-mark {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: rgba(192, 57, 43, 0.08);
    border: 1px solid rgba(192, 57, 43, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .cf-success-glyph {
    font-family: 'Noto Serif', serif;
    font-size: 1.375rem;
    color: var(--accent);
    line-height: 1;
  }

  .cf-success-headline {
    font-family: 'Noto Serif', serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--ink);
    letter-spacing: -0.015em;
    margin: 0;
  }

  .cf-success-body {
    font-family: 'Noto Serif', serif;
    font-size: 1.0625rem;
    color: var(--ink-muted);
    line-height: 1.7;
    max-width: 44ch;
    margin: 0;
  }

  .cf-success-rule {
    display: block;
    width: 2.5rem;
    height: 1px;
    background: var(--accent);
    margin: 0.75rem 0 0.25rem;
  }

  .cf-success-aside {
    font-family: 'Noto Serif', serif;
    font-style: italic;
    font-size: 0.9375rem;
    color: var(--ink-subtle);
    margin: 0;
  }
`;
