import dictionary from './dictionary.js';

function Computer () {
  this.memory = null;
}//清除之前的单词记录

Computer.prototype.responseAnswer = function (firstLetter) {
  var word = dictionary.getByFirstLetter(firstLetter);
  return word;
}//自动输入第一个单词

export default new Computer();
