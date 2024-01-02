'use client'

import HomePage from '../(home)/page'
import Foot from '../(foot)/page'
import Intro from '../(intro)/page'

export default function page() {
  return (
    <>
      <section>
        <HomePage />
      </section>
      <section>
        <Intro />
      </section>
      <section>
        <Foot />
      </section>
    </>
  )
}
