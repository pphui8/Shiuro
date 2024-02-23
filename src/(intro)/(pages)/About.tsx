import styles from './About.module.css';

export const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About</h1>
            <p className={styles.description}>This is a description of the website.</p>
        </div>
    );
};