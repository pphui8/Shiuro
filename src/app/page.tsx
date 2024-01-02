'use client'

import HomePage from '../(home)/page'
import Foot from '../(foot)/page'
import Intro from '../(intro)/page'


export default function page() {
  return (
    <>
      <section className='section'>
        <HomePage />
      </section>
      <section className='section'>
        <Intro />
      </section>
      <section className='section'>
        <Foot />
      </section>
    </>
  )
}
