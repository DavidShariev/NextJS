//ДИНАМИЧЕСКАЯ МАРШРУТИЗАЦИЯ: эта страница доступна по всем адресам http://.../posts/[id]

// ДВЕ ФОРМЫ РЕНДЕРИНГА:
// Статическая генерация (рекомендуется) : HTML создается во время сборки и будет повторно использоваться при каждом запросе.
// Рендеринг на стороне сервера : HTML генерируется при каждом запросе .
// async getServerSideProps - рендеринг на стороне сервера

//swr - React хуки для выборки данных
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function SomePost(props) {
  console.log(props);
  const router = useRouter();
  const query = router.query;
  console.log(query.id);

  //выполнение на стороне клиента
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Here is some post</h1>
      <div>
        <h3>{data.title}</h3>
      </div>
    </div>
  );
}

//ПОЛУЧЕНИЕ СТАТИЧНЫХ ДАННЫХ - всегда на сервере
//передает данные в пропсe
// export async function getStaticProps({ params }) {
//   //   const res = await fetch(
//   //     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   //   );
//   //   const post = await res.json();

//   return {
//     props: {
//       //   post,
//       params,
//     },
//   };
// }

//ОБРАБОТКА ПУТЕЙ GETSTATICPATHS
//Использовать с getStaticProps. Нельзя использовать его с getServerSideProps.
// export async function getStaticPaths() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();

//   const paths = posts.map((post) => ({
//     params: { id: "" + post.id },
//   }));

//   return { paths, fallback: false };
// }

export default SomePost;
