import React from 'react'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Hello and Welcome I am worked on links in this project
      <br />
      This is Home page

      <br />
      <hr />
      <Link href='/live'>where I live</Link> <br />
      <Link href='/name'>what is my name</Link> <br />
      <Link href="/profession">My Profession</Link> <br />

    </div>
  )
}
