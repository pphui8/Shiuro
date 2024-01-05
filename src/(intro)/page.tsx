import { promises as fs } from 'fs';
import styles from './page.module.css'
import mdStyles from './markdown.module.css'
import { use, useEffect, useState } from 'react';

const fullPath = `./public/pphui8/README.md`;

export default async function intro() {
  let mdContents = '';

  if(typeof window !== 'undefined') {
    mdContents = await fs.readFile(fullPath, 'utf8');
  }
    
  return (
    <div className={styles.MidContainer}>
      {mdContents}
    </div>
  )
}