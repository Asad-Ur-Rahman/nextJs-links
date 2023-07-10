import React from 'react'
import Link from 'next/link'

export default function Name() {
  return (
    <div>
      hi my name is asad

      <br />
      <hr />
      <Link href='/'>Home</Link> <br />
      <Link href='/live'>Where I live</Link> <br />
      <Link href="/profession">My Profession</Link> <br />
    </div>
  )
}
