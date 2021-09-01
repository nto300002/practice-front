const now   = new Date();       
const now_month = now.getMonth() + 1;    //月

function month_judge( month ){
 if( now_month == month ){
  alert("今月の月です！");
 }else{
  alert("今月の月ではありません！");
 }
}

month_judge(3);
