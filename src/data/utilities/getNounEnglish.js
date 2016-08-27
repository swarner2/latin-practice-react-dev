
export default function getNounEnglish(that){
  var englishExceptions = {
    'fish' : 'fish',
    'ox' : 'oxen',
    'wolf' : 'wolves',
    'sheep' : 'sheep',
    'wife' : 'wives',
    'joy' : 'joys',
    'valley' : 'valleys',
    'children' : 'children',
    'person' : 'people',
    'walkway' : 'walkways',
    'donkey' : 'donkeys',
    'envoy' : 'envoys',
    'boy' : 'boys',
    'pay' : 'wages',
    'parent' : 'parents',
  };
  if (that.ending.number === 'sg') {
    that.stem.english =  ' the ' + that.stem.english + ' ';
  }
  else if (that.stem.english in englishExceptions) {
    that.stem.english = ' the ' + englishExceptions[that.stem.english] + ' ';
  }
  else if (that.stem.english.match(/y$/)) {
    that.stem.english = ' the ' + that.stem.english.replace('y', 'ies ');
  }
  else if (that.stem.english.match(/s$/)) {
    that.stem.english = ' the ' + that.stem.english.replace(/s$/, 'ses ');
  }
  else if (that.stem.english.match(/man$/)  && that.stem.english !== 'human') {
    that.stem.english = ' the ' + that.stem.english.replace('man', 'men ');
  }

  else{
    that.stem.english = ' the ' + that.stem.english + 's ';
  }
}
