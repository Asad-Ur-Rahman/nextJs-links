import React from 'react'
import Link from 'next/link'

export default function Live() {
  return (
    <div>
      I live in Karachi Pakistan
      <br />
      <hr />
      <Link href='/'>Home</Link> <br />
      <Link href='/name'>what is my name</Link> <br />
      <Link href="/profession">My Profession</Link> <br />
      </div>
  )
}
