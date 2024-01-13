import { AnimatePresence, Reorder, motion } from 'framer-motion'
import styles from './page.module.css'
import { useState } from 'react';
import { Tab } from "./Tab";
import {
  allPages,
  Pages,
  initialTabs,
  getNextIngredient,
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

  const add = () => {
    const nextItem = getNextIngredient(tabs);

    if (nextItem) {
      setTabs([...tabs, nextItem]);
      setSelectedTab(nextItem);
    }
  };
  
  return (
    <div className={styles.mid_container}>
      <div className={styles.windows}>
        <nav>
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
          {/* <motion.button
            className="add-item"
            onClick={add}
            disabled={tabs.length === allPages.length}
            whileTap={{ scale: 0.9 }}
          >
            <i className='mgc_add_line'/>
          </motion.button> */}
          <Address path={''} setPath={function (path: string): void {
            throw new Error('Function not implemented.');
          } } />
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
              {selectedTab ? <i className={'mgc_' + selectedTab.icon}/> : "404!"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}