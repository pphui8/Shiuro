import styles from './This_site.module.css'
import Image from 'next/image';
import GitHubIcon from '/public/github.png';


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
                    <p>- Responsive Design 📱 :</p>
                    <p>- Lighthouse 100 Score 🚀 :</p>
                    <p>- Super Fast ⚡ :</p>
                    <p>- Easy Deployment with GitHub Pages 🌐 :</p>
                    <button className={styles.GithubIconButton}>
                        <span className={styles.buttonText} onClick={() => window.open('https://github.com/pphui8/Shiuro', '_blank')}>to GitHub →</span>
                    </button>
                </article>
            </div>
        </div>
    );
};