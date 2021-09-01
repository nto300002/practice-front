const fruits = ["りんご", "みかん", "バナナ"];
function judge( str ){
	return fruits.indexOf(str) >= 0 ? true : false;
}
alert(judge("りんご"));

//配列に含まれているかを判断するには indexOf が使えます。
// 含む場合「>= 0」
// 含まない場合「== -1」となります。
