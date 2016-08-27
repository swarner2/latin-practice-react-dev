import NounCaseUse from './NounCaseUse';

export default function subject(types){
  if (types === undefined) { types = ['person','animal']}
  return new NounCaseUse('ablative', 'agent', types, function(that){
    that.prep = {}

    that.prep.english = ' by '
    if(that.stem.latin.trim().match(/^[aeioh]/)){
      that.prep.latin = ' ab '
    }
    else{
      that.prep.latin = ' a '
    }
    
    that.stem.latin = that.prep.latin + that.stem.latin;
    that.stem.english = that.prep.english + that.stem.english;

  });
};
