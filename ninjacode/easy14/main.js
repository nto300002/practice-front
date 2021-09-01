// document.querySelector(".target").style.display ="none";

function clickBtn1(){
	const trigger = document.querySelector(".target");

	if(trigger.style.display=="block"){
		// noneで非表示
		trigger.style.display ="none";
	}else{
		// blockで表示
		trigger.style.display ="block";
	}
}
