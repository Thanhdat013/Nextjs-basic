import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import HeaderProps from './components/Header';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { MainLayout } from '@/components/layout';
export interface AboutPage {}
const HeaderProps = dynamic(() => import('@/pages/Header'), { ssr: false });

export default function AboutPage(props: AboutPage) {
  const router = useRouter();
  const [postList, setPostList] = useState([]);
  const page = router.query?.page;
  useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/?_page=${page}`);
      const data = await response.json();

      setPostList(data.data);
    })();
  }, [page]);

  const handleClickNext = () => {
    router.push(
      {
        pathname: 'about/',
        query: {
          page: Number(page || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      <div>About page</div>
      <h3>Go to home</h3>
      <HeaderProps />
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleClickNext}>Next Page</button>
    </div>
  );
}

AboutPage.Layout = MainLayout;

export async function getStaticProps() {
  console.log('render SSR');

  return {
    props: {},
  };
}
