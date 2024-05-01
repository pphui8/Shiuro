import styles from './About.module.css'
import Image from 'next/image'
import Profile_img from '../../../public/profile.jpg'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link';

export const About = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    
    return (
        <div className={styles.container} suppressHydrationWarning={true}>
            {isMobile ? <MobileView /> : <WindowsView />}
            <article className={styles.aboutme_article} style={isMobile ? {transform: "translateY(0%)", width: "88%"} : {}}>
                <p className={styles.filepath}>pphui8/README.md</p>
                <p className={styles.hi}>hi, I`m pphui8.</p>
                <hr className={styles.line} />
                <p>👨‍🎓 Graduate student && Artificial Intelligence</p>
                <p>💬 English && 日本語 && 中文 && 한국어</p>
                <p>🧐 Research area: Knowledge Intensive Software Engineering</p>
                <p>🍚 Favorite food: beef rice noodle and curry rice. コーラ最高</p>
                <p>🎏 Welcome to my <Link href={'https://pphui8.com'}>Website</Link></p>
                <p>👨‍💻 🦀 || Go || TypeScipt || Cpp || Python</p>
                <p>🎹 Loving piano, fan of <Link href={'https://www.youtube.com/c/Animenzzz'}>Animenzzz</Link></p>
                <picture>
                    <img className={styles.github_status} src="https://github-readme-stats.vercel.app/api?username=pphui8&count_private=true&show_icons=true&border_color=39c5bb)](https://github.com/anuraghazra/github-readme-stats" style={{maxWidth: "425px", maxHeight: "180px", minWidth: "280px", minHeight: "130px"}}/>
                </picture>
            </article>
        </div>
    );
};
const WindowsView = () => {
    return (
        <div className={styles.profile_img_container} suppressHydrationWarning={true}>
            <Image priority className={styles.profile_img} src={Profile_img} alt={'profile'} width={200} height={200} suppressHydrationWarning={true}/>
            <div className={styles.status} suppressHydrationWarning={true}><i className='mgc_book_6_line' /></div>
            <div className={styles.vcard} suppressHydrationWarning={true}>
                <div className={styles.vcard_fullname} suppressHydrationWarning={true}>pphui8</div>
                <div className={styles.vcard_username} suppressHydrationWarning={true}>pphui8</div>
                <div className={styles.user_profile_bio} suppressHydrationWarning={true}>Student of AI/太陽よりも暉くのだ！</div>
                <div className={styles.more_info} suppressHydrationWarning={true}><i className="mgc_location_line"/> 山奥</div>
                <div className={styles.more_info} suppressHydrationWarning={true}><i className="mgc_link_line"/><Link href={'https://pphui8.com'}> https://pphui8.com</Link></div>
                <div className={styles.more_info} suppressHydrationWarning={true}><i className="mgc_social_x_line"/><Link href={'https://twitter.com/pphui8'}> @pphui8</Link></div>
            </div>
        </div>
    )
}

const MobileView = () => {
    return (
        <div className={styles.mobile_profile} suppressHydrationWarning={true}>
            <Image priority className={styles.profile_img} src={Profile_img} alt={'profile'} width={100} height={100} suppressHydrationWarning={true}/>
            <div className={styles.mobile_name_container} suppressHydrationWarning={true}>
                <div className={styles.vcard_fullname} suppressHydrationWarning={true}>pphui8</div>
                <div className={styles.vcard_username} suppressHydrationWarning={true}>pphui8</div>
            </div>
            <div className={styles.status_bar} suppressHydrationWarning={true}><i className='mgc_book_6_line' /><div className={styles.studying}>studying</div></div>
            <div className={styles.vcard} style={{transform: "translateY(-13px)"}}  suppressHydrationWarning={true}>
                <div className={styles.user_profile_bio} suppressHydrationWarning={true}>Student of AI/太陽よりも暉くのだ！</div>
                <div className={styles.more_info} suppressHydrationWarning={true}><i className="mgc_location_line"/> 山奥</div>
                <div className={styles.more_info} suppressHydrationWarning={true}><i className="mgc_link_line"/><Link href={'https://pphui8.com'}> https://pphui8.com</Link></div>
                <div className={styles.more_info} suppressHydrationWarning={true}><i className="mgc_social_x_line"/><Link href={'https://twitter.com/pphui8'}> @pphui8</Link></div>
            </div>
        </div>
    )
}