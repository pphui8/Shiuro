import styles from './404.module.css'
import Image from 'next/image'
import NotfoundImage from '../../../public/404_notfonud.png'

export const Error404 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center_container}>
                <Image src={NotfoundImage} alt={'404 not found'} width={333} height={187} />
            </div>
        </div>
    );
};