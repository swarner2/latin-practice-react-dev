import NounCaseUse from './NounCaseUse';

export default  function placeWhere(){
    return new NounCaseUse('ablative', 'place where', ['place'], function(that){
//      console.log(that);
      that.prep = {}
      if (that.noun.on) {
//        console.log('on');
        that.prep.english = ' on ';
        that.prep.latin = ' in ';
      }
      else {
        that.prep.english = ' in ';
        that.prep.latin = ' in ';
      }
      that.stem.latin = that.prep.latin + that.stem.latin;
      that.stem.english = that.prep.english + that.stem.english;
    });
  };
