const target_str = "忍者CODE";

function ninja_judge( str ){
 if( str.indexOf(target_str) != -1 ){
  alert("含む");
 }
}

ninja_judge("おはよう忍者CODE");


const my_array = ["忍者", "CO", "DE"];

function ninja( my_array ){ 

 let res = null;
 
 const array_string = my_array.every((item) => {
  return typeof item == "string";
 });


 if(array_string){
 	res = my_array.join('');
 }else{
  res = my_array.reduce(function(p, c) {
		return p + c;
	}); 
 }}

 alert(ninja(my_array))
