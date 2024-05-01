import styles from './page.module.css'

export default function Foot() {
  return (
    <div className={styles.FootContainer}>
      <div className={styles.timelineContainer}>
        <div className={styles.titile}>Timeline</div>
        <ul className={styles.timelines}>
          <li className={styles.timelineItem}><ListContent time="" description="" /></li>
          <li className={styles.timelineItem}><ListContent time="2024/1/21" description="Main website framework is completed" /></li>
          <li className={styles.timelineItem}><ListContent time="2024/1/2" description="Successfully deployed via Github Action" /></li>
          <li className={styles.timelineItem}><ListContent time="2023/12/24" description="first commit"/></li>
        </ul>
      </div>
    </div>
  )
}

type Props = {
  time: string
  description: string
}

const ListContent = (props: Props) => {
  return (
    <>
      <div className={styles.iconContainer}><i className="mgc_bling_line" /></div>
      <div className={styles.time}>{props.time}</div>
      <div className={styles.description}>{props.description}</div>
    </>
  )
}