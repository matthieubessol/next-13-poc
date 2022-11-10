import { Comic_Neue } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

const comic = Comic_Neue({ weight: "400" });

export default function Homepage() {
  return (
    <>
      <Head>
        <meta property="og:image" content="/api/og" />
      </Head>
      <h1 className={`text-2xl ${comic.className}`}>Homepage</h1>
      <Image alt="activity" src="/api/og" width={1200} height={600} />
    </>
  );
}
