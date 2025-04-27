import Buttons from '@/components/Buttons';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>titile</h1>
      <Buttons />
      <Link href="/about">hello</Link>
    </div>
  );
}
