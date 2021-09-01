$(function(){
  $('li').on('click',function(){
    alert($(this).attr('class'));
  });
});
