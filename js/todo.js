$(document).ready(function(){
  // call functions here
  addItem();
});

// define functions here

function addItem(){
  $('form').on('submit', function(event){
    var item = $('#item').val();
    $('ol').append("<li>" + item + "</li>");
    event.preventDefault();
  });
};
