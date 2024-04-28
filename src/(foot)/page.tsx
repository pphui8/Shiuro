import styles from './page.module.css'

export default function Foot() {
  return (
    <div className={styles.FootContainer}>
      <div className={styles.timelineContainer}>
        <div className={styles.titile}>Timeline</div>
        <ul className={styles.timelines}>
          <li className={styles.timelineItem}>now developing</li>
          <li className={styles.timelineItem}>@icon 2024/1/21 Main website framework is completed</li>
          <li className={styles.timelineItem}>@icon 2024/1/2 Successfully deployed via Github Action</li>
          <li className={styles.timelineItem}> @icon 2023/12/24 first commit</li>
        </ul>
      </div>
    </div>
  )
}