$(document).ready(function(){
  console.log('works')
  var socket = io('http://f9dab85c.ngrok.io')
  var photoIds =[];

  socket.on('connect', function() {
    console.log('connected')
  })

  socket.on('instagram', function(object){
    console.log(object);
    $.ajax({
      url: 'https://api.instagram.com/v1/tags/' + object[0].object_id + '/media/recent?client_id=2c927af4997446959b265f0549a41bd5',
      dataType: 'jsonp'
    })
    .done(function(response){
      if(photoIds.indexOf(response.data[0].id)===-1) {
      $('#photo-container').prepend('<li><img src="' + response.data[0].images.standard_resolution.url + '"></li>');
        photoIds.push(response.data[0].id)
      } else {
        console.log('duplicate')
      }
    })
  })

})