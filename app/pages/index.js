import React from 'react'

import styles from './base.css'

import Phrase from '../containers/Phrase'
import LanguagePicker from '../containers/LanguagePicker'

import Title from '../components/Title'
import PhraseGroup from '../components/PhraseGroup'
import PhraseSpacer from '../components/PhraseSpacer'
import withRedux from '../components/withRedux'

class Index extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>

        <LanguagePicker />

        <Title>Basics</Title>

        <PhraseGroup>
          <Phrase english="Hello" polish="Dzień dobry" polishPhonetic="Djen Dobruh" japanese="Kon'nichiwa" japaneseSyllabary="こんにちは" />
          <PhraseSpacer />
          <Phrase english="Yes" polish="Tak" polishPhonetic="Tack" japanese="Hai" japaneseSyllabary="はい" />
          <Phrase english="No" polish="Nie" polishPhonetic="Nieh" japanese="Īe" japaneseSyllabary="いいえ" />
        </PhraseGroup>

        <PhraseGroup>
          <Phrase english="Thanks" polish="Dzięki" polishPhonetic="Djen-ku-ya" japanese="Arigatō" japaneseSyllabary="ありがとう" />
          <Phrase english="Please" polish="Proszę" polishPhonetic="Prosher" japanese="Onegaishimasu" japaneseSyllabary="お願いします" />
        </PhraseGroup>

        <Title>Numbers</Title>

        <PhraseGroup>
          <Phrase english="1" polish="Jeden" polishPhonetic="Yeden" japanese="Ichi" japaneseSyllabary="一" />
          <Phrase english="2" polish="Dwa" polishPhonetic="Dva" japanese="Ni" japaneseSyllabary="二" />
          <Phrase english="3" polish="Trzy" polishPhonetic="Ssheh" japanese="San" japaneseSyllabary="三" />
          <Phrase english="4" polish="Cztery" polishPhonetic="Sh-tery" japanese="Shi" japaneseSyllabary="四" />
          <Phrase english="5" polish="Pięć" polishPhonetic="Piench" japanese="Go" japaneseSyllabary="五" />
        </PhraseGroup>
        <PhraseGroup>
          <Phrase english="6" polish="Sześć" polishPhonetic="sh-esh-ch" japanese="Roku" japaneseSyllabary="六" />
          <Phrase english="7" polish="Siedem" polishPhonetic="Shedem" japanese="Shichi" japaneseSyllabary="セ" />
          <Phrase english="8" polish="Osiem" polishPhonetic="Osh-em" japanese="Hachi" japaneseSyllabary="八" />
          <Phrase english="9" polish="Dziewięć" polishPhonetic="Jevenge" japanese="Kyuu" japaneseSyllabary="九" />
          <Phrase english="10" polish="Dziesięć" polishPhonetic="Jeh-shench" japanese="Juu" japaneseSyllabary="十" />
        </PhraseGroup>

        <Title>Transport</Title>
        <PhraseGroup>
          <Phrase english="Train" polish="Pociąg" polishPhonetic="Poch-ongc" japanese="Densha" japaneseSyllabary="電車" />
          <Phrase english="Tram" polish="Tramwajowy" polishPhonetic="Tram-vi-oveh" japanese="Toramu" japaneseSyllabary="トラム" />
          <Phrase english="Bus" polish="Autobus" polishPhonetic="Autobus" japanese="Basu" japaneseSyllabary="バス" />
          <Phrase english="Station" polish="Stacja" polishPhonetic="Stat-si-ya" japanese="Eki" japaneseSyllabary="駅" />
        </PhraseGroup>

        <Title>Foods</Title>
        <PhraseGroup>
          <Phrase english="Vegetable" polish="Warzywo" polishPhonetic="Vagivo" japanese="Yasai" japaneseSyllabary="野菜" />
          <Phrase english="Chicken" polish="Kurczak" polishPhonetic="Cur-chack" japanese="Chikin" japaneseSyllabary="チキン" />
          <Phrase english="Beef" polish="Wołowina" polishPhonetic="Vo-wo-vina" japanese="Gyūniku" japaneseSyllabary="牛肉" />
          <Phrase english="Pork" polish="Wieprzowina" polishPhonetic="Viep-sho-vina" japanese="Butaniku" japaneseSyllabary="豚肉" />
        </PhraseGroup>
        <PhraseGroup>
          <Phrase english="Fish" polish="Ryba" polishPhonetic="Rib-a" japanese="Ressha" japaneseSyllabary="魚" />
          <Phrase english="Duck" polish="Kaczka" polishPhonetic="Catch-ka" japanese="Ahiru" japaneseSyllabary="アヒル" />
          <Phrase english="Shrimp" polish="Krewetka" polishPhonetic="Krevet-ka" japanese="Ebi" japaneseSyllabary="エビ" />
          <Phrase english="Rice" polish="Ryż" polishPhonetic="Rish" japanese="Gohan" japaneseSyllabary="ご飯" />
          <Phrase english="Water" polish="Woda" polishPhonetic="Voda" japanese="Mizu" japaneseSyllabary="水" />
        </PhraseGroup>

        <Title>Common Phrases</Title>
        <PhraseGroup>
          <Phrase english="I don't need a bag" polish="Nie potrzebuję torby" polishPhonetic="Nieh potser-boo-yeah tor-beh" japanese="Fukuro wa iranai" japaneseSyllabary="袋は要らない" />
        </PhraseGroup>
      </div>
    )
  }
}

export default withRedux(Index)
