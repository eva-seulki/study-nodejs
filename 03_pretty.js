function hello(name) {
  console.log('Hi, '+name);
}

hello('eva');

// uglifyjs pretty.js -->> 위 코드에서 개행을 전부 없애줌
// uglifyjs pretty.js -m -->> -m은 mangle(짓이기다) 뜻으로, 변수를 가장 짧은 단어로 변경해줌
// uglifyjs pretty.js -o uglified.js -m -->> 저장하기
