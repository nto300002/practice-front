
const val22 = {
  name: 'dfs',
  age: 32,
};
val22.name = 'oooo'; //参照を変更するのでconstで宣言していても問題ない
console.log(val22);


const val33 = ['21212', 'ooo'];
val33[0] = '0910';
val33.push('iiii');
console.log(val33);

//-----アロー関数
function f1(str) {
  return str;
}
console.log(f1('you lose'));

const f2 = str => str;
console.log(f2('dekita'));

const f3 = (num1, num2) => {
  return num1 + num2;
};
console.log(f3(21,33));



//-----分割代入
const myProfie = {
  name: 'aaa',
  age: 33
};

const message1 = `名前${myProfie.name} 年${myProfie.age}`;
console.log(message1);


const { name, age } = myProfie;
const message2 = `名前daaa${name} 年${age}`;
console.log(message2);

const myProfie = ['oni', 44];

const [ name, age ] = myProfie;
const message3 = `名前daaa${name} 年${age}`;
console.log(message3);



//-----デフォルト値
const sayHello = ( name = ' !guest! ') => console.log(`hello${name}YO`);
sayHello();

//-----スプレット構文
// 配列の展開
const arr1 = [1,2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//  まとめる
const arr2 = [1,2,3,4,5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//  配列のコピー　結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);



//   参照を上書きされてしまう
const arr8 = arr4;
console.log(arr8);

arr8[0] = 100;
console.log(arr4);


//   スプレット構文なら上書きされない
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);



//-----mapやfilter
const nameArr = ['tanaka', 'yy', 'taro'];
for(let index = 0; index < nameArr.length; index++){
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name)=>{
  return name;
})
console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}ha ${name}desu`));

const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);


const newNameArr = nameArr.map((name) => {
  if( name === 'yy'){
    return name
  } else {
    return `${name}san`
  }
})
console.log(newNameArr);



//-----三項演算子など
//   条件 ? true : false
const val1 = 1 > 0 ? 'true' : 'false';
console.log(val1);


const num = '1000';
console.log(num.toLocaleString());

const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入れてね';
console.log(formattedNum);


const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100 over' : '100 0K';
}
console.log(checkSum(55,434));


//-----論理演算子のほんとうの意味を知ろう
// && ||

const flag1 = true;
const flag2 = false;

if(flag1 || flag2) {
  console.log('1or2 true');
}

if(flag1 && flag2) {
  console.log('1or2 true');
}


 //  左側がfalseなら右側を返す
const num = 100;
const fee = num || 'no money';
console.log(fee);

//  左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && 'nanika';
console.log(fee2);
