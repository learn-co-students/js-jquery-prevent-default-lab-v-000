$(document).ready(function(){
  submitForm()
});

// define functions here

function submitForm(){
  $('form').on('submit', function(e){
    addsToList();
    e.preventDefault();
  });
}

function addsToList(){
  var item = $('#item').val();
  $('#list ol').append("<li>" + item + "</li>");
}