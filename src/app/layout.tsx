import './globals.css';

export const metadata = {
  title: 'CodeKrew Waitlist',
  description: 'Build it faster, smarter, and way less overwhelming.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
