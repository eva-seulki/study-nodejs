// NPM
// npm init : 해당 프로젝트를 NPM package로 초기화 함
// mpm install underscorejs
// npm install underscore --save : 의존성 추가


//https://underscorejs.org

var _ = require('underscore'); // underscore varrier로 _를 쓰는 관행이 있뚬. 뽀하하
var arr = [3,6,9,12]
console.log(arr[0]);
console.log(_.first(arr));
console.log(arr[arr.length-1]);
console.log(_.last(arr));
