import styles from './About.module.css'
import Image from 'next/image'
import Profile_img from '../../../public/profile.jpg'

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center_container}>
                <div className={styles.profile_img}>
                    <Image priority src={Profile_img} alt={'profile'} width={200} height={200}></Image>
                </div>
                <article className={styles.aboutme_article}>
                    <p>hi, I`m pphui8.</p>
                    <p>👨‍🎓 Graduate student && Computer Science</p>
                    <p>💬 English && 日本語 && 中文 && 한국어</p>
                    <p>🧐 Interested in all areas of computer science</p>
                    <p>🍚 Favorite food: beef rice noodle and curry rice. コーラ最高</p>
                    <p>🎏 Welcome to my Website</p>
                    <p>👨‍💻 🦀 || go || nextjs || cpp || python</p>
                    <p>🎹 Loving piano, big fan of Animenzzz</p>
                </article>
            </div>
        </div>
    );
};
  