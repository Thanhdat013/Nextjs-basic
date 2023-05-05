import { useRouter } from 'next/router';
import Link from 'next/link';
import * as React from 'react';

export interface IDetailPostProps {}

export default function DetailPost(props: IDetailPostProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Post detail post</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
      <Link href={'/'}>
        <h2>Home</h2>
      </Link>
    </div>
  );
}
