const Phrase = ({ english, japanese, syllabary, viewType }) => {
  return (
    <span>
      {(() => {
        switch(viewType) {
          case 'JAPANESE': return japanese
          case 'SYLLABARY': return syllabary
          default: return english
        }
      })()}
    </span>
  )
}

export default Phrase
