import React from 'react'

import styles from './styles.css'

const PhraseGroup = ({ children }) => (
  <div className={styles['phrase-group']}>{children}</div>
)

export default PhraseGroup
