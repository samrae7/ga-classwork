$(document).ready(function() {
  console.log('ready');

  $('li').on('click', function(e){
    console.log('clicked');
    var $element = $(this);


    $element.hide('medium', 'swing', function() {
      setTimeout(function() {
        $element.show('swing');
      }, 1000);
    });
  })
});

  //1 try to use 'on' for listeners rather than just click() etc

      // 2 console.log(this.getAttribute('class')); - JS equivalent
    console.log($(this).attr('class'));