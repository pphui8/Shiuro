'use client'

import { ConfigProvider } from 'antd'
import HomePage from '../(home)/page'
import Foot from '../(foot)/page'
import Intro from '../(intro)/page'


export default function page() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Popover: {
            lineHeight: .8,
            colorBgElevated: 'rgba(0, 0, 0, 0.2)',
          },
        },
      }}
    >
      <section className='section'>
        <HomePage />
      </section>
      <section className='section'>
        <Intro />
      </section>
      <section className='section'>
        <Foot />
      </section>
    </ConfigProvider>
  )
}
