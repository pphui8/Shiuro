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
import { Code } from './(pages)/Code';
import { This_site } from './(pages)/This_site';

import loadable from '@loadable/component'
const Research = loadable(() => import('./(pages)/Research').then(mod => mod.Research), {
  ssr: false,
  fallback: <Loading />
});

function Loading() {
  return (
    <div style={{
      padding: '1rem',
      textAlign: 'center',
      color: '#888',
      fontSize: '1.2rem',
      letterSpacing: '0.05em'
    }}>
      Loading...
    </div>
  );
}

export default function Intro() {
  
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const remove = (item: Pages) => {
    if (item === selectedTab) {
      setSelectedTab(closestItem(tabs, item));
    }

    setTabs(removeItem(tabs, item));
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

  const setCurPage = (path: string) => {
    if(path === selectedTab.path) return;
    const item = allPages.find((item) => item.path === path);
    if (item) {
      tabs.find((item) => item.id === selectedTab.id)!.icon = item.icon;
      tabs.find((item) => item.id === selectedTab.id)!.label = item.label;
      tabs.find((item) => item.id === selectedTab.id)!.path = item.path;
      setTabs([...tabs]);
    } else {
      // to 404
      const notFoundItem = allPages.find((item) => item.path === '/404');
      tabs.find((item) => item.id === selectedTab.id)!.icon = notFoundItem!.icon;
      tabs.find((item) => item.id === selectedTab.id)!.label = notFoundItem!.label;
      tabs.find((item) => item.id === selectedTab.id)!.path = notFoundItem!.path;
      setTabs([...tabs]);
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
                {/* <li > */}
                  <motion.button
                    className={styles.new_window}
                    onClick={newWindow}
                    whileTap={{ scale: 0.9 }}
                    aria-label="New window"
                  >
                    <i className='mgc_add_line'/>
                  </motion.button>
                {/* </li> */}
              </AnimatePresence>
            </Reorder.Group>
          </div>
          <Address path={selectedTab ? 'https://pphui8.com' + selectedTab.path : ''} setCurPage={setCurPage}/>
        </nav>
        <main>
          <AnimatePresence mode="wait">
            <motion.div className={styles.windows_container}
              key={selectedTab ? selectedTab.label : "empty"}>
              {
                function MyComponent() {
                  if(selectedTab === undefined) {
                    return <Error404/>;
                  } else {
                    switch(selectedTab.path) {
                      case '/start':
                        return <Start setCurPage={setCurPage}/>;
                      case '/about':
                        return <About/>;
                      case '/this_site':
                        return <This_site/>;
                      case '/code':
                        return <Code/>;
                      case '/research':
                        return <Research/>;
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