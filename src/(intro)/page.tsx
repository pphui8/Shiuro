import { AnimatePresence, Reorder, motion } from 'framer-motion'
import styles from './page.module.css'
import { useState } from 'react';
import { Tab } from "./Tab";
import {
  allPages,
  Pages,
  initialTabs,
} from "./pages";
import { removeItem, closestItem } from "./array-utils";
import { Address } from './Address';


export default function Intro() {
  
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const remove = (item: Pages) => {
    if (item === selectedTab) {
      setSelectedTab(closestItem(tabs, item));
    }

    setTabs(removeItem(tabs, item));
  };

  // const add = () => {
  //   const nextItem = getNextIngredient(tabs);

  //   if (nextItem) {
  //     setTabs([...tabs, nextItem]);
  //     setSelectedTab(nextItem);
  //   }
  // };

  const setPath = (path: string) => {
    if (path === '') {
      setSelectedTab(tabs[0]);
    } else {
      const item = tabs.find((item) => item.path === path);
      if (item) {
        setSelectedTab(item);
      }
    }
  }
  
  return (
    <div className={styles.mid_container}>
      <div className={styles.windows}>
        <nav>
          <div className={styles.tab_container}>
            <Reorder.Group
              as="ul"
              axis="x"
              onReorder={setTabs}
              className={styles.tabs}
              values={tabs}
            >
              <AnimatePresence initial={false}>
                {tabs.map((item) => (
                  <Tab
                    key={item.label}
                    item={item}
                    isSelected={selectedTab === item}
                    onClick={() => setSelectedTab(item)}
                    onRemove={() => remove(item)}
                  />
                ))}
              </AnimatePresence>
            </Reorder.Group>
          </div>
          {/* <motion.button
            className="add-item"
            onClick={add}
            disabled={tabs.length === allPages.length}
            whileTap={{ scale: 0.9 }}
          >
            <i className='mgc_add_line'/>
          </motion.button> */}
          <Address path={selectedTab ? 'https://pphui8.com' + selectedTab.path : ''} setPath={setPath}/>
        </nav>
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              {
                function MyComponent() {
                  if(selectedTab === undefined) {
                    return '<Start/>';
                  } else {
                    switch(selectedTab.path) {
                      case '/start':
                        return '<Start/>';
                      case '/about':
                        return '<About/>';
                      default:
                        return '<404/>';
                    }
                  }
                }()
              }
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}