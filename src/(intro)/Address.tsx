import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface AddressProps {
    path: string;
    setPath: (path: string) => void;
}

export const Address = ({ path, setPath }: AddressProps) => {

  const [inputValue, setInputValue] = useState(path);

  useEffect(() => {
    setInputValue(path);
  }, [path]);
  
  return (
    <div className={styles.search_bar_container}>
        <i className="mgc_home_4_line"/>
        <input
          className={styles.search_intput_bar}
          type="text"
          value={inputValue}
          onChange={(e) => {

            setInputValue(e.target.value)
          }}
        />
        <i className="mgc_search_2_line"/>
    </div>
  );
};
