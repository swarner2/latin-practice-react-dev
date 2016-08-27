export default function catchStrangePassiveVerbs(english){

  if(english.trim().match(/(eed$)|(eed\s) /)){
    english = english.trim().replace(/eed$/, 'ed ');
  }

  var exceptions = {
    'detered' : 'deterred',
    'throwed' : 'thrown',
    'keeped' : 'kept',
    'strewed' : 'strewn',
    'builded' : 'built',
    'leted' : 'let',
    'losed' : 'lost',
    'taked' : 'taken',
    'seed' : 'seen',
    'maked' : 'made',
    'bloted' : 'blotted',
    'accompanyed' : 'accompanied',
    'oughted' : 'owed',
    'catched' : 'caught',
    'clost' : 'closed',
    'stired' : 'stirred',
    'careed for' : 'cared for',
    'binded' : 'bound',
    'thinked' : 'thought',
    'leaded' : 'led',
    'carryed' : 'carried',
    'holded' : 'held',
    'sended' : 'sent',
    'getted' : 'gotten',
    'makeed' : 'made',
    'gived' : 'given',
  }

  for(var prop in exceptions){
    english = english.match(prop) ? english.replace(prop, exceptions[prop]) : english
  }

  return english
}
