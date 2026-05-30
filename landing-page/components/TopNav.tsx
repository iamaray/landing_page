import Link from "next/link";

export default function TopNav() {
  return (
    <header className="border-b border-neutral-500 bg-white px-6">
      <nav>
        <div className="flex gap-6 text-sm ">
          <Link href="/" className="hover:underline text-black">
            HOME
          </Link>

          <Link href="/blog" className="hover:underline text-black">
            BLOG
          </Link>
        </div>
      </nav>
    </header>
  );
}
