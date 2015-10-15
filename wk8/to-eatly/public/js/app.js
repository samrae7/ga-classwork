// namespacing?!?!?!?
var Food = Food || {};
var View = View || {};

$(document).ready(function() {
  Food.all();
  View.initialise();
})

View = {
  initialise: function() {
    $('#food-form').on('submit', function(e) {
      e.preventDefault();
      Food.create($(this).serialize())
    })
    $('#food-ul').on('click', '.js-close', function(e) {
      Food.delete($(this).data('id'))
    })
  }
}

Food = {
  all: function() {
    $.get('/foods', function(response){
      console.log(response);
      var foods = response;
      $.each(foods, function(index, food) {
         var template = $('#template').html();
         Mustache.parse(template);
         var rendered = Mustache.render(template, {foodname: food.name, yumminess: food.yumminess, foodid: food.id});
         $('#food-ul').append(rendered);
      })
    })
  },
  create: function(foodParams) {
    console.log(foodParams);
    $.post('/foods', foodParams)
    .done(function(response) {
      var food = response
      var template = '<li class="list-group-item">';
      template += food.name;
      template += '<span class="label label-default">' + food.yumminess + '</span>';
      template += '<button data-id="' + food.id + '" type="button" class="js-close close" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
      template += '</li>';
      $('#food-ul').append(template);
    })
    .done(function() {
      $('#food-form').trigger('reset');
    })
  },
  delete: function(foodId) {
    $.ajax({
      type: 'DELETE',
      url: 'foods/' + foodId
    })
    .done(function(response) {
      console.log(response);
      $('#food-ul').empty()
      Food.all()
    })
  }
}















