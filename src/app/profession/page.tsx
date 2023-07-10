import React from 'react';
import Link from 'next/link';

export default function Profession() {
  return (
    <div>By profession I am an engineer but being a hobbyist what i define myself
      <br />
      <hr />
      <Link href='/'>Home</Link> <br />
      <Link href='/name'>what is my name</Link> <br />
      <Link href="/live">Where I live</Link> <br />
    </div>
  )
}
