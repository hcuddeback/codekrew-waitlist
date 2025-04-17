'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
    <Image src="/codekrew-logo.png" alt="CodeKrew Logo" width={160} height={160} className="mb-6" />
      <h1 className="text-4xl font-bold mb-2 text-center">Join the CodeKrew Waitlist</h1>
      <p className="mb-6 text-center max-w-lg">We&rsquo;re here to help you build it faster, smarter, and way less overwhelming.</p>
      {submitted ? (
        <p className="text-green-400">Thanks for joining! We&rsquo;ll keep you posted.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <input type="email" required placeholder="Enter your email" className="p-2 rounded text-white" value={email} onChange={e => setEmail(e.target.value)} />
          <textarea placeholder="What would you build with CodeKrew?" className="p-2 rounded text-white" value={message} onChange={e => setMessage(e.target.value)} />
          <button className="bg-green-500 text-white py-2 px-4 rounded">Join the Waitlist</button>
        </form>
      )}
    </main>
  );
}
