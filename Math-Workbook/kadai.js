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
let fruit = ["りんご","みかん","いちご","もも"]
fruit.reverse()
console.log(fruit)
// 配列から"みかん"のindexを取得する
fruit.indexOf('みかん')
// 配列の2番目の要素と3番目の要素からなる配列を作る
let fruit = ["りんご","みかん","いちご","もも"]
fruit.splice(1,2)
fruit.slice(1,3)
// 配列の3番目の要素を削除する
fruit.splice(2,1)
console.log(fruit)
// 配列のそれぞれの要素をログ出力する
let fruit = ["りんご","みかん","いちご","もも"]
fruit.map(fruit.forEach(element => console.log(element)));
// 配列のそれぞれの要素を2倍にしてログ出力する
let nibai2 = [3,43,22,90]
nibai2.map(nibai2.forEach(element => console.log(element*2)));
// 配列のそれぞれの要素を3倍に加工した配列を取得する
let array1 = [23,44,13,880]
const map1 = array1.map(x => x*2)
console.log(map1)
// 配列の中で3文字の要素のみに絞り込んだ配列を取得する
let array2 = ['23','44','13','880']
const result = array1.filter(array1 => array1.length === 3);
console.log(result)
　const result2 = array1.find(element => element.length === 3) //配列ではない
　console.log(result2)
// あいうえお順にソートする
let fruit = ["りんご","みかん","いちご","もも"]
fruit.sort();
// あいうえお順の逆にソートする
fruit.sort().reverse();



/**
 *  id、name、ageプロパティを持つオブジェクト要素の配列を定義する。
それぞれidは1,2,3、nameは"ジョン","ボブ","マイケル"、ageは15,20,30とする
 */
const people2 = [
  {
    id:1,
    name:'ジョン',
    age:15
  },
  {
    id:2,
    name:'ボブ',
    age:20
  },
  {
    id:3,
    name:'マイケル',
    age:30
  }
]
// オブジェクト配列の2番目の要素を取得する
people2[1]
// オブジェクト配列の3番目の要素のageを取得する

