import { motion } from 'framer-motion'
import styles from './page.module.css'
import { useRef } from 'react';


export default function intro() {

  const constraintsRef = useRef(null);
  
  return (
    <div className={styles.mid_container}>
      <motion.div className={styles.screen} ref={constraintsRef}>
        <motion.div className={styles.windows} drag dragConstraints={constraintsRef} />
      </motion.div>
    </div>
  )
}