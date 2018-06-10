import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles.css'
import classNames from 'classnames'

import { setLanguage } from '../../actions/language';

const languages = [{
  id: 'ENGLISH',
  label: 'English',
}, {
  id: 'JAPANESE',
  label: 'Japanese',
}, {
  id: 'SYLLABARY',
  label: '日本語'
}]

const LanguagePicker = ({ selectedLanguage, actions }) => (
  <div className={styles.group}>
    {
      languages.map((language) => {
        const classes = classNames(styles.picker, {
          [styles.checked]: selectedLanguage === language.id,
        })
        return (
          <label key={language.id} className={classes}>
            <input
              className={styles.input}
              type="radio"
              name="language"
              value={language.id}
              onChange={() => actions.setLanguage(language.id)}
            />
            {language.label}
          </label>
        )
      }
      )
    }
  </div>
)
export default connect(
  state => ({
    selectedLanguage: state.language.type,
  }),
  dispatch => ({
    actions: bindActionCreators({ setLanguage }, dispatch),
  }),
)(LanguagePicker);
