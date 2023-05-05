import { useRouter } from 'next/router';
import Link from 'next/link';
import * as React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export interface IDetailPostProps {
  post: any;
}

export default function DetailPost({ post }: IDetailPostProps) {
  const router = useRouter();
  if (!post) return null;
  return (
    <div>
      <h1>Post detail post</h1>
      <h3 style={{ color: '#FCFFB2' }}>{post.title}</h3>
      <br />
      <p style={{ color: '#19A7CE' }}>{post.author}</p>
      <br />
      <p style={{ color: '#C9DBB2' }}>{post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();

  return {
    paths: data.data.map((x: any) => ({ params: { postId: x.id } })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IDetailPostProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
