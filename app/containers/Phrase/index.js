import { connect } from 'react-redux';
import React from 'react';

import styles from './styles.css'

const Phrase = ({ english, japanese, syllabary, language }) => {
  return (
    <span className={styles.phrase}>
      {(() => {
        switch(language.type) {
          case 'JAPANESE': return japanese
          case 'SYLLABARY': return syllabary
          default: return english
        }
      })()}
    </span>
  )
}

export default connect(
  state => ({
    language: state.language,
  }),
)(Phrase);
