import styles from './About.module.css'
import Image from 'next/image'
import Profile_img from '../../../public/profile.jpg'

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center_container}>
                <div className={styles.profile_img_container}>
                    <Image priority className={styles.profile_img} src={Profile_img} alt={'profile'} width={200} height={200}></Image>
                    <div className={styles.vcard}>
                        <div className={styles.vcard_fullname}>pphui8</div>
                        <div className={styles.vcard_username}>pphui8</div>
                        <div className={styles.user_profile_bio}>Student of AI/太陽よりも暉くのだ！</div>
                        <div className={styles.more_info}><i className="mgc_location_line"/> 山奥</div>
                        <div className={styles.more_info}><i className="mgc_link_line"/> https://pphui8.com</div>
                        <div className={styles.more_info}><i className="mgc_social_x_line"/> @pphui8</div>
                    </div>
                </div>
                <article className={styles.aboutme_article}>
                    <p className={styles.filepath}>pphui8/README.md</p>
                    <p className={styles.hi}>hi, I`m pphui8.</p>
                    <hr className={styles.line} />
                    <p>👨‍🎓 Graduate student && Artificial Intelligence</p>
                    <p>💬 English && 日本語 && 中文 && 한국어</p>
                    <p>🧐 Research area: Knowledge Intensive Software Engineering</p>
                    <p>🍚 Favorite food: beef rice noodle and curry rice. コーラ最高</p>
                    <p>🎏 Welcome to my Website</p>
                    <p>👨‍💻 🦀 || Go || TypeScipt || Cpp || Python</p>
                    <p>🎹 Loving piano, fan of Animenzzz</p>
                    <picture>
                        <img className={styles.github_status} src="https://github-readme-stats.vercel.app/api?username=pphui8&count_private=true&show_icons=true&border_color=39c5bb)](https://github.com/anuraghazra/github-readme-stats" />
                    </picture>
                </article>
            </div>
        </div>
    );
};