import styles from './Error404.module.css'

export const Error404 = () => {
    return (
        <div className={styles.container}>
            <p className={styles.center_container}>
                <i className={'mgc_sad_line'} />
                <br />
                Oops!
                <br />
                page not found
            </p>
        </div>
    );
};