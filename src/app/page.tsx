'use client'

import { ConfigProvider } from 'antd'
import HomePage from '../(home)/page'
import Intro from '../(intro)/page'


export default function page() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Popover: {
            lineHeight: 1,
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
    </ConfigProvider>
  )
}
