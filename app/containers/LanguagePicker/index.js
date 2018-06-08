import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setLanguage } from '../../actions/language';

const languages = [{
  id: 'ENLGISH',
  label: 'English',
}, {
  id: 'JAPANESE',
  label: 'Japanese',
}, {
  id: 'SYLLABARY',
  label: '日本語'
}]

const LanguagePicker = ({ selectedLanguage, actions }) =>
  languages.map((language) => (
    <label><input type="radio" name="language" value={language.id} onChange={() => actions.setLanguage(language.id)} checked={selectedLanguage === language.id}/>{language.label}</label>
  ))

export default connect(
  state => ({
    selectedLanguage: state.language.type,
  }),
  dispatch => ({
    actions: bindActionCreators({ setLanguage }, dispatch),
  }),
)(LanguagePicker);
