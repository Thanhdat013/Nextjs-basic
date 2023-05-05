import { GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

export interface PostProps {
  posts: any[];
}

export default function Post({ posts }: PostProps) {
  return (
    <div>
      <h1 style={{ color: 'aqua' }}>List port</h1>

      <ul>
        {posts.map((item: any, index: number) => (
          <div key={index}>
            <h2 style={{ color: '#FFD95A' }}> {item.title}</h2>
            <br />

            <li>{item.description}</li>
            <br />
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostProps> = async (context: GetStaticPropsContext) => {
  // server-side
  // build time
  console.log('static props');
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();
  console.log(data);

  return {
    props: {
      posts: data.data,
    },
  };
};
