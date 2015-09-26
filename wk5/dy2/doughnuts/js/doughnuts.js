$(document).ready(function() {

  $('#new-doughnut').on('submit', addDoughnut);

  $('body').on('click', '.delete', deleteDoughnut)

  getDoughnuts();

})

var endpoint = 'http://api.doughnuts.ga/doughnuts'


function addDoughnut(e) {
  e.preventDefault();
  console.log('doughnut');

  var doughnut = {
    style: $('#doughnut-style').val() ,
    flavor: $('#doughnut-flavour').val() 
  }
  $.post(endpoint, doughnut).done(function(response) {
    console.log(response);
    appendDoughnut(response);
    $('doughnut-flavour').empty();
  })

 $.ajax({
    url: endpoint
  }).done(function(response){
    console.log(response)
  })

}

function getDoughnuts() {
  $.ajax({
    url: endpoint
  })
  .done(function(response) {
    console.log(response);
    $.each(response, function(index,doughnut){
      appendDoughnut(doughnut)
    })
  });
}

function appendDoughnut(doughnut) {
  $('#doughnuts').prepend('<li>' + doughnut.flavor + ' <em>' +doughnut.style + '</em><a class="delete" href="#" data-id=' + doughnut.id + '">delete</a></li>')
  }


function deleteDoughnut(e) {
    console.log('deleted the doughnut');
    console.log($(this).data('id'));


    var element = $(this)

    $.ajax({
      url: endpoint + '/' + element.data('id'),
      method: 'delete'
    })
    .done(function(response){
      console.log('success');
      element.parent().remove();
    })
    .fail(function(err) {
      console.log('error');
      console.log(err);
    })
  }
