'use client';

import { useState } from 'react';

export default function WaitlistForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message }),
    });
    if (res.ok) {
      onSuccess();
      setEmail('');
      setMessage('');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="p-2 rounded text-white"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <textarea
        placeholder="What would you build with CodeKrew?"
        className="p-2 rounded text-white"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-500 hover:bg-orange-500 text-white py-2 px-4 rounded"
      >
        {loading ? 'Submitting...' : 'Join the Waitlist'}
      </button>
    </form>
  );
}
