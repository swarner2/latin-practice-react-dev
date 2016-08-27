import Config from '../../stores/config/config'



export var handleChapters = function(){
  var chapter = Config.stats.chapter
  var section = Config.stats.section
  function makeRomanNumerals(chapter){
    var chapterList = [];
    var nextChapter = 'I'
    while(chapterList[ chapterList.length - 1] !== chapter){
      chapterList.push(nextChapter);
      nextChapter = nextChapter + 'I';
      if(nextChapter.match('VIIII')){
        nextChapter = nextChapter.replace('VIIII', 'IX')
      }
      if(nextChapter.match('IXI')){
        nextChapter = nextChapter.replace('IXI', 'X')
      }
      if(nextChapter.match('IIII')){
        nextChapter = nextChapter.replace('IIII', 'IV')
      }
      if(nextChapter.match('IVI')){
        nextChapter = nextChapter.replace('IVI', 'V')
      }
      if(nextChapter.match('VV')){
        nextChapter = nextChapter.replace('VV', 'X')
      }
    }
    return chapterList;
  }

  var chapters = makeRomanNumerals(chapter)
  var result = {
    chapters : chapters,
  }

  return result;

};
