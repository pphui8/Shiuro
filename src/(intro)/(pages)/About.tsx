import styles from './About.module.css'
import Profile_img from '../../../public/profile.jpg'
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {

    return (
        <div className={styles.container} >
            <div className={styles.windowsViewWrapper}>
                <WindowsView />
                <article className={styles.aboutme_article}>
                    <p className={styles.filepath}><Link href={'https://github.com/pphui8'}>pphui8</Link> / <Link href={'https://github.com/pphui8/pphui8'}>README.md</Link></p>
                    <p className={styles.hi}>hi, I`m pphui8.</p>
                    <hr className={styles.line} />
                    <p>👨‍🎓 M.S. in Software Engineering && Artificial Intelligence</p>
                    <p>💬 English && 日本語 && 中文</p>
                    <p>🧐 Research area: Knowledge Intensive Software Engineering</p>
                    <p>🍚 Favorite food: beef rice noodle and curry rice. コーラ最高</p>
                    <p>🎏 Welcome to my <Link href={'https://pphui8.com'}>Website</Link></p>
                    <p>👨‍💻 🦀 || Go || TypeScipt || Cpp || Python</p>
                    <p>🎹 Loving piano, fan of <Link href={'https://www.youtube.com/c/Animenzzz'}>Animenzzz</Link></p>
                </article>
            </div>
            <div className={styles.mobileViewWrapper}>
                <MobileView />
                <article className={styles.aboutme_article}>
                    <p className={styles.filepath}><Link href={'https://github.com/pphui8'}>pphui8</Link> / <Link href={'https://github.com/pphui8/pphui8'}>README.md</Link></p>
                    <p className={styles.hi}>hi, I`m pphui8.</p>
                    <hr className={styles.line} />
                    <p>👨‍🎓 M.S. in Software Engineering && Artificial Intelligence</p>
                    <p>💬 English && 日本語 && 中文</p>
                    <p>🧐 Research area: Knowledge Intensive Software Engineering</p>
                    <p>🍚 Favorite food: beef rice noodle and curry rice. コーラ最高</p>
                    <p>🎏 Welcome to my <Link href={'https://pphui8.com'}>Website</Link></p>
                    <p>👨‍💻 🦀 || Go || TypeScipt || Cpp || Python</p>
                    <p>🎹 Loving piano, fan of <Link href={'https://www.youtube.com/c/Animenzzz'}>Animenzzz</Link></p>
                </article>
            </div>
        </div>
    );
};

const WindowsView = () => {
    return (
        <div className={styles.profile_img_container} >
            <Image priority className={styles.profile_img} src={Profile_img} alt={'profile'} width={200} height={200} />
            {/* <img className={styles.profile_img} src={Profile_img.src} alt={'profile'} width={200} height={200} /> */}
            <div className={styles.status} ><i className='mgc_book_6_line' /></div>
            <div className={styles.vcard} >
                <div className={styles.vcard_fullname} >pphui8</div>
                <div className={styles.vcard_username} >pphui8</div>
                <div className={styles.user_profile_bio} >M.S. in Software Engineering & AI</div>
                <div className={styles.more_info} ><i className="mgc_location_line"/> 山奥</div>
                <div className={styles.more_info} ><i className="mgc_link_line"/><Link href={'https://pphui8.com'}> https://pphui8.com</Link></div>
                <div className={styles.more_info} ><i className="mgc_social_x_line"/><Link href={'https://twitter.com/pphui8'}> @pphui8</Link></div>
            </div>
        </div>
    )
}

const MobileView = () => {
    return (
        <div className={styles.mobile_profile} >
            <Image priority className={styles.profile_img} src={Profile_img} alt={'profile'} width={100} height={100} />
            {/* <img className={styles.profile_img} src={Profile_img.src} alt={'profile'} width={100} height={100} /> */}
            <div className={styles.mobile_name_container} >
                <div className={styles.vcard_fullname} >pphui8</div>
                <div className={styles.vcard_username} >pphui8</div>
            </div>
            <div className={styles.status_bar} ><i className='mgc_book_6_line' /><div className={styles.studying}>graduated</div></div>
            <div className={styles.vcard} >
                <div className={styles.user_profile_bio} >M.S. in Software Engineering & AI</div>
                <div className={styles.more_info} ><i className="mgc_location_line"/> 山奥</div>
                <div className={styles.more_info} ><i className="mgc_link_line"/><Link href={'https://pphui8.com'}> https://pphui8.com</Link></div>
                <div className={styles.more_info} ><i className="mgc_social_x_line"/><Link href={'https://twitter.com/pphui8'}> @pphui8</Link></div>
            </div>
        </div>
    )
}