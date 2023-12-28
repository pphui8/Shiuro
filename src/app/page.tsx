'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Profile_img from '../../public/profile.jpg'
import motion from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.center_card}>
      <div className={styles.intro_card}>
        <div className={styles.text_row}>
          <p>hi, I`m</p>
          <p className={styles.name}>pphui8</p>
        </div>
        <div className={styles.text_row}>
          <p>Graduate student of</p>
          <p className={styles.profession}>Artificial Intelligence</p>
        </div>
        <div className={styles.text_row}>
          <p>@pphui8</p>
        </div>
      </div>
      <div className={styles.profile_img}>
        <Image src={Profile_img} alt={'profile'} width={200} height={200}></Image>
      </div>
    </div>
  )
}
