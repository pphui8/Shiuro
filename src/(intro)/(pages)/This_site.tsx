import styles from './This_site.module.css'
import Link from 'next/link'

export const This_site = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center_container}>
                <article className={styles.aboutme_article}>
                    <p className={styles.filepath}>pphui8/this_site.md</p>
                    <p className={styles.hi}>About this site: Shiuro</p>
                    <p>Lightweight, easy to deploy personal website.</p>
                    <hr className={styles.line} />
                    <p className={styles.subtitle}>✨ Features</p>
                    <p>- Full Single Sign-On (SSO) 🔒 :</p>
                    <p>- Lighthouse 100 Score 🚀 :</p>
                    <p>- Super Fast ⚡ :</p>
                    <p>- Easy Deployment with GitHub Pages 🌐 :</p>
                    <p><Link href={'https://pphui8.com'}>Github</Link></p>
                </article>
            </div>
        </div>
    );
};