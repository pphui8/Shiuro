import styles from './This_site.module.css'

export const This_site = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center_container}>
                <article className={styles.aboutme_article}>
                    <p className={styles.filepath}>pphui8/this_site.md</p>
                    <p className={styles.hi}>About this site</p>
                    <hr className={styles.line} />
                    <p>TODO</p>
                </article>
            </div>
        </div>
    );
};