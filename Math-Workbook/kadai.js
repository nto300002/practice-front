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




/**
 *  文字列"あいうえお"を変数で定義する。
 */
let a = 'あいうえお';
console.log(a)
/**
 * 文字列"あいうえお"を"かきくけこ"に変更する
 */
a = 'かきくけこ'
console.log(a)
/**
 * 文字列"あいうえお"と"かきくけこ"の2つの文字列を連結する。
 */
let a1 = 'あいうえお'
let b1 = 'かきくけこ'

let c1 = a1+b1
c1 = c1.split('')
c1 = c1.join('')

console.log(c1)
console.log(a1.concat(b1))
/**
 * 文字列"あいうえお"に含まれる"あ"を"お"に変換する
 */
console.log(a1.replace('あ','お'))
/**
 * 文字列"あああああ"に含まれる"あ"を"お"に変換する
 */
let aa = 'あああああ'
aa =aa.replaceAll('あ', 'お')
console.log(aa)
/**
 * 文字列"あああああ"に含まれる"あ"を"お"に変換する
 */
let aa = 'あああああ'
aa =aa.replaceAll('あ', 'お')
console.log(aa)
/**
 * 文字列"あいうえお"を1文字ずつ分けて配列に入れる
 */
let split = 'あいうえお'
split.split('')




/**
 * 空のオブジェクトを定義する
 */
const f = {};
/**
 * プロパティnameが"ボブ"、ageが20であるオブジェクトを定義する
 */
const people={
  name: 'ボブ',
  age: 20
}
// オブジェクトのnameプロパティの値を取得する
people.name
// オブジェクトのageプロパティの値を30に変更する
people.age = 30;
people.age
// オブジェクトにプロパティweightとその値"50kg"を追加する
people.weight='50kg';
people.weight
// オブジェクトのnameプロパティを削除する
delete people.name
console.log(people)



// 空の配列を定義する
let air = []
/**
 * 文字列要素"りんご"、"みかん"、"いちご"、"もも"が入った配列を定義する
 */
let fruit = ["りんご","みかん","いちご","もも"]
// 配列の2番目の要素を参照する
fruit[1];
// 配列の3番目の要素を変更する
fruit[2] = 'かぼす';
// 配列の最後に文字列要素"すいか"を追加する
fruit.push('すいか')
// 配列の最後の要素を削除する
fruit.pop()
// 配列の最初に文字列要素"すいか"を追加する
fruit.unshift('すいか')
// 配列の最初の要素を削除する
fruit.shift()
// 配列を逆順にする
fruit.reverse()
console.log(fruit)
