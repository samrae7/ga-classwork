
$(document).ready(function(){

 console.log('JS linked');
$('body').css('background-color','blue')
$('body').append('<img>');
$('img').css('position','absolute');
$('img').css('left','0px');
$('img').attr('src','http://www.anniemation.com/clip_art/images/cat-walk.gif');

// $('img').attr('position', 'absolute'); 


function MoveCat() {
  var windowWidth = $(window).width();
  console.log(windowWidth);
  currentLeft = parseInt($('img').css('left'));
  newLeft= currentLeft + 10;
  $('img').css('left',newLeft+'px');
}

setInterval(MoveCat,50);

});

