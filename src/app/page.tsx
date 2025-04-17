'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';
import WaitlistForm from '@/components/Form';
import ScoutPopup from '@/components/ScoutPopup';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white">
      <Logo />
      <h1 className="text-4xl font-bold mb-2 text-center">Join the CodeKrew Waitlist</h1>
      <p className="mb-6 text-center max-w-lg text-gray-300">
        We’re here to help you build it faster, smarter, and way less overwhelming.
      </p>
      <WaitlistForm onSuccess={() => setShowPopup(true)} />
      <ScoutPopup show={showPopup} onClose={() => setShowPopup(false)} />
    </main>
  );
}
