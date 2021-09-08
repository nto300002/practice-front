/**
 * 引数を2倍にする関数を作る
 */
function nibai(x){
  return x*2
};
console.log(nibai(2))
/**
 * 引数を+1
 */
function plus(x){
  return x+1
};
console.log(plus(2))
/**
 * 引数の文字数を返す関数を作る
 */
const length = x => x.length;
console.log(length('aaaaaa'))
/**
 * 引数の文字数が10文字未満ならtrue,10文字以上だったらfalseを返す関数を作る
 */
function CharacterLimit(x){
  if (x.length <10 ){
    return true
  }else{
    return false
  }
}
console.log(CharacterLimit('aaaaaaaaaaaaaaaaaaaa'))

function CharacterLimit(x){
  return (x.length < 10)?console.log('10以下'):console.log('10以上')
}
console.log(CharacterLimit('aa'))

/**
 * 2つの引数を合計する関数を作る
 */
function plusX(x,y){
  return x+y
}
console.log(plusX('22','11'))
/**
 * 2つの引数の文字列を結合する関数を作る
 */
function plusStr(x,y){
  if(typeof x == 'string' && typeof y == 'string'){
    return x+y
  }else{
    console.log('文字列のみ')
  }
}
console.log(plusStr(3223,'uuru'))
/**
 * 引数の最初の文字を返す関数を作る
 */
const firstCh = (x) => x[0];
console.log(firstCh('3244'))
/**
 * 引数の最後の文字を消す関数を作る
 */
const firstCh = (x) => x.slice(0,-1);
console.log(firstCh('3244'))
/**
 * true,falseを逆にする関数を作る
 */
function boolReverse(x){
  if(x === true){
    return false
  }else{
    return true
  }
}
console.log(boolReverse(true))
/**
 * 配列の中身を結合してカンマ区切りの文字列にする関数を作る
 */
function Concat(ary1,ary2){
  //let concatStr = String(ary1.concat(ary2)); 
  if(typeof ary1 === 'string' && typeof ary2 === 'string'){
    return ary1.concat(ary2)
  }else{
    return String(ary1.concat(ary2))
  }
}
console.log(Concat(['1','2'],[1,"2"]))
