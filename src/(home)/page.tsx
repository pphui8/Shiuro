import Image from 'next/image'
import styles from './page.module.css'
import Profile_img from '../../public/profile.jpg'
import { useEffect, useState } from 'react';
import { Popover, QRCode } from 'antd';

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
          <p>Hi, I`m</p>
          <p className={styles.name}>pphui8</p>
        </div>
        <div className={styles.text_row}>
          <p>Building at the intersection of</p>
          <p className={styles.profession}>{`<SE & AI/>`}</p>
        </div>
        <div className={styles.text_row}>
          <p className={styles.at}>@pphui8</p>
        </div>
        <div className={styles.icon_container}>
          <Popover placement='bottomLeft' content="Github" >
            <a href="https://github.com/pphui8" aria-label='Github'><i className='mgc_github_line'/></a>
          </Popover>
          <Popover placement='bottomLeft' content="Email" >
            <a href="mailto:jh1216595344@gmail.com" aria-label='Email'><i className='mgc_mail_line'/></a>
          </Popover>
          <Popover placement='bottomLeft' content="Twitter" >
            <a href="https://twitter.com/pphui8" aria-label='Twitter'><i className='mgc_twitter_line'/></a>
          </Popover>
          <Popover placement='bottomLeft' content="Instagram" >
            <a href="https://www.instagram.com/pphuihui8/" aria-label='Instagram'><i className='mgc_ins_line'/></a>
          </Popover>
          <Popover placement='bottomLeft' overlayInnerStyle={{ padding: 0 }} content={<QRCode value='https://pphui8.com' bordered={false} />}>
            <a href="#" aria-label='QRCode'><i className='mgc_qrcode_2_line'/></a>
          </Popover>
          <Popover placement='bottomLeft' content="Telegram" >
            <a href="https://t.me/pphui8" aria-label='Telegram'><i className='mgc_telegram_line' /></a>
          </Popover>
        </div>
      </div>
      <div className={styles.profile_img}>
        <Image priority src={Profile_img} alt={'profile'} width={200} height={200}></Image>
        {/* <img src="./profile.jpg" alt="profile" width={200} height={200} /> */}
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
