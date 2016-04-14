$(document).ready(function(){
  $('form').on('submit', function(event){
    addListItem();
    event.preventDefault();
  });
});

function addListItem(){
  var item = $('#item').val();
  $('#list ol').append("<li>" + item + "</li>");
}
