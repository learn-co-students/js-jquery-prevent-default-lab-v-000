$(document).ready(function(){
  addToList();
});


function addToList() {
  $('form').on('submit', appendList);
}

function appendList(e) {
  var listItem = $('#item').val();
  
  $('#list').append(`<li>${listItem}</li>`);
  e.preventDefault();
}