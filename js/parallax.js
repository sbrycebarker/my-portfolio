$(window).scroll(function(){
 var wScroll = $(this).scrollTop();
 console.log(wScroll)
 $('#top').css({
   'transform' : 'translate(0px, '+ wScroll /100 +'%)'
 })
 var scroll = $(this).scrollTop()
 if ( scroll >= 1200) {
   scroll = scroll - 1199;
   console.log("here", scroll)
   $('.projcon').css({
     'transform' : 'translate(0px, '+ scroll/5 +'%)'
   })
 }

});
