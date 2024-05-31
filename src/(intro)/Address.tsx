import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface AddressProps {
    path: string;
    setCurPage: (path: string) => void;
}

export const Address = ({ path, setCurPage}: AddressProps) => {

  const [inputValue, setInputValue] = useState(path);

  useEffect(() => {
    setInputValue(path);
  }, [path]);

  const searchUrl = () => {
    if(!inputValue.startsWith('https://pphui8.com')) {
      setCurPage('/404');
    } else {
      // remove the prefix
      const path = inputValue.slice(18);
      console.log("to path: ", path);
      setCurPage(path);
    }
  }
  
  return (
    <div className={styles.search_bar_container}>
        <i className="mgc_home_4_line" onClick={() => setCurPage('/start')}/>
        <input
          id="url_search_input"
          className={styles.search_intput_bar}
          type="text"
          value={inputValue}
          autoComplete="off"
          aria-label="search input"
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyDown={(e) => {
            if(e.key === 'Enter') {
              searchUrl();
            }
          }}
        />
        <i className="mgc_search_2_line"/>
    </div>
  );
};
