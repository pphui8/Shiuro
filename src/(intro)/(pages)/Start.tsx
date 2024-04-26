import styles from './Start.module.css'

interface Props {
  setCurPage: (path: string) => void;
}

export const Start = ({ setCurPage }: Props) => {

  const toOtherPage = () => {
    const content = (document.querySelector('#search_input') as HTMLInputElement)?.value;
    setCurPage('/' + content);
  }

  const setPlaceholder = (content: string) => {
    (document.querySelector('#search_input') as HTMLInputElement).placeholder = content;
  }
  
  return (
    <div className={styles.center_container}>
       <div className={styles.background_image}/>
      <div className={styles.search_container}>
        <div className={styles.search_url_container}>
          <p className={styles.url}>https://ppuhi8.com/</p>
        </div>
        <input type="text"className={styles.search_input} placeholder="Search" onFocus={() => setPlaceholder('')} onBlur={() => setPlaceholder('Search')} id='search_input' onKeyDown={(e) => {
          if(e.key === 'Enter') {
            toOtherPage();
          }
        }} />
        <div className={styles.search_icon_container} onClick={() => toOtherPage()}>
            <svg viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
        </div>
      </div>
      <div className={styles.shortcut_container}>
        <div className={styles.shortcut_item} onClick={() => setCurPage("/start")}><i className='mgc_home_4_line'/></div>
        <div className={styles.shortcut_item} onClick={() => setCurPage("/about")}><i className='mgc_user_1_line'/></div>
        <div className={styles.shortcut_item} onClick={() => setCurPage("/this_site")}><i className='mgc_cloud_line'/></div>
        <div className={styles.shortcut_item} onClick={() => setCurPage("/code")}><i className='mgc_code_line'/></div>
        <div className={styles.shortcut_item} onClick={() => setCurPage("/research")}><i className='mgc_microscope_line'/></div>
      </div>
    </div>
  );
};
