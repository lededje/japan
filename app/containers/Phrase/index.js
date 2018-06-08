import { connect } from 'react-redux';
import React from 'react';

const Phrase = ({ english, japanese, syllabary, language }) => {
  return (
    <span>
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
