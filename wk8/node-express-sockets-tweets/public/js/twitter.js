$(document).ready(function(){
  console.log('ready');
  var socket = io()
  socket.on('connect', function(){
    console.log('client has connected')
  })

  socket.on('tweets', function(tweet){
    var html = '<div class="row"><div class="col-md-6 col-md-offset-3 tweet"><img src="' + tweet.user_profile_image + '" class="avatar pull-left"/><div class="names"><span class="full-name">' + tweet.name + ' </span><span class="username">@' +tweet.screen_name + '</span></div><div class="contents"><span class="text">' + tweet.text + '</span></div></div></div>';
    $('#tweet-container').prepend(html)
  })
})