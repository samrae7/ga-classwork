$(document).ready(function(){
  console.log('hello');

  getTasks();
  $('#new-todo').on('keypress',function(event){
    if( event.which === 13 ) {
      createItem();
    }
  })

  $('#todo-list').on('change', '.toggle', changeTaskStatus);
  // EVENT DELEGATION
}) 

function getTasks(){
  //ajax request to the DB to receive all the tasks
  request('GET', '/items', null)
  // requesting all data hence data=null
  .done(function(response){
// iterate through the array of tasks
    $.each(response, function (index, task){
      appendNewItem(task);
    })

  })
}

function request(method, url, data) {
  return $.ajax({
    method: method,
    url: url,
    dataType: 'json',
    data: data
  })
}

function appendNewItem(data) {

  // add task as an <li> to the existing <ul>

   $('<li class="'+ (data.done == 't' ? "completed" : "") + '">'+
     '<input class="toggle" type="checkbox" data-id="'+ data.id +'" '+ (data.done == 't' ? 'checked="checked"' : "") + '>'+
     '<label>'+ data.item +'</label>'+
     '<button class="destroy" data-id="'+ data.id +'"></button>'+
     '</li>').prependTo("#todo-list")
}

function createItem() {
  // request('POST', '/')
  data = {item: $('#new-todo').val()};

  console.log($('#new-todo').val())
  $.post('/items', data, function(response) {
  console.log(response)
  appendNewItem(response)
  $('#new-todo').val('');
  })
}

function changeTaskStatus() {
  var $this = $(this)
  taskId = $(this).data('id');
  isDone = $(this).is(':checked');
  $.ajax({
    method: 'PUT',
    url: '/items/' + taskId,
    data: {done: isDone},
    dataType: 'json'
  }).done(function(response){
    console.log(response)
    $this.parent().toggleClass('completed');
  })
}

