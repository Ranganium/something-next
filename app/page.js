import Image from "next/image";
import styles from "./page.module.css";
import PostList from "@/components/PostList";

export default async function Home() {
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts` + "?per_page=3",
  );
  const posts = await response.json();

  return (
    <main>
      <h1>Stories from Aarhus</h1>
      <PostList posts={posts} />
    </main>
  );
}
