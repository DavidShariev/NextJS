import Link from "next/link";

function Posts(props) {
  const posts = props.posts;

  return (
    <div>
      <h1>posts</h1>

      {posts.map((post) => {
        return (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
        );
      })}
    </div>
  );
}

//СЕРВЕРНЫЙ РЕНДЕРИНГ ПРИ ЗАПРОСЕ (SSR)
//использовать getServerSideProps если есть данные, которые должны быть получены во время запроса.
//при ошибке отображается страница 500
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
