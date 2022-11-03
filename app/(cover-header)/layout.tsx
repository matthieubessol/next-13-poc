import Link from "next/link";

export default function CoverHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-gray-800 p-4 flex gap-10">
        <span>Header cover</span>
        <nav className="gap-2 flex" >
          <Link className="c-blue underline" href="/">Home</Link>
          <Link className="c-blue underline" href="/posts">Posts</Link>
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </>
  );
}
