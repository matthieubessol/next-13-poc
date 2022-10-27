import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { Carousel } from "../../pages/api/carousels";

async function getCarousels() {
  const res = await fetch("http://localhost:3001/api/carousels");
  return res.json();
}

export default function ClassicHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const carousels: [Carousel] = use(getCarousels());

  return (
    <body>
      <header className="bg-green-800 p-4 flex gap-10">
        <span>Header classique</span>
        <nav className="gap-2 flex">
          <Link className="c-blue underline" href="/">
            Home
          </Link>
          <Link className="c-blue underline" href="/posts">
            Posts
          </Link>
        </nav>
      </header>
      <main className="p-4">
        <ul className="flex gap-4 mb-4">
          {carousels.map((carousel: Carousel) => (
            <li key={carousel.id}>
              <Image
                alt="carousel 1"
                className="max-w-full"
                src={carousel.image}
                width={500}
                height={500}
              />
            </li>
          ))}
        </ul>
        {children}
      </main>
    </body>
  );
}
