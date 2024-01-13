import styles from "./page.module.css";
import { Input } from 'antd';

interface AddressProps {
    path: string;
    setPath: (path: string) => void;
}

export const Address = ({ path, setPath }: AddressProps) => {
  return (
    <div className={styles.search_bar_container}>
        <i className="mgc_home_4_line"/>
        <input
            className={styles.search_intput_bar}
            type="text"
            value={"abcaujsbdfclaisbcl"}
            onChange={(e) => {
                // if keycode == enter
                // if (e. === "Enter") {
                //     setPath(e.target.value);
                // }
            }}
        />
        <i className="mgc_search_2_line"/>
    </div>
  );
};
