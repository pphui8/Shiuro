import { AnimatePresence, Reorder, motion } from 'framer-motion'
import { nanoid } from 'nanoid';
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
import { Start } from './(pages)/Start';
import { About } from './(pages)/About';
import { Error404 } from './(pages)/404';


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
    // const nextItem = getNextIngredient(tabs);

    // if (nextItem) {
    //   setTabs([...tabs, nextItem]);
    //   setSelectedTab(nextItem);
    // }
  };

  const newWindow = () => {
    const newItem = {
      id: nanoid(),
      icon: 'home_4_line',
      label: 'Start',
      path: '/start',
    };
    setTabs([...tabs, newItem]);
    setSelectedTab(newItem);
  };

  const backHome = () => {
    if(selectedTab.path === '/start') return;
    tabs.find((item) => item.id === selectedTab.id)!.icon = 'home_4_line';
    tabs.find((item) => item.id === selectedTab.id)!.label = 'Start';
    tabs.find((item) => item.id === selectedTab.id)!.path = '/start';
    setTabs([...tabs]);
  }

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
                    key={item.id}
                    item={item}
                    isSelected={selectedTab === item}
                    onClick={() => setSelectedTab(item)}
                    onRemove={() => remove(item)}
                  />
                ))}
                <motion.button
                  className={styles.new_window}
                  onClick={newWindow}
                  disabled={tabs.length === allPages.length}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className='mgc_add_line'/>
                </motion.button>
              </AnimatePresence>
            </Reorder.Group>
          </div>
          <Address path={selectedTab ? 'https://pphui8.com' + selectedTab.path : ''} setPath={setPath} backHome={backHome} search={() => {}}/>
        </nav>
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}>
              {
                function MyComponent() {
                  if(selectedTab === undefined) {
                    return '<Start/>';
                  } else {
                    switch(selectedTab.path) {
                      case '/start':
                        return <Start/>;
                      case '/about':
                        return <About/>;
                      default:
                        return <Error404/>;
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