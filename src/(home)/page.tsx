import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.css'
import Profile_img from '../../public/profile.jpg'
import { useEffect, useState } from 'react';
import 'mingcute_icon/font/Mingcute.css'

export default function HomePage() {

  const [showChild, setShowChild] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && showChild) {
        setShowChild(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showChild]);
  
  return (
    <div className={styles.center_card}>
      <div className={styles.intro_card}>
        <div className={styles.text_row}>
          <p>hi, I`m</p>
          <p className={styles.name}>pphui8</p>
        </div>
        <div className={styles.text_row}>
          <p>Graduate student of</p>
          <p className={styles.profession}>{`<Artificial Intelligence/>`}</p>
        </div>
        <div className={styles.text_row}>
          <p className={styles.at}>@pphui8</p>
        </div>
        <div className={styles.icon_container}>
          <Link href=""><i className='mgc_github_line'></i></Link>
          <Link href=""><i className='mgc_github_line'></i></Link>
          <Link href=""><i className='mgc_github_line'></i></Link>
          <Link href=""><i className='mgc_github_line'></i></Link>
        </div>
      </div>
      <div className={styles.profile_img}>
        <Image priority src={Profile_img} alt={'profile'} width={200} height={200}></Image>
      </div>
      <div className={styles.bottom_container}>
      {showChild && (
        <>
          <div className={styles.animation}><i className='mgc_down_fill' /></div>
          <div className={styles.animation}><i className='mgc_down_fill' /></div>
          <div className={styles.animation}><i className='mgc_down_fill' /></div>
        </>
      )}
      </div>
    </div>
  )
}