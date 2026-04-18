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

    // Submission intentionally unwired — wire to Formspree when ready
    await new Promise(r => setTimeout(r, 600));
    setStatus('success');
  }

  const fieldStyle = (hasError: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '0.75rem 0',
    border: 'none',
    borderBottom: `1px solid ${hasError ? 'var(--accent)' : 'var(--border)'}`,
    background: 'transparent',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    color: 'var(--ink)',
    outline: 'none',
    transition: 'border-color 150ms ease',
  });

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--ink-subtle)',
    marginBottom: '0.25rem',
  };

  const errorStyle: React.CSSProperties = {
    fontSize: '0.8125rem',
    color: 'var(--accent)',
    marginTop: '0.375rem',
    fontFamily: 'Inter, sans-serif',
  };

  if (status === 'success') {
    return (
      <div style={{ padding: '1rem 0' }} role="alert" aria-live="polite">
        <p style={{ fontFamily: 'Noto Serif, serif', fontSize: '1.0625rem', color: 'var(--ink)', lineHeight: 1.7 }}>
          Thank you. We will reply within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div>
          <label htmlFor="name" style={labelStyle}>Name <span aria-hidden="true">*</span></label>
          <input
            id="name" type="text" autoComplete="name"
            aria-required="true" aria-describedby={errors.name ? 'name-error' : undefined}
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            onFocus={e => { e.target.style.borderBottomColor = 'var(--accent)'; }}
            onBlur={e => { e.target.style.borderBottomColor = errors.name ? 'var(--accent)' : 'var(--border)'; }}
            style={fieldStyle(!!errors.name)}
          />
          {errors.name && <p id="name-error" style={errorStyle} role="alert">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="organisation" style={labelStyle}>Organisation</label>
          <input
            id="organisation" type="text" autoComplete="organization"
            value={form.organisation}
            onChange={e => setForm(f => ({ ...f, organisation: e.target.value }))}
            onFocus={e => { e.target.style.borderBottomColor = 'var(--accent)'; }}
            onBlur={e => { e.target.style.borderBottomColor = 'var(--border)'; }}
            style={fieldStyle(false)}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>Email <span aria-hidden="true">*</span></label>
          <input
            id="email" type="email" autoComplete="email"
            aria-required="true" aria-describedby={errors.email ? 'email-error' : undefined}
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            onFocus={e => { e.target.style.borderBottomColor = 'var(--accent)'; }}
            onBlur={e => { e.target.style.borderBottomColor = errors.email ? 'var(--accent)' : 'var(--border)'; }}
            style={fieldStyle(!!errors.email)}
          />
          {errors.email && <p id="email-error" style={errorStyle} role="alert">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" style={labelStyle}>What are you working on? <span aria-hidden="true">*</span></label>
          <textarea
            id="message"
            aria-required="true" aria-describedby={errors.message ? 'message-error' : undefined}
            rows={5}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            onFocus={e => { e.target.style.borderBottomColor = 'var(--accent)'; }}
            onBlur={e => { e.target.style.borderBottomColor = errors.message ? 'var(--accent)' : 'var(--border)'; }}
            style={{ ...fieldStyle(!!errors.message), resize: 'vertical', minHeight: '120px' }}
          />
          {errors.message && <p id="message-error" style={errorStyle} role="alert">{errors.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              padding: '0.875rem 2rem',
              background: 'var(--canvas-dark)',
              color: 'var(--ink-inverse)',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              fontWeight: 500,
              cursor: status === 'sending' ? 'wait' : 'pointer',
              opacity: status === 'sending' ? 0.7 : 1,
              transition: 'opacity 150ms ease',
            }}
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
          {status === 'error' && (
            <p style={{ ...errorStyle, marginTop: '0.75rem' }} role="alert">
              Something went wrong. Please email us directly at info@reiwaconsultancy.in
            </p>
          )}
        </div>

      </div>
    </form>
  );
}
