// jQuery
// $('.demo-btn').on('click', function() {
//   alert($(this).index());
// });

// JavaScript
let btnEl = document.querySelectorAll('li');
for (let i = 0; i < btnEl.length; i++) {
  (function(j){
      btnEl[j].addEventListener('click', function(){
         alert(j +1);
      });
  })(i);
}
