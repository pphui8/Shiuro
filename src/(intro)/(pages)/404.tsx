import styles from './404.module.css'
import Image from 'next/image'
import NotfoundImage from '../../../public/NotFound.png'
import Link from 'next/link';

export const Error404 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center_container}>
                <Image src={NotfoundImage} alt={'404 not found'} width={333} height={187} />
                <div className={styles.copyright}>Logo by <Link href='https://github.com/SAWARATSUKI/KawaiiLogos'>@SAWARATSUKI</Link></div>
            </div>
        </div>
    );
};