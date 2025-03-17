import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-10">
      <ul className="flex items-center justify-center gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </header>
  );
}
