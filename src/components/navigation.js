import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role='navigation'>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='#004665'
          height='18px'
          style={{ marginRight: '10px' }}
        >
          <path
            fillRule='evenodd'
            d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
            clipRule='evenodd'
          />
        </svg>
        <a href='https://ah-badmintoncamps.de'>zur hauptseite</a>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/'>blog</Link>
      </li>
      {/* <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li> */}
    </ul>
  </nav>
)
