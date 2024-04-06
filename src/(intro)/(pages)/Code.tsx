import styles from './Code.module.css'

export const Code = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center_container}>
                <article className={styles.aboutme_article}>
                    <p className={styles.filepath}>pphui8/code.md</p>
                    <p className={styles.hi}>My projects</p>
                    <hr className={styles.line} />
                    <p>TODO</p>
                </article>
            </div>
        </div>
    );
};