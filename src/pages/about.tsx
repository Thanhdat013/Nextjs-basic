import Link from 'next/link';
import React from 'react';

export interface AboutPage {}

export default function AboutPage(props: AboutPage) {
  return (
    <div>
      <div>About page</div>
      <h3>Go to home</h3>
      <Link href={'/'}></Link>
    </div>
  );
}
