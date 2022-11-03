import { Comic_Neue } from "@next/font/google";

const comic = Comic_Neue({ weight: "400" });

export default function Homepage() {
  return <h1 className={`text-2xl ${comic.className}`}>Homepage</h1>;
}
