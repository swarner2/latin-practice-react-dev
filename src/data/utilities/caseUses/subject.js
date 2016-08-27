import NounCaseUse from './NounCaseUse';

export default function subject(types, verbNumber){
  if (types === undefined) { types = ['person','animal']}
  return new NounCaseUse('nominative', 'subject', types, function(that){
    if(that.noun.declension === 'second' && that.noun.firstDict.match(/r$/)){
      that.ending.latin = 'firstDict ';
    }
  }, verbNumber);
};
