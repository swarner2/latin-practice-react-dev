import utilities from '../utilities';
import catchStrangePassiveVerbs from './catchStrangePassiveVerbs'

export default function handleVerbEnglish(english, number, voice){

  //pick one of the englishs but clean it first
  if (english.match(/;|:|\//)) {
    english = english.replace(/;|:|\//g, ',');
  }
  english = utilities().random(english.split(', '));

  //fix intransative verbs from to be verbed to is/ are verbed
  if (english.match('to be ')) {
    english = number === 'sg' ? english.replace('to be ', 'is ') : english.replace('to be ', 'are ');
  }
  else{
    //fix standard english from "to verb" -> "verb"
    if (english.match('to ')) {
      english = english.replace('to ', '');
    }

    //change english if plural
    if(number === 'sg'){
      //check if compound verb in english
      if (english.match(' ')) {
        if (voice === 'active') {
          english = english.replace(' ', 's ');
        }
        if (voice === 'passive'){
          english = 'is ' + english.replace(' ', 'ed ');
        }
      }
      else {
        if(voice === 'active'){
          english = english + "s ";
        }
        if (voice === 'passive'){
          english = 'is ' + english + "ed ";
        }
      }
    }
    else if(voice === 'passive'){
      if (english.match(' ')) {
        english = 'are ' + english.replace(' ', 'ed ');
      }
      else{
        english = 'are ' + english + 'ed ';
      }
    }
    
  }
  return catchStrangePassiveVerbs(english);
}
