import { connect } from 'react-redux';
import React from 'react';

import styles from './styles.css'

const Phrase = ({ english, polish, polishPhonetic, japanese, japaneseSyllabary, italian, language }) => {
  return (
    <span className={styles.phrase}>
      {(() => {
        switch(language.type) {
          case 'JAPANESE': return japanese
          case 'JAPANESE_SYLLABARY': return japaneseSyllabary
          case 'POLISH': return polish
          case 'POLISH_PHONETIC': return polishPhonetic
          case 'ITALIAN': return italian;
          case 'ENGLISH':
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
