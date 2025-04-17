import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center justify-center mb-6">
      <Image src="/codekrew-logo.png" alt="CodeKrew Logo" width={160} height={160} />
    </div>
  );
}
