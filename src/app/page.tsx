'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      Hello and Welcome I am worked on links in this project
      <br />
      This is Home page

      <br />
      <hr />
      <button type="button" onClick={() => router.push('/live')}>
        where I live
      </button> <br />
      <Link href='/name'>what is my name</Link> <br />
      <Link href="/profession">My Profession</Link> <br />

    </div>
  )
}
