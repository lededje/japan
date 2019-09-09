import React from 'react'

import styles from './base.css'
//
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
          <Phrase italian="Ciao" english="Hello" polish="Dzień dobry" polishPhonetic="Djen Dobruh" japanese="Kon'nichiwa" japaneseSyllabary="こんにちは" />
          <PhraseSpacer />
          <Phrase italian="Sì" english="Yes" polish="Tak" polishPhonetic="Tack" japanese="Hai" japaneseSyllabary="はい" />
          <Phrase italian="No" english="No" polish="Nie" polishPhonetic="Nieh" japanese="Īe" japaneseSyllabary="いいえ" />
        </PhraseGroup>

        <PhraseGroup>
          <Phrase italian="Grazie" english="Thanks" polish="Dzięki" polishPhonetic="Djen-ku-ya" japanese="Arigatō" japaneseSyllabary="ありがとう" />
          <Phrase italian="Per favore" english="Please" polish="Proszę" polishPhonetic="Prosher" japanese="Onegaishimasu" japaneseSyllabary="お願いします" />
        </PhraseGroup>

        <Title>Numbers</Title>

        <PhraseGroup>
          <Phrase italian="Uno" english="1" polish="Jeden" polishPhonetic="Yeden" japanese="Ichi" japaneseSyllabary="一" />
          <Phrase italian="Due" english="2" polish="Dwa" polishPhonetic="Dva" japanese="Ni" japaneseSyllabary="二" />
          <Phrase italian="Tre" english="3" polish="Trzy" polishPhonetic="Ssheh" japanese="San" japaneseSyllabary="三" />
          <Phrase italian="Quattro" english="4" polish="Cztery" polishPhonetic="Sh-tery" japanese="Shi" japaneseSyllabary="四" />
          <Phrase italian="Cinque" english="5" polish="Pięć" polishPhonetic="Piench" japanese="Go" japaneseSyllabary="五" />
        </PhraseGroup>
        <PhraseGroup>
          <Phrase italian="Sei" english="6" polish="Sześć" polishPhonetic="sh-esh-ch" japanese="Roku" japaneseSyllabary="六" />
          <Phrase italian="Sette" english="7" polish="Siedem" polishPhonetic="Shedem" japanese="Shichi" japaneseSyllabary="セ" />
          <Phrase italian="Otto" english="8" polish="Osiem" polishPhonetic="Osh-em" japanese="Hachi" japaneseSyllabary="八" />
          <Phrase italian="Nove" english="9" polish="Dziewięć" polishPhonetic="Jevenge" japanese="Kyuu" japaneseSyllabary="九" />
          <Phrase italian="Dieci" english="10" polish="Dziesięć" polishPhonetic="Jeh-shench" japanese="Juu" japaneseSyllabary="十" />
        </PhraseGroup>

        <Title>Transport</Title>
        <PhraseGroup>
          <Phrase italian="Treno" english="Train" polish="Pociąg" polishPhonetic="Poch-ongc" japanese="Densha" japaneseSyllabary="電車" />
          <Phrase italian="Tram" english="Tram" polish="Tramwajowy" polishPhonetic="Tram-vi-oveh" japanese="Toramu" japaneseSyllabary="トラム" />
          <Phrase italian="Autobus" english="Bus" polish="Autobus" polishPhonetic="Autobus" japanese="Basu" japaneseSyllabary="バス" />
          <Phrase italian="Stazione" english="Station" polish="Stacja" polishPhonetic="Stat-si-ya" japanese="Eki" japaneseSyllabary="駅" />
        </PhraseGroup>

        <Title>Foods</Title>
        <PhraseGroup>
          <Phrase italian="Verdura" english="Vegetable" polish="Warzywo" polishPhonetic="Vagivo" japanese="Yasai" japaneseSyllabary="野菜" />
          <Phrase italian="Pollo" english="Chicken" polish="Kurczak" polishPhonetic="Cur-chack" japanese="Chikin" japaneseSyllabary="チキン" />
          <Phrase italian="Manzo" english="Beef" polish="Wołowina" polishPhonetic="Vo-wo-vina" japanese="Gyūniku" japaneseSyllabary="牛肉" />
          <Phrase italian="Maiale" english="Pork" polish="Wieprzowina" polishPhonetic="Viep-sho-vina" japanese="Butaniku" japaneseSyllabary="豚肉" />
        </PhraseGroup>
        <PhraseGroup>
          <Phrase italian="Pesce" english="Fish" polish="Ryba" polishPhonetic="Rib-a" japanese="Ressha" japaneseSyllabary="魚" />
          <Phrase italian="Anatra" english="Duck" polish="Kaczka" polishPhonetic="Catch-ka" japanese="Ahiru" japaneseSyllabary="アヒル" />
          <Phrase italian="Gamberetto" english="Shrimp" polish="Krewetka" polishPhonetic="Krevet-ka" japanese="Ebi" japaneseSyllabary="エビ" />
          <Phrase italian="Riso" english="Rice" polish="Ryż" polishPhonetic="Rish" japanese="Gohan" japaneseSyllabary="ご飯" />
          <Phrase italian="Acqua" english="Water" polish="Woda" polishPhonetic="Voda" japanese="Mizu" japaneseSyllabary="水" />
        </PhraseGroup>

        <Title>Common Phrases</Title>
        <PhraseGroup>
          <Phrase italian="Questo contiene latte" english="Does this contain milk" />
          <Phrase italian="Non ho bisogno di una borsa" english="I don't need a bag" polish="Nie potrzebuję torby" polishPhonetic="Nieh potser-boo-yeah tor-beh" japanese="Fukuro wa iranai" japaneseSyllabary="袋は要らない" />
        </PhraseGroup>
      </div>
    )
  }
}

export default withRedux(Index)
