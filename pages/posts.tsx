import { GetServerSideProps } from 'next'
import Link from 'next/link';

import { FC } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  
  //запрос к польлзовательскому API
  const data_users = await fetch("http://localhost:3000/api/users");
  const users = await data_users.json();

  const me_data = await fetch("http://localhost:3000/api/users/1");
  const me = await me_data.json();

  return {
    props: {
      posts,
      users,
      me
    },
  };
}

type postType = {
    userId: number,
    id: number,
    title: string,
    body: string
}
type userType = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  }
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }

}

interface IProps{
    posts: postType[],
    users: userType[],
    me: userType
}

const Posts: FC<IProps> = ({posts, users, me}) => {
    return(<div>
        <h2>Posts</h2>
        <h3>My Name: {me.name}</h3>
        {posts.map((post: postType) => {
          const user = users.filter( user => {
            return (+user.id === +post.userId);
          })[0];
          return(
            <Link key={post.id} href={`/${post.id}`}>
              <div>
                <h3>{post.title}</h3>
                <p>author: {user.name}</p>
              </div>
            </Link>)
        })}
    </div>)
}

export default Posts;