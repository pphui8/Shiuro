import { AnimatePresence, Reorder, motion } from 'framer-motion'
import styles from './page.module.css'
import { useState } from 'react';
import { Tab } from "./Tab";
import { AddIcon } from "./AddIcon";
import {
  allIngredients,
  Ingredient,
  initialTabs,
  getNextIngredient,
} from "./ingredients";
import { removeItem, closestItem } from "./array-utils";


export default function Intro() {
  
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const remove = (item: Ingredient) => {
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
          <motion.button
            className="add-item"
            onClick={add}
            disabled={tabs.length === allIngredients.length}
            whileTap={{ scale: 0.9 }}
          >
            <AddIcon />
          </motion.button>
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
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}