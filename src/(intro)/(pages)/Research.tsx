import styles from './Research.module.css'

export const Research = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center_container}>
                <article className={styles.aboutme_article}>
                    <p className={styles.filepath}>pphui8/research.md</p>
                    <div className={styles.research_box}>
                        <div className={styles.research_box_SE}>
                            <p>Software Engineering</p>
                            <div className={styles.research_box_SE_sub_RE}>
                                <p>Reqrements Engineering</p>
                            </div>
                        </div>
                        <div className={styles.research_box_AI}>
                            <p>Artificial Intelligence</p>
                        </div>

                    </div>
                </article>
            </div>
        </div>
    );
};