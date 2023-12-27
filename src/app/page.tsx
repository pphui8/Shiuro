'use client'

import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className="load_interface"></div>
      <div className={styles.container_fluid}>
          <h1>pphui8</h1>
          <p>太陽よりも輝くのだ</p>
          <p>@pphui8</p>
      </div>
      <section className="footer icons" id="footer_trans">
          <a href="mailto:hakase@pphui8.com">
              <i className="fa fa-envelope" title="Email"></i>
          </a>

          <a href="https://github.com/pphui8">
              <i className="fa fa-github" title="Github"></i>
          </a>

          <a href="https://twitter.com/pphui8">
              <i className="fa fa-twitter" title="twitter"></i>
          </a>

          <a href="http://wpa.qq.com/msgrd?v=3&uin=1292750686&site=qq&menu=yes">
              <i className="fa fa-qq" title="QQ"></i>
          </a>
      </section>
    </>
  )
}
