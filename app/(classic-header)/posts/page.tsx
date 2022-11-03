import Link from "next/link";
import { use } from "react";
import { Post } from "../../../pages/api/posts";
import Counter from "../../../components/counter";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default function Posts() {
  const posts: [Post] = use(getPosts());

  return (
    <>
      <h1 className="text-2xl font-bold">Posts</h1>
      <ul className="mt-4 mb-4">
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={post.url}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Counter />
    </>
  );
}
